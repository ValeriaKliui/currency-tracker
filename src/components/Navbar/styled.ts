import { scaleAnimation } from '@constants/styles/animations';
import { wrapper } from '@constants/styles/global';
import { styled } from 'styled-components';

export const Wrapper = styled.nav`
    ${wrapper}
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const NavList = styled.ul`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    font-size: ${({ theme }) => theme.fontSizes.xs};
`;
export const NavItem = styled.li``;
export const LogoContainer = styled.div`
    ${scaleAnimation}
`;
