import { styled } from 'styled-components';

export const NavList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    gap: 5rem;
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
`;
export const NavItem = styled.li``;
