import { type FC, useReducer } from 'react';
import { NavLinks } from '@components/NavLinks';
import { ThemeToggler } from '@components/ThemeToggler';

import {
    BurgerContainer,
    BurgerLine,
    MenuContainer,
    MenuStyled,
    Theme,
} from './styled';

export const BurgerMenu: FC = () => {
    const [isMenuOpened, toggleMenu] = useReducer(
        (isMenuOpened: boolean) => !isMenuOpened,
        false,
    );

    return (
        <>
            <BurgerContainer onClick={toggleMenu}>
                <BurgerLine $isMenuOpened={isMenuOpened} />
                <BurgerLine $isMenuOpened={isMenuOpened} />
                <BurgerLine $isMenuOpened={isMenuOpened} />
            </BurgerContainer>

            {isMenuOpened && (
                <MenuStyled $isOpened={isMenuOpened}>
                    <MenuContainer>
                        <Theme>
                            <ThemeToggler testID="theme-toggler" />
                        </Theme>
                        <NavLinks onClick={toggleMenu} />
                    </MenuContainer>
                </MenuStyled>
            )}
        </>
    );
};
