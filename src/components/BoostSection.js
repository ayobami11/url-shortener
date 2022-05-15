import styled from 'styled-components';

import BoostBackgroundMobile from '../assets/images/bg-boost-mobile.svg';
import BoostBackgroundDesktop from '../assets/images/bg-boost-desktop.svg';

import { Button } from './Button';

const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.darkViolet};
    background-image: ${`url(${BoostBackgroundMobile})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top;
    
    padding: 1.5em 5%;
    text-align: center;
    
    @media (min-width: 600px) {
        background-image: ${`url(${BoostBackgroundDesktop})`};
        background-size: cover;
    }
`;

const H2 = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.weights.bold};
`;

const BoostSection = () => {
    return (
        <Section>
            <H2>Boost your links today</H2>
            <Button>Get Started</Button>
        </Section>
    );
};

export default BoostSection;
