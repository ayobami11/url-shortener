import { useContext, Children } from 'react';

import styled from 'styled-components';

import { AppContext } from '../contexts/app';

import Link from './Link';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.gray};
    filter: brightness(125%);
    padding-top: 6em;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.25em;
`;

const LinkList = () => {
    const {
        state: { links }
    } = useContext(AppContext);

    return (
        <Section>
            {links.length ? (
                <Ul>
                    {Children.toArray(links.map(link => <Link {...link} />))}
                </Ul>
            ) : (
                ''
            )}
        </Section>
    );
};

export default LinkList;
