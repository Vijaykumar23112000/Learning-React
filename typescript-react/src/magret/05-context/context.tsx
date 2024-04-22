import React, { createContext, useContext } from "react";

const ThemeProviderContext = createContext<string | undefined>(undefined)

export function ThemeProvider({children} : {children:React.ReactNode}){
        
    return (
        <ThemeProviderContext.Provider value="Mathew" >
            {children}
        </ThemeProviderContext.Provider>
    )
}


export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if(context===undefined){
        throw new Error("Context is undefined")
    }
    return context
} 