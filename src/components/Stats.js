import styled from 'styled-components';

import BrandRecognitionImage from '../assets/images/icon-brand-recognition.svg';
import DetailedRecordsImage from '../assets/images/icon-detailed-records.svg';
import FullyCustomizableImage from '../assets/images/icon-fully-customizable.svg';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.gray};

    filter: brightness(125%);
    color: ${({ theme }) => theme.colors.veryDarkViolet};
    padding: 5em 5% 2em;
    text-align: center;
`;

const H2 = styled.h2`
    color: ${({ theme }) => theme.colors.darkViolet};
`;

const H3 = styled.h3`
    color: ${({ theme }) => theme.colors.darkViolet};
    margin: 0.5em 0;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 2.5em;

    @media (min-width: 700px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Li = styled.li`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.5em;
    padding: 1em;
    margin: 1.75em auto;
    text-align: center;
    position: relative;
    padding-top: 2.5em;

    @media (min-width: 700px) {
        &:nth-of-type(2) {
            margin-top: 3.75em;
        }
        
        &:nth-of-type(3) {
            margin-top: 5.75em;
        }
    }
`;

const Hr = styled.hr`
    background: ${({ theme }) => theme.colors.cyan};
    filter: brightness(80%);
    border: none;
    width: 100px;
    height: 5px;
    margin: 0 auto;
    /* converts a horizontal line to a vertical line */
    transform: rotate(90deg);
    position: relative;
    z-index: -1;

    @media (min-width: 700px) {
        transform: rotate(0) translateY(150px);
    }
`;

const Img = styled.img`
    background: ${({ theme }) => theme.colors.darkViolet};
    border-radius: 50%;
    padding: 0.75em;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -35px;
`;

const P = styled.p`
    color: ${({ theme }) => theme.colors.grayishViolet};
    filter: brightness(80%);
`;

const Stats = () => {
    return (
        <Section>
            <H2>Advanced Statistics</H2>
            <P>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </P>
            <Ul>
                <Li>
                    <figure>
                        <Img src={BrandRecognitionImage} alt='' />
                        <figcaption>
                            <H3>Brand Recognition</H3>
                            <P>
                                Boost your brand recognition with each click.
                                Generic links don't mean a thing. Branded links
                                help instil confidence in your content.
                            </P>
                        </figcaption>
                    </figure>
                </Li>
                <Hr />
                <Li>
                    <figure>
                        <Img src={DetailedRecordsImage} alt='' />
                        <figcaption>
                            <H3>Detailed Records</H3>
                            <P>
                                Gain insights into who is clicking your links.
                                Knowing when and where people engage with your
                                content helps inform better decisions.
                            </P>
                        </figcaption>
                    </figure>
                </Li>
                <Hr />
                <Li>
                    <figure>
                        <Img src={FullyCustomizableImage} alt='' />
                        <figcaption>
                            <H3>Fully Customizable</H3>
                            <P>
                                Improve brand awareness and content
                                discoverability through customizable links,
                                supercharging audience engagement.
                            </P>
                        </figcaption>
                    </figure>
                </Li>
            </Ul>
        </Section>
    );
};

export default Stats;
