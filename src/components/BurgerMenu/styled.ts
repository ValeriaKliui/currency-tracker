import { transitionAnimation } from '@constants/styles/animations';
import { styled } from 'styled-components';

export const BurgerContainer = styled.div`
    display: none;
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        display: flex;
        justify-content: center;
        width: 30px;
        height: 30px;
        position: relative;
        align-items: flex-end;
        justify-content: space-between;
        cursor: pointer;
        z-index: 150;
        justify-self: flex-end;
    }
`;
export const BurgerLine = styled.span<{ $isMenuOpened: boolean }>`
    ${transitionAnimation}
    background-color: ${({ theme }) => theme.colors.font};
    width: 30px;
    height: 3px;
    position: absolute;
    border-radius: 4px;
    &:first-child {
        top: ${({ $isMenuOpened }) => ($isMenuOpened ? '50%' : '20%')};
        transform: ${({ $isMenuOpened }) =>
            $isMenuOpened ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    &:nth-child(2) {
        top: 50%;
        opacity: ${({ $isMenuOpened }) => ($isMenuOpened ? '0' : '1')};
    }

    &:nth-child(3) {
        top: ${({ $isMenuOpened }) => ($isMenuOpened ? '50%' : '80%')};
        transform: ${({ $isMenuOpened }) =>
            $isMenuOpened ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
`;
export const MenuStyled = styled.div<{ $isOpened: boolean }>`
    ${transitionAnimation}
    transform: translateX(100%);
    transform: ${({ $isOpened }) => $isOpened && 'translateX(0%)'};
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        padding: 24px;
        justify-content: center;
        background: ${({ theme }) => theme.colors.background};
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 105vh;
        background: ${({ theme }) => theme.colors.background};
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
`;
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 5rem;
`;
export const Theme = styled.div`
    display: none;
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        display: flex;
    }
`;
