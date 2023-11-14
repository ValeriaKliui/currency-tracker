import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@assets/img/logo.svg';
import { BurgerMenu } from '@components/BurgerMenu';
import { NavLinks } from '@components/NavLinks';
import { ThemeToggler } from '@components/ThemeToggler';

import { Container, LogoContainer, MobileContainer } from './styled';

export const Navbar: FC = () => {
    return (
        <Container>
            <LogoContainer>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <Logo />
                </NavLink>
            </LogoContainer>
            <MobileContainer>
                <NavLinks />
            </MobileContainer>
            <MobileContainer>
                <ThemeToggler />
            </MobileContainer>

            <BurgerMenu />
        </Container>
    );
};
