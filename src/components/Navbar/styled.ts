import { scaleAnimation } from '@constants/styles/animations';
import { wrapper } from '@constants/styles/global';
import { styled } from 'styled-components';

export const Container = styled.nav`
    ${wrapper}
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const LogoContainer = styled.div`
    ${scaleAnimation}
`;
export const MobileContainer = styled.div`
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        display: none;
    }
`;
