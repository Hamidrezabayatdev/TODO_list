import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Create the context
const ScreenWidthContext = createContext<number | undefined>(undefined);

// Provider component
export const ScreenWidthProvider = ({ children }: { children: ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 200); // Debounce delay
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ScreenWidthContext.Provider value={screenWidth}>{children}</ScreenWidthContext.Provider>;
};

// Custom hook to use the screen width
export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw new Error("useScreenWidth must be used within a ScreenWidthProvider");
  }
  return context;
};