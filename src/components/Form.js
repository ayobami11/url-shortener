import { useState, useEffect, useRef, useContext } from 'react';

import { AppContext } from '../contexts/app';

import { Button } from './Button';

import ShortenBackgroundMobile from '../assets/images/bg-shorten-mobile.svg';
import ShortenBackgroundDesktop from '../assets/images/bg-shorten-desktop.svg';

import styled from 'styled-components';

const FormSC = styled.form`
    background-color: ${({ theme }) => theme.colors.darkViolet};
    background-image: ${`url(${ShortenBackgroundMobile})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top;

    border-radius: 1em;
    width: 90%;
    padding: 1.5em;
    margin: 2em auto;
    margin-bottom: -5em;
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 600px) {
        background-image: ${`url(${ShortenBackgroundDesktop})`};
        background-size: cover;

        margin-bottom: -3.25em;

        flex-direction: row;
        align-items: flex-start;
    }
`;

const InputContainer = styled.div`
    width: 100%;
`;

const Input = styled.input`
    border: none;
    outline: none;
    border-radius: 0.5em;
    padding: 0.75em 0.5em;
    width: 100%;

    ${({ theme, $isInputInvalid, $showMessage }) =>
        $isInputInvalid &&
        $showMessage &&
        `
        border: 2px solid ${theme.colors.red};
    `}

    /* Chrome / Opera / Safari */
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.grayishViolet};

        ${({ theme, $isInputInvalid, $showMessage }) =>
            $isInputInvalid &&
            $showMessage &&
            `
                color: ${theme.colors.red};
                filter: brightness(150%);
        `};
    }

    /* Firefox 19+ */
    ::-moz-placeholder {
        color: ${({ theme }) => theme.colors.grayishViolet};

        ${({ theme, $isInputInvalid, $showMessage }) =>
            $isInputInvalid &&
            $showMessage &&
            `
        color: ${theme.colors.red};
        filter: brightness(150%);
`};
    }

    /* Firefox 18- */
    :-moz-placeholder {
        color: ${({ theme }) => theme.colors.grayishViolet};

        ${({ theme, $isInputInvalid, $showMessage }) =>
            $isInputInvalid &&
            $showMessage &&
            `
        color: ${theme.colors.red};
        filter: brightness(150%);
`};
    }

    /* IE 10+ */
    :-ms-input-placeholder {
        color: ${({ theme }) => theme.colors.grayishViolet};

        ${({ theme, $isInputInvalid, $showMessage }) =>
            $isInputInvalid &&
            $showMessage &&
            `
        color: ${theme.colors.red};
        filter: brightness(150%);
`};
    }
`;

const ButtonSC = styled(Button)`
    width: 100%;
    border-radius: 0.5em;
    margin: 0;

    @media (min-width: 600px) {
        width: auto;
        white-space: nowrap;
    }
`;

const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-style: italic;
    font-size: 14px;
    margin: 0.25em 0;

    display: ${({ $isInputInvalid }) => ($isInputInvalid ? 'block' : 'none')};
`;

const Form = () => {
    const { dispatch } = useContext(AppContext);

    const inputRef = useRef();

    const [link, setLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = event => setLink(event.target.value);

    const handleButtonClick = () => setShowMessage(true);

    const handleSubmit = event => {
        event.preventDefault();

        if (!link || errorMessage) return false;

        const shortenLink = async () => {
            try {
                const response = await fetch(
                    `https://api.shrtco.de/v2/shorten?url=${link}`,
                    {
                        method: 'POST'
                    }
                );

                if (response.ok) {
                    const jsonResponse = await response.json();

                    dispatch({
                        type: 'SET_LINKS',
                        payload: {
                            link: {
                                originalLink:
                                    jsonResponse.result['original_link'],
                                shortLink: jsonResponse.result['short_link']
                            }
                        }
                    });

                    setLink('');
                }
            } catch (error) {
                console.log(error);
            }
        };

        shortenLink();
    };

    useEffect(() => {
        setErrorMessage(
            !link || !inputRef.current.checkValidity()
                ? 'Please add a link (should start with http:// or https://)'
                : ''
        );
    }, [link]);

    return (
        <FormSC onSubmit={handleSubmit}>
            <InputContainer>
                <Input
                    $isInputInvalid={errorMessage}
                    $showMessage={showMessage}
                    ref={inputRef}
                    type='url'
                    name='link'
                    id='link'
                    value={link}
                    placeholder='Shorten a link here...'
                    onChange={handleInputChange}
                />
                {showMessage && (
                    <ErrorMessage $isInputInvalid={errorMessage}>
                        {errorMessage}
                    </ErrorMessage>
                )}
            </InputContainer>
            <ButtonSC type='submit' onClick={handleButtonClick}>
                Shorten It!
            </ButtonSC>
        </FormSC>
    );
};

export default Form;
