import { createContext, useContext } from "react";

const LoggerContext = createContext();

export const LoggerProvider = ({children}) =>{
    const log = (message) =>{
        console.log(message);
    }
    return (
        <LoggerContext.Provider value={{ log }}>
            {children}
        </LoggerContext.Provider>
    );
};

export const useLoggerHook = () => useContext(LoggerContext);

