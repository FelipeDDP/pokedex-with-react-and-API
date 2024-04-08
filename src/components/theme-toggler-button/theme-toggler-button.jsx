import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <button
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
            style={{color: theme.color, backgroundColor: theme.background}} 
            >
                Clique aqui
            </button>
        </div>
    )
}