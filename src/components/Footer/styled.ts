import { Link } from 'react-router-dom';
import { wrapper } from '@constants/styles/global';
import styled from 'styled-components';

export const Wrapper = styled.footer`
    ${wrapper}
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    justify-items: end;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        justify-items: unset;
        gap: 1rem;
    }
`;
export const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;
export const Logo = styled.div`
    display: flex;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin-bottom: 2rem;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        flex-direction: unset;
        margin-bottom: unset;
    }
`;
export const LogoTitle = styled.h3`
    background: linear-gradient(
        90deg,
        #00ce2c 0.18%,
        #aedf23 49.3%,
        #a3dc00 99.88%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        align-items: flex-end;
    }
    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        align-items: unset;
        gap: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
`;
export const SectionTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-bottom: 1rem;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.s};
    }
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;
export const SectionLink = styled(Link)`
    color: ${({ theme }) => theme.colors.subText};
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        display: none;
    }
`;
export const Copyright = styled.p`
    color: ${({ theme }) => theme.colors.subText};
`;
export const FooterText = styled.p`
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        display: none;
    }
`;
