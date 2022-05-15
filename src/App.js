import { Outlet } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookSquare,
    faTwitter,
    faPinterest,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

// contexts
import { AppContextWrapper } from './contexts/app';
import { ThemeContextWrapper } from './contexts/theme';

library.add(faBars, faFacebookSquare, faTwitter, faPinterest, faInstagram);

const ResetStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.family};
        font-size: ${({ theme }) => theme.font.size};
        margin: 0;
        padding: 0;
    }
`;

const GlobalStyles = createGlobalStyle`
    body {
        font-weight: ${({ theme }) => theme.font.weights.medium};
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    h2 {
        font-size: 1.5rem;
        margin: 1em 0;
    }

    h3 {
        font-size: 1.25rem;
    }
`;

const App = () => {
    return (
        <AppContextWrapper>
            <ThemeContextWrapper>
                <StyledEngineProvider injectFirst>
                    <div>
                        <ResetStyles />
                        <GlobalStyles />
                        <Outlet />
                    </div>
                </StyledEngineProvider>
            </ThemeContextWrapper>
        </AppContextWrapper>
    );
};

export default App;
