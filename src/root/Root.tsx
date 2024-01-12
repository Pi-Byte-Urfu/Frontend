import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import './Root.module.css'
import './RootDefault.css';

const Root:FC = () => {
  const location = useLocation();

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      {
        // location.pathname == '/' && (<Footer />)
      }
    </div>
  );
};

export default Root;