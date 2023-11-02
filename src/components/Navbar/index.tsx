import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@assets/img/logo.svg';
import { ThemeToggler } from '@components/ThemeToggler';
import { NAVIGATION_ITEMS } from '@constants/constants/navigation';

import { LogoContainer, NavItem, NavList, Wrapper } from './styled';

export const Navbar: FC = () => {
    return (
        <Wrapper>
            <LogoContainer>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <Logo />
                </NavLink>
            </LogoContainer>
            <NavList>
                {NAVIGATION_ITEMS.map(({ path, navTitle }) => (
                    <NavItem key={navTitle}>
                        <NavLink to={path}>{navTitle}</NavLink>
                    </NavItem>
                ))}
            </NavList>
            <ThemeToggler />
        </Wrapper>
    );
};
