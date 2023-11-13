import { type FC } from 'react';

import { Container, SpinnerStyled, Wrapper } from './styled';

export const Spinner: FC = () => {
    return (
        <Wrapper>
            <Container>
                <SpinnerStyled />
            </Container>
        </Wrapper>
    );
};
