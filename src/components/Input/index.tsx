import { Component } from 'react';
import { type InputProps } from '@constants/interfaces/interfaces';

export class Input extends Component<InputProps> {
    render() {
        const { placeholder, value, onChange, type = 'text' } = this.props;
        return (
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        );
    }
}
