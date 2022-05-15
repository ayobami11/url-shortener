import { useState } from 'react';

import styled from 'styled-components';

import { Button } from './Button';

const Li = styled.li`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.5em;

    display: flex;
    flex-direction: column;

    margin: 0 auto;
    width: 90%;

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const Output = styled.output`
    color: ${({ theme }) => theme.colors.cyan};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    flex: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const P = styled.p`
    font-weight: ${({ theme }) => theme.font.weights.bold};
    padding: 0.75em;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Div = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.grayishViolet};
    padding: 0.75em;

    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 600px) {
        border-top: none;

        flex-direction: row;
        align-items: center;
    }
`;

const ButtonSC = styled(Button)`
    border-radius: 0.5em;
    width: 100%;
    margin: 0.5em 0;

    flex: 0 0;

    ${({ theme, $alert }) =>
        $alert &&
        `
        background: ${theme.colors.darkViolet};
    `}

    :hover {
        ${({ $alert }) =>
            !$alert &&
            `
        filter: brightness(250%);
    `}
    }
`;

const Link = ({ originalLink, shortLink }) => {
    const [alert, setAlert] = useState(false);

    const copyToClipboard = text => async () => {
        await navigator.clipboard.writeText(text);

        setAlert(true);

        setTimeout(() => setAlert(false), 3000);
    };

    return (
        <Li>
            <P>{originalLink}</P>
            <Div>
                <Output>{shortLink}</Output>
                <ButtonSC $alert={alert} onClick={copyToClipboard(shortLink)}>
                    {alert ? 'Copied!' : 'Copy'}
                </ButtonSC>
            </Div>
        </Li>
    );
};

export default Link;
