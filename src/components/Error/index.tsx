import { type FC } from 'react';
import { type IErrorProps } from '@constants/interfaces/interfaces';

import { ErrorStyled, ErrorTitle } from './styled';

export const Error: FC<IErrorProps> = ({ text = 'Something went wrong' }) => {
    return (
        <ErrorStyled>
            <ErrorTitle>{text}</ErrorTitle>
        </ErrorStyled>
    );
};
