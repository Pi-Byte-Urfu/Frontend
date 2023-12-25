import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ModulePageNavigation:FC = () => {
  return (
    <ul>
      <li>
        <Link to='step/1'>
          step 1
        </Link>
      </li>
    </ul>
  );
};

export default ModulePageNavigation;