import { type FC } from 'react';
import { type ErrorProps } from '@constants/interfaces/interfaces';

import { ErrorStyled, ErrorTitle } from './styled';

export const Error: FC<ErrorProps> = ({ text = 'Something went wrong' }) => {
    return (
        <ErrorStyled>
            <ErrorTitle>{text}</ErrorTitle>
        </ErrorStyled>
    );
};
