import { Component } from 'react';
import { Input } from '@components/Input';
import { type SearchBlockProps } from '@constants/interfaces/interfaces';
import { setInputValueBankCard } from '@store/actions/bankCardActions';

import { Container, Wrapper } from './styled';

export class SearchBlock extends Component<SearchBlockProps> {
    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        setInputValueBankCard(e.target.value);
    }

    render() {
        const { inputValueBankCard } = this.props;
        return (
            <Wrapper>
                <Container>
                    <h2>Search currency in the bank</h2>
                    <Input
                        placeholder="Сurrency search..."
                        value={inputValueBankCard}
                        onChange={this.onChange}
                    />
                </Container>
            </Wrapper>
        );
    }
}
