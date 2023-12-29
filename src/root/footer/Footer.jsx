import React from 'react';
import style from './Footer.module.scss';
import SiteNav from '../../layers/components/site_nav/SiteNav';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.border}></div>
      <div className={['_container', style.container].join(' ')}>
        <SiteNav styles={[style.nav]}/>        
      </div>
    </footer>
  );
};

export default Footer;