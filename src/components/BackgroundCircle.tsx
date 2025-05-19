// components/BackgroundCircle.tsx
import React from "react";

interface BackgroundCircleProps {
  size: string;
  position: string;
  color: string;
  delay: string;
}

export const BackgroundCircle: React.FC<BackgroundCircleProps> = React.memo(({ size, position, color, delay }) => {
  return (
    <div
      className={`absolute animate-float ${size} ${position} rounded-full bg-radial ${color} opacity-40 blur-2xl will-change-transform`}
      style={{ animationDelay: delay }}
    ></div>
  );
});