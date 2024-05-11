import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({links}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
        {
            links.map((link, index) => 
                <li key={index}>
                    <NavLink path={link.path} title={link.title}></NavLink>
                </li>
            )
        }
    </ul>
  )
}

export default MenuOverlay;
