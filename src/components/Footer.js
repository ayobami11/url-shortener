import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../assets/images/logo-footer.svg';

const FooterSC = styled.footer`
    background: ${({ theme }) => theme.colors.veryDarkViolet};
    padding: 1.5em 5%;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    text-align: center;
    margin-bottom: 1em;

    nav,
    address {
        flex: 2;
    }

    @media (min-width: 800px) {
        text-align: left;

        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

const LogoContainer = styled.div`
    flex: 3;
`;

const Nav = styled.nav`
    margin: 0.5em 0;

    @media (min-width: 800px) {
        margin: 0;
    }
`;

const H3 = styled.h3`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1em;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const LinkSC = styled(Link)`
    color: ${({ theme }) => theme.colors.gray};

    :hover {
        color: ${({ theme }) => theme.colors.cyan};
    }
`;

const Address = styled.address`
    text-align: right;
`;

const FontAwesomeIconSC = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    margin: 0.75em;
    margin-top: 0;

    :hover {
        color: ${({ theme }) => theme.colors.cyan};
    }

    @media (min-width: 800px) {
        font-size: 1.25rem;
    }
`;

const Author = styled.p`
    font-size: 13px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    
    a {
        color: ${({ theme }) => theme.colors.cyan};
        font-size: 13px;

        :hover {
            text-decoration: underline;
        }
    }
`;

const Footer = () => {
    return (
        <FooterSC>
            <FooterContainer>
                <LogoContainer>
                    <img src={Logo} alt='Shortly logo' />
                </LogoContainer>
                <Nav>
                    <H3>Features</H3>
                    <Ul>
                        <li>
                            <LinkSC to=''>Link Shortening</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Branded Links</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Analytics</LinkSC>
                        </li>
                    </Ul>
                </Nav>
                <Nav>
                    <H3>Resources</H3>
                    <Ul>
                        <li>
                            <LinkSC to=''>Blog</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Developers</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Support</LinkSC>
                        </li>
                    </Ul>
                </Nav>
                <Nav>
                    <H3>Company</H3>
                    <Ul>
                        <li>
                            <LinkSC to=''>About</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Our Team</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Careers</LinkSC>
                        </li>
                        <li>
                            <LinkSC to=''>Contact</LinkSC>
                        </li>
                    </Ul>
                </Nav>
                <Address>
                    <Link to='' title='Facebook'>
                        <FontAwesomeIconSC icon='fa-brands fa-facebook-square' />
                    </Link>
                    <Link to='' title='Twitter'>
                        <FontAwesomeIconSC icon='fa-brands fa-twitter' />
                    </Link>
                    <Link to='' title='Pinterest'>
                        <FontAwesomeIconSC icon='fa-brands fa-pinterest' />
                    </Link>
                    <Link to='Instagram'>
                        <FontAwesomeIconSC icon='fa-brands fa-instagram' />
                    </Link>
                </Address>
            </FooterContainer>
            <Author>
                Challenge by{' '}
                <a
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noreferrer'
                >
                    Frontend Mentor
                </a>
                . Coded by{' '}
                <a
                    href='https://www.github.com/ayobami11'
                    target='_blank'
                    rel='noreferrer'
                >
                    Ayobami Tunwase
                </a>
                .
            </Author>
        </FooterSC>
    );
};

export default Footer;
