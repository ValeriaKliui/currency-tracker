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
`;
export const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Logo = styled.div`
    display: flex;
    gap: 1rem;
    font-size: ${(props) => props.theme.fontSizes.s};
    margin-bottom: 2rem;
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
`;
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const SectionTitle = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.m};
    margin-bottom: 1rem;
`;
export const SectionLink = styled(Link)`
    color: ${(props) => props.theme.colors.subText};
`;
export const Copyright = styled.p`
    color: ${(props) => props.theme.colors.subText};
`;
