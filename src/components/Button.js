import styled from 'styled-components';

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.cyan};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    border: none;
    font-weight: ${({ theme }) => theme.font.weights.bold};
    border-radius: 1.5em;
    padding: 0.75em 2em;
    display: block;

    letter-spacing: .025em;
    margin: 1em auto;

    :hover {
        filter: brightness(115%);
    }

    @media (min-width: 600px) {
        white-space: nowrap;
    }
`;
