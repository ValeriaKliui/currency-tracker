import { Component } from 'react';
import SearchIcon from '@assets/img/icons/search.svg';
import { type InputProps } from '@constants/interfaces/interfaces';

import { IconContainer, InputContainer, InputStyled } from './styled';

export class Input extends Component<InputProps> {
    render() {
        const {
            placeholder,
            value,
            onChange,
            type = 'text',
            testID,
        } = this.props;
        return (
            <InputContainer>
                <InputStyled
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    data-cy={testID}
                />
                <IconContainer>
                    <SearchIcon />
                </IconContainer>
            </InputContainer>
        );
    }
}
