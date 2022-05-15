import React from 'react';

import Hero from './Hero';
import Form from './Form';
import LinkList from './LinkList';
import Stats from './Stats';
import BoostSection from './BoostSection';

const Main = () => {
    return (
        <>
            <main>
                <Hero />
                <Form />
                <LinkList />
                <Stats />
                <BoostSection />
            </main>
        </>
    );
};

export default Main;
