import { type FC, useState, useCallback } from 'react';
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
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpened(!isMenuOpened);
    }, [isMenuOpened]);

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
                            <ThemeToggler />
                        </Theme>
                        <NavLinks onClick={toggleMenu} />
                    </MenuContainer>
                </MenuStyled>
            )}
        </>
    );
};
