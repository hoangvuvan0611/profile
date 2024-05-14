import React from 'react';
import NavLink from './NavLink';

interface LinkType {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkType[];
}


const MenuOverlay: React.FC<MenuOverlayProps> = ({links}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
        {
            links.map((link, index: number) => 
                <li key={index}>
                    <NavLink path={link.path} title={link.title}></NavLink>
                </li>
            )
        }
    </ul>
  )
}

export default MenuOverlay;
