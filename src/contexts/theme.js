import { ThemeProvider } from 'styled-components';

export const theme = {
    colors: {
        // Primary
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        // Secondary
        red: 'hsl(0, 87%, 67%)',
        // Neutral
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
        white: 'hsl(0, 0%, 100%)'
    },
    font: {
        size: '18px',
        family: "'Poppins', sans-serif",
        weights: {
            medium: 500,
            bold: 700
        }
    }
};

export const ThemeContextWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
