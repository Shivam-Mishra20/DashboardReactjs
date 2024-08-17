import { createContext, useMemo, useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'light' });

export function ToggleTheme({ children }) {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode ? savedMode : 'light';
    });

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    localStorage.setItem('themeMode', newMode);
                    return newMode;
                });
            },
            mode,
        }),
        [mode],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                typography: {
                    fontFamily: 'Raleway, Arial, sans-serif', // Set Raleway as the default font
                    h1: {
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 700,
                    },
                    h2: {
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 600,
                    },
                    body1: {
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 400,
                    },
                    // Add more specific typography settings as needed
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export function useColorMode() {
    return useContext(ColorModeContext);
}
