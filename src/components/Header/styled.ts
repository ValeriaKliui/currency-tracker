import CircleSVG from '@assets/img/circle.svg';
import LogoSvg from '@assets/img/logo.svg';
import { pulse } from '@constants/styles/animations';
import { wrapper } from '@constants/styles/global';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
    ${wrapper};
`;
export const Gradient = styled.div`
    background: radial-gradient(${({ theme }) =>
        theme.colors.gradientCircle}), ${({ theme }) =>
        theme.colors.gradientBg});
`;
export const Container = styled.div`
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    align-items: start;
    gap: 1rem;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        justify-items: end;
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        display: block;
        padding: 0;
    }
`;
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;
export const TitleContainer = styled.div`
    margin-right: 4rem;
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        margin-right: 0.5rem;
    }
`;
export const StyledTitle = styled.h2<{ $bigger?: boolean }>`
    font-size: ${({ theme, $bigger }) =>
        $bigger === true ? theme.fontSizes['3xl'] : theme.fontSizes['2xl']};
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
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        text-align: left;
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        text-align: center;
    }
`;
export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.s};
    white-space: pre-line;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        white-space: unset;
        text-align: left;
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        text-align: center;
    }
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
export const Logo = styled(LogoSvg)`
    width: 300px;
    height: 300px;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        width: 180px;
        height: 180px;
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        display: none;
    }
`;
