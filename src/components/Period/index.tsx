import { Component } from 'react';
import { type PeriodProps } from '@constants/interfaces/interfaces';

import { PeriodLabel, PeriodType } from './styled';

export class Period extends Component<PeriodProps> {
    render() {
        const { checked, value, name, onChange } = this.props;
        return (
            <PeriodLabel $isChoosen={checked}>
                {value}
                <PeriodType
                    type="radio"
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
            </PeriodLabel>
        );
    }
}
