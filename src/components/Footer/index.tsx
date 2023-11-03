import { type FC } from 'react';
import LogoPic from '@assets/img/logo.svg';
import { FOOTER_INFO } from '@constants/constants/navigation';

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
                    {FOOTER_INFO.sections.map(
                        ({ sectionTitle, sectionLinks }) => (
                            <Section key={sectionTitle}>
                                <SectionTitle>{sectionTitle}</SectionTitle>
                                {sectionLinks.map(({ linkTitle, linkHref }) => (
                                    <SectionLink key={linkTitle} to={linkHref}>
                                        {linkTitle}
                                    </SectionLink>
                                ))}
                            </Section>
                        ),
                    )}
                </Container>
                <Copyright>
                    Startsup © 2023-2024, All Rights Reserved
                </Copyright>
            </Blocks>
        </Wrapper>
    );
};
