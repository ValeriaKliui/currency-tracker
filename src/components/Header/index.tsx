import type { FC } from 'react';
import { useAppSelector } from '@hooks/store';
import { getQuotesSelector } from '@store/selectors/currencySelectors';
import { convertTimeTo12 } from '@utils/convertTime';

import {
    Circle,
    Container,
    Gradient,
    Information,
    Logo,
    StyledTitle,
    Subtitle,
    TitleContainer,
    TitleUpdates,
    Wrapper,
} from './styled';

export const Header: FC = () => {
    const quotes = useAppSelector(getQuotesSelector);
    const updateTime =
        quotes !== null && convertTimeTo12(quotes?.meta.last_updated_at);

    return (
        <>
            <Gradient>
                <Wrapper>
                    <Container>
                        <Information>
                            <TitleContainer>
                                <StyledTitle>Modsen Currency</StyledTitle>
                                <StyledTitle $bigger={true}>
                                    Tracker
                                </StyledTitle>
                            </TitleContainer>
                            <Subtitle>
                                Quotes for the dollar and other {'\n'}
                                international currencies.
                            </Subtitle>
                        </Information>
                        <Logo viewBox="0 0 44 44" />
                    </Container>
                </Wrapper>
            </Gradient>
            <Wrapper>
                {quotes !== null && (
                    <TitleUpdates>
                        <Circle />
                        <p>Last updated at {updateTime}</p>
                    </TitleUpdates>
                )}
            </Wrapper>
        </>
    );
};
