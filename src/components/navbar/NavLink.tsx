import Link from "next/link";
import { FC } from 'react';

interface NavLinkProps {
    path: string;
    title: string;
}

const NavLink: FC<NavLinkProps> = ({ path, title}) => {
    return (
        <Link href={path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-sm rounded md:p-0 hover:text-white">
            {title}
        </Link>
    );
};

export default NavLink;