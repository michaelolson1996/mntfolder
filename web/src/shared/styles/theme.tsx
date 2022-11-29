import { createTheme, Theme } from "@mui/material";

const getTheme = (isDark: boolean): Theme => {
    
    const theme = createTheme({
        typography: {
            fontSize: 14,
            fontFamily: [
                "Montserrat-Light.ttf"
            ].join(","),
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        spacing: 1,
        palette: isDark ?
            {
                mode: "dark",
                contrastThreshold: 4.5,
                primary: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                secondary: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                error: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                warning: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                info: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                success: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                }
            }
        :
            {
                mode: "light",
                contrastThreshold: 4.5,
                primary: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                secondary: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                error: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                warning: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                info: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                },
                success: {
                    main: "#000000",
                    light: "#000000",
                    dark: "#000000",
                    contrastText: "#000000",
                }
            }
    });

    return theme;
};

export default getTheme;