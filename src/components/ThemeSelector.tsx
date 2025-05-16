// ThemeSelector.tsx
"use client";

// Modules
import React from "react";
import { useThemeMode } from "flowbite-react";

interface Option {
  label: string;
  value: "auto" | "light" | "dark";  
  icon: React.ReactNode;
}

export function ThemeSelector() {
  const { mode, setMode } = useThemeMode();

  // Theme options for the selector
  const options: Option[] = [
    {
      label: "System theme",
      value: "auto",
      icon: (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor"></path>
          <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" strokeLinecap="round"></path>
        </svg>
      ),
    },
    {
      label: "Light theme",
      value: "light",
      icon: (
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle>
          <path d="M14 8.5V6.5M17.889 10.1115L19.3032 8.69727M19.5 14L21.5 14M17.889 17.8885L19.3032 19.3027M14 21.5V19.5M8.69663 19.3029L10.1108 17.8887M6.5 14L8.5 14M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" strokeLinecap="round"></path>
        </svg>
      ),
    },
    {
      label: "Dark theme",
      value: "dark",
      icon: (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" strokeLinejoin="round"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.5 text-gray-950 dark:bg-white/10 dark:text-white">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setMode(opt.value)}
          role="radio"
          aria-checked={mode === opt.value}
          className={`rounded-full p-1.5 *:size-7 transition-colors duration-200 ${
            mode === opt.value
              ? "bg-blue-700 text-white ring ring-blue-500/50 "
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
