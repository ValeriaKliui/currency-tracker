import type { FC } from 'react';
import Logo from '@assets/img/logo.svg';
import { useAppSelector } from '@hooks/store';
import {
    getQuotesError,
    getQuotesSelector,
} from '@store/selectors/currencySelectors';
import { convertTimeTo12 } from '@utils/convertTime';

import {
    Circle,
    Container,
    Gradient,
    Information,
    StyledTitle,
    Subtitle,
    TitleContainer,
    TitleUpdates,
    Wrapper,
} from './styled';

export const Header: FC = () => {
    const quotes = useAppSelector(getQuotesSelector);
    const error = useAppSelector(getQuotesError);
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
                        <Logo width={300} height={300} viewBox="0 0 44 44" />
                    </Container>
                </Wrapper>
            </Gradient>
            <Wrapper>
                {error === null && (
                    <TitleUpdates>
                        <Circle />
                        <p>Last updated at {updateTime}</p>
                    </TitleUpdates>
                )}
            </Wrapper>
        </>
    );
};
