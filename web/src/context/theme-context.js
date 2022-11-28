import { useState, createContext, useEffect } from 'react';

const getInitialTheme = (key, initialValue) => {
    const [storedTheme, setStoredTheme] = useState(() => {
        try {
            const themeFromLS = typeof window !== 'undefined' 
                ? window.localStorage.getItem(key)
                : undefined;                

            return themeFromLS ? JSON.parse(themeFromLS) : initialValue

        } catch(error) {
            return initialValue;
        };
    });

    const persistTheme = theme => {
        try {
            const themeToStore = theme instanceof Function ? theme(storedTheme) : theme;
            setStoredTheme(themeToStore);

            typeof window !== 'undefined' && window.localStorage.setItem(key, JSON.stringify(themeToStore));

        } catch (error) {
            console.log(error);
        };
    };

    return [storedTheme, persistTheme];
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = getInitialTheme('theme', null);

    const switchTheme = newTheme => {
        const root = document.body;
        root.classList.remove(theme);
        root.classList.add(newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;