import { useContext } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../contexts/app';

import { Button } from './Button';

import Logo from '../assets/images/logo-header.svg';

import HamburgerMenu from './HamburgerMenu';

const HeaderSC = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    margin: 2em auto;

    @media (min-width: 700px) {
        margin: 1em auto;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    width: 40%;
`;

const Nav1 = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 65%;

    ul {
        width: 100%;
    }
`;

const Nav2 = styled.nav`
    display: flex;
`;

const Ul = styled.ul`
    display: none;

    @media (min-width: 700px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }
`;

const LinkSC = styled(Link)`
    color: ${({ theme }) => theme.colors.grayishViolet};
    filter: brightness(75%);
    font: ${({ theme }) => theme.font.weights.bold};

    :hover {
        color: ${({ theme }) => theme.colors.veryDarkBlue};
    }
`;

const HamburgerButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

const HamburgerIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.grayishViolet};
    font-size: 1.5rem;
`;

const Header = () => {
    const { dispatch } = useContext(AppContext);

    const toggleHamburgerMenu = () =>
        dispatch({ type: 'TOGGLE_HAMBURGER_MENU' });

    return (
        <>
            <HeaderSC>
                <Div>
                    <img src={Logo} alt='Shortly logo' />
                    <Nav1>
                        <Ul>
                            <li>
                                <LinkSC to=''>Features</LinkSC>
                            </li>
                            <li>
                                <LinkSC to=''>Pricing</LinkSC>
                            </li>
                            <li>
                                <LinkSC to=''>Resources</LinkSC>
                            </li>
                        </Ul>
                    </Nav1>
                </Div>
                <Nav2>
                    <Ul>
                        <li>
                            <LinkSC to=''>Login</LinkSC>
                        </li>
                        <li>
                            <Button as={Link} to=''>
                                Sign Up
                            </Button>
                        </li>
                    </Ul>
                    <HamburgerButton onClick={toggleHamburgerMenu}>
                        <HamburgerIcon icon='fa-solid fa-bars' />
                    </HamburgerButton>
                </Nav2>
            </HeaderSC>

            <HamburgerMenu />
        </>
    );
};

export default Header;
