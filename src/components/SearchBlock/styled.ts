import { wrapper } from '@constants/styles/global';
import { styled } from 'styled-components';

export const Container = styled.div`
    ${wrapper}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;
export const SearchContainer = styled.div`
    position: relative;
`;
