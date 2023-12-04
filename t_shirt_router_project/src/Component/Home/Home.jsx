import React from 'react';
import {useLoaderData} from 'react-router-dom'


const Home = () => {
    const tshirts = useLoaderData()
    console.log(tshirts);
    return (
        <div>
            <h1>this is Home page{tshirts.length}</h1>
        </div>
    );
};

export default Home;