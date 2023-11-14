import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '@constants/constants/navigation';
import { type NavLinksProps } from '@constants/interfaces/interfaces';

import { NavItem, NavList } from './styled';

export const NavLinks: FC<NavLinksProps> = ({ onClick }) => {
    return (
        <NavList>
            {NAVIGATION_ITEMS.map(({ path, navTitle }) => (
                <NavItem key={navTitle} onClick={onClick}>
                    <NavLink to={path}>{navTitle}</NavLink>
                </NavItem>
            ))}
        </NavList>
    );
};
