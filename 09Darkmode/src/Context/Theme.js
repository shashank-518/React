import { useState , useContext , createContext } from "react";

export const ThemeContext = createContext({
    ThemeValue: "Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider;

export const themeApi = ()=>{
    return useContext(ThemeContext)
}