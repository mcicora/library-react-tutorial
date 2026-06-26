import React from 'react';
import Landing from '../assets/components/Landing';
import Highlights from '../assets/components/Highlights';
import Featured from '../assets/components/Featured';
import Discounted from '../assets/components/Discounted';
import Explore from '../assets/components/Explore';

const Home = () => {
    console.log("Home Rendered")
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
        
    );
};

export default Home;