import { useEffect, useContext } from 'react';

import { AppContext } from '../contexts/app';

// components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Home = () => {
    const {
        state: { links },
        dispatch
    } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'GET_LINKS' });
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(links)]);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Home;
