"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMouseParallax(sensitivity = 1) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural fluid inertia
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20, mass: 0.8 });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate position relative to container center (-1 to +1)
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const normX = ((e.clientX - centerX) / (rect.width / 2)) * sensitivity;
        const normY = ((e.clientY - centerY) / (rect.height / 2)) * sensitivity;

        mouseX.set(Math.max(-1.5, Math.min(1.5, normX)));
        mouseY.set(Math.max(-1.5, Math.min(1.5, normY)));
      } else {
        // Fallback to window dimensions
        const normX = ((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * sensitivity;
        const normY = ((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * sensitivity;
        mouseX.set(Math.max(-1.5, Math.min(1.5, normX)));
        mouseY.set(Math.max(-1.5, Math.min(1.5, normY)));
      }
    };

    const handleMouseLeave = () => {
      // Return gracefully to center
      mouseX.set(0);
      mouseY.set(0);
    };

    // Device orientation for mobile gyroscope parallax
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma is left-to-right (-90 to 90), beta is front-to-back (-180 to 180)
        const normX = (e.gamma / 45) * sensitivity;
        const normY = ((e.beta - 45) / 45) * sensitivity;
        mouseX.set(Math.max(-1.5, Math.min(1.5, normX)));
        mouseY.set(Math.max(-1.5, Math.min(1.5, normY)));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleDeviceOrientation);
      }
    };
  }, [mouseX, mouseY, sensitivity]);

  return { springX, springY, containerRef };
}
