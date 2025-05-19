// context/AppSettingsContext.tsx

// Modules
import React, { createContext, useContext } from "react";

// Hooks
import { usePersistentState } from "../hooks/usePersistentState";

interface AppSettingsContextProps {
  grayscale: boolean;
  setGrayscale: (val: boolean) => void;
  animation: boolean;
  setAnimation: (val: boolean) => void;
}

const AppSettingsContext = createContext<AppSettingsContextProps | null>(null);

export const AppSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [grayscale, setGrayscale] = usePersistentState("grayscale", false);
  const [animation, setAnimation] = usePersistentState("animation", true);

  return (
    <AppSettingsContext.Provider value={{ grayscale, setGrayscale, animation, setAnimation }}>
      {children}
    </AppSettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppSettings = () => {
  const context = useContext(AppSettingsContext);
  if (!context) throw new Error("useAppSettings must be used within AppSettingsProvider");
  return context;
};
