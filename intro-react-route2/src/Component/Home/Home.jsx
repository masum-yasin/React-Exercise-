import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
      <div>
          <h5>This is Head Section</h5>
          <Header></Header>
      <Outlet></Outlet>
      </div>
    );
};

export default Home;