import { type FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Arrow from '@assets/img/arrow.svg';
import LogoPic from '@assets/img/logo.svg';
import { FOOTER_INFO } from '@constants/constants/navigation';

import {
    ArrowMobileContainer,
    Container,
    Copyright,
    FooterText,
    Logo,
    LogoTitle,
    Section,
    SectionLink,
    SectionTitle,
    Wrapper,
} from './styled';

export const Footer: FC = () => {
    const [sectionClicked, setSectionClicked] = useState('');
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpening = (sectionTitle: string) => () => {
        setSectionClicked(sectionTitle);
        if (sectionTitle === sectionClicked)
            setIsOpened((prevState) => !prevState);
        else setIsOpened(true);
    };

    return (
        <Wrapper>
            <Container>
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <Logo>
                            <LogoPic width={50} />
                            <LogoTitle>Modsen Currency Tracker</LogoTitle>
                        </Logo>
                    </NavLink>
                    <FooterText>
                        Since then, the company has grown organically to.
                        Starsup is the world&apos;s largest trading platform,
                        with $12 billion worth of currency trading and 500,000
                        tickets sold daily to tens of thousands of traders
                        worldwide.
                    </FooterText>
                </div>
                {FOOTER_INFO.sections.map(({ sectionTitle, sectionLinks }) => (
                    <Section key={sectionTitle}>
                        <SectionTitle onClick={toggleOpening(sectionTitle)}>
                            {sectionTitle}
                        </SectionTitle>
                        {sectionLinks.map(({ linkTitle, linkHref }) => (
                            <SectionLink
                                key={linkTitle}
                                to={linkHref}
                                $isOpened={
                                    isOpened && sectionTitle === sectionClicked
                                }
                            >
                                {linkTitle}
                            </SectionLink>
                        ))}
                        <ArrowMobileContainer
                            onClick={toggleOpening(sectionTitle)}
                            $isOpened={
                                isOpened && sectionTitle === sectionClicked
                            }
                        >
                            <Arrow />
                        </ArrowMobileContainer>
                    </Section>
                ))}
            </Container>
            <Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
        </Wrapper>
    );
};
