"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextType {
  showSideM: boolean;
  showCreate: boolean;
  toggleSidebar: () => void;
  toggleCreatePopup: () => void;
  setShowCreate: any;
}

// Create a Context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a Provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showSideM, setShowSideM] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);

  const toggleSidebar = () => setShowSideM(!showSideM);

  const toggleCreatePopup = () => setShowCreate(true);

  return (
    <GlobalContext.Provider
      value={{
        showSideM,
        toggleSidebar,
        toggleCreatePopup,
        showCreate,
        setShowCreate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
