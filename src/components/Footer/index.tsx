import { type FC } from 'react';
import LogoPic from '@assets/img/logo.svg';

import {
    Blocks,
    Container,
    Copyright,
    Logo,
    LogoTitle,
    Section,
    SectionLink,
    SectionTitle,
    Wrapper,
} from './styled';

export const Footer: FC = () => {
    return (
        <Wrapper>
            <Blocks>
                <Container>
                    <div>
                        <Logo>
                            <LogoPic />
                            <LogoTitle>Modsen Currency Tracker</LogoTitle>
                        </Logo>
                        <p>
                            Since then, the company has grown organically to.
                            Starsup is the world&apos;s largest trading
                            platform, with $12 billion worth of currency trading
                            and 500,000 tickets sold daily to tens of thousands
                            of traders worldwide.
                        </p>
                    </div>
                    <Section>
                        <SectionTitle>General</SectionTitle>
                        <SectionLink to="">Market</SectionLink>
                        <SectionLink to="">Service</SectionLink>
                    </Section>
                    <Section>
                        <SectionTitle>Product</SectionTitle>
                        <SectionLink to="">Sparks</SectionLink>
                        <SectionLink to="">Snaps</SectionLink>
                    </Section>
                    <Section>
                        <SectionTitle>Community</SectionTitle>
                        <SectionLink to="">Ideas</SectionLink>
                        <SectionLink to="">Streams</SectionLink>
                    </Section>
                </Container>
                <Copyright>
                    Startsup © 2023-2024, All Rights Reserved
                </Copyright>
            </Blocks>
        </Wrapper>
    );
};
