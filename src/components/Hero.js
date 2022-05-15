import styled from 'styled-components';

import { Button } from './Button';

import IllustrationWorkingImage from '../assets/images/illustration-working.svg';

const Section = styled.section`
    margin: 1em 0;

    @media (min-width: 700px) {
        margin: 1.5em auto;
        width: 90%;
    }
`;

const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.darkViolet};
    font-size: 2.25rem;
    margin: 0.1em 0;
`;

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 700px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    margin-left: auto;
    overflow: hidden;

    width: 90%;

    @media (min-width: 700px) {
        margin: 0;
        width: 100%;

        flex: 200px 1 1;
        max-width: 600px;
    }
`;

const Img = styled.img`
    /* clips the hero image responsively for mobile devices */
    margin-left: calc(50px + 7.5vw);

    @media (min-width: 700px) {
        margin-left: 0;
    }
`;

const Figcaption = styled.figcaption`
    width: 90%;
    line-height: 1.5;
    margin: 1em auto;
    text-align: center;

    @media (min-width: 700px) {
        flex: 200px 1 1;
        margin: 0;
        max-width: 600px;
        text-align: left;
    }
`;

const P = styled.p`
    color: ${({ theme }) => theme.colors.grayishViolet};
`;

const ButtonSC = styled(Button)`
    margin: 1.25em auto;

    @media (min-width: 700px) {
        margin: 1.25em 0;
    }
`;

const Hero = () => {
    return (
        <Section>
            <Figure>
                <ImageContainer>
                    <Img src={IllustrationWorkingImage} alt='' />
                </ImageContainer>
                <Figcaption>
                    <H1>More than just shorter links</H1>
                    <P>
                        Build your brand's recognition and get detailed insights
                        on how your links are performing.
                    </P>
                    <ButtonSC>Get Started</ButtonSC>
                </Figcaption>
            </Figure>
        </Section>
    );
};

export default Hero;
