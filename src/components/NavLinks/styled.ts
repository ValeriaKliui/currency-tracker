import { styled } from 'styled-components';

export const NavList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    gap: 3rem;
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;
export const NavItem = styled.li``;
