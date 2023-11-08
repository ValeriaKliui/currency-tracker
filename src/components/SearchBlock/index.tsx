import { Component } from 'react';
import { Input } from '@components/Input';
import {
    type SearchBlockProps,
    type SearchBlockState,
} from '@constants/interfaces/interfaces';

import { Container, Wrapper } from './styled';

export class SearchBlock extends Component<SearchBlockProps, SearchBlockState> {
    constructor(props: SearchBlockProps) {
        super(props);
        this.state = {
            inputValueBankCard: '',
        };
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState((prevState) => ({
            ...prevState,
            inputValueBankCard: e.target.value,
        }));
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <h2>Search currency in the bank</h2>
                    <Input
                        placeholder="Сurrency search..."
                        value={this.state.inputValueBankCard}
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
            </Wrapper>
        );
    }
}
