import CircleSVG from '@assets/img/circle.svg';
import { pulse } from '@constants/styles/animations';
import { wrapper } from '@constants/styles/global';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
    ${wrapper};
`;
export const Gradient = styled.div`
    background: radial-gradient(${(props) =>
        props.theme.colors.gradientCircle}), ${(props) =>
        props.theme.colors.gradientBg});
`;
export const Container = styled.div`
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    align-items: start;
    gap: 1rem;
`;
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;
export const TitleContainer = styled.div`
    margin-right: 4rem;
`;
export const StyledTitle = styled.h2<{ $bigger?: boolean }>`
    font-size: ${(props) =>
        props.$bigger === true
            ? props.theme.fontSizes['3xl']
            : props.theme.fontSizes['2xl']};
    background: linear-gradient(
        90deg,
        #00ce2c 0.18%,
        #aedf23 49.3%,
        #a3dc00 99.88%
    );
    text-align: right;
    white-space: pre-wrap;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export const Subtitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.s};
    white-space: pre-line;
    text-align: center;
`;
export const TitleUpdates = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
`;
export const Circle = styled(CircleSVG)`
    animation: 0.5s ease-in-out infinite alternate running ${pulse};
`;
