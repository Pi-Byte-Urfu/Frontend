import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import './Root.module.css'
import './RootDefault.css';

const Root:FC = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;