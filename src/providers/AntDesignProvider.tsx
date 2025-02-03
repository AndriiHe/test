import React, { ConfigProvider, theme } from "antd";
import { createContext, useState } from "react";

import type { PropsWithChildren } from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

const DARK_MODE_KEY = "dark-mode-enabled";

export function AntDesignProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem(DARK_MODE_KEY) === "true"
  );

  const toggleTheme = () => {
    setDarkMode((prev: boolean) => {
      localStorage.setItem(DARK_MODE_KEY, (!prev).toString());
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
