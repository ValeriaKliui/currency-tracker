import { colors } from '@constants/styles/theme';
import styled from 'styled-components';

export const PopUpContainer = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0.5rem 1rem;
    background-color: ${colors.neon};
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
`;
