import { useContext } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { AppContext } from '../contexts/app';

import { Button } from './Button';

const Nav = styled.nav`
    background: ${({ theme }) => theme.colors.darkViolet};
    overflow: hidden;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    transition: all 300ms ease-in-out;

    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 1em 1.5em;

    border-radius: 0.5em;

    ${({ $displayMenu }) =>
        !$displayMenu
            ? `
        max-height: 0;
        opacity: 0;
        `
            : `
        max-height: 400px;
        opacity: 1;
        `}

    @media (min-width: 700px) {
        display: none;
    }
`;

const Li = styled.li`
    margin: 1.5em 0;
`;

const Hr = styled.hr`
    border: none;
    height: 1.5px;
    background: hsla(0, 0%, 75%, 0.15);
`;

const LinkSC = styled(Link)`
    color: ${({ theme }) => theme.colors.gray};
    filter: brightness(130%);
    font-weight: ${({ theme }) => theme.font.weights.bold};

    :hover {
        color: ${({ theme }) => theme.colors.cyan};
    }
`;

const HamburgerMenu = () => {
    const {
        state: { displayMenu }
    } = useContext(AppContext);

    return (
        <Nav $displayMenu={displayMenu}>
            <ul>
                <Li>
                    <LinkSC to=''>Features</LinkSC>
                </Li>
                <Li>
                    <LinkSC to=''>Pricing</LinkSC>
                </Li>
                <Li>
                    <LinkSC to=''>Resources</LinkSC>
                </Li>
                <Hr />
                <Li>
                    <LinkSC to=''>Login</LinkSC>
                </Li>
                <Li>
                    <Button as={Link} to=''>
                        Sign Up
                    </Button>
                </Li>
            </ul>
        </Nav>
    );
};

export default HamburgerMenu;
