import React, { createContext, useContext } from "react";

const LoggerContext = createContext();

export const LoggerProvider = ({ children }) => {
  const logInfo = (message) => {
    console.log("INFO:", message);
  };

  const logError = (message) => {
    console.error("ERROR:", message);
  };

  return (
    <LoggerContext.Provider value={{ log: logInfo, logError }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLoggerHook = () => useContext(LoggerContext);
