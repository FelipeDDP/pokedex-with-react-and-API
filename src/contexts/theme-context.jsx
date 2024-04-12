import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee',
        bgBody: '#EE8329',
        bgContainer: '#CD5241',
    },
    dark: {
        color: '#ffffff',
        background: '#000000',
        bgBody: '#1F1F24',
        bgContainer: '#29314A',
    },
    colors: {
        primary: 'red',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    // console.log(theme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}