import React, { FC } from 'react';
import style from './ModuleEditorNavigation.module.scss';
import { Form, useLoaderData } from 'react-router-dom';
import Button from '../../../../ui/button/Button';

// interface IModuleEditorNavigationProps {
//   navLinks: IModuleNavLink[];
// }

const ModuleEditorNavigation:FC = () => {

  return (
    <nav className={style.nav}>
      {/* <ModuleNavList navLinks={navLinks}/>
      <Form method='POST' action='createStep' className={style.createLinkForm}>
        <input 
          name="stepName" 
          type='text' defaultValue={''} 
          placeholder='Новый шаг'
          className={[style.moduleNameInput].join(' ')}  
        />
        <Button 
          styles={[style.createNavLinkBtn]} 
          type='submit'
        >
          <span className={style.plus}>+</span>
        </Button>
      </Form> */}
    </nav>
  );
};

export default ModuleEditorNavigation;