import { type FC } from 'react';
import ErrorIcon from '@assets/img/error.svg';
import { type ErrorProps } from '@constants/interfaces/interfaces';

import { ErrorStyled, ErrorTitle } from './styled';

export const Error: FC<ErrorProps> = ({ text = 'Something went wrong' }) => {
    return (
        <ErrorStyled>
            <ErrorIcon />
            <ErrorTitle>{text}</ErrorTitle>
        </ErrorStyled>
    );
};
