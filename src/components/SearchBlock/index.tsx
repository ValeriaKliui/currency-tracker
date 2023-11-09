import { Component } from 'react';
import { Hints } from '@components/Hints';
import { Input } from '@components/Input';
import {
    type BankCardI,
    CurrenciesEnum,
    type SearchBlockProps,
    type SearchBlockState,
} from '@constants/interfaces/interfaces';

import { Container, SearchContainer } from './styled';

export class SearchBlock extends Component<
    BankCardI,
    SearchBlockState,
    SearchBlockProps
> {
    constructor(props: BankCardI) {
        super(props);
        this.state = {
            inputValueBankCard: '',
        };
    }

    componentDidMount() {
        if (this.props.currencies === null) this.fetchCurrencyInit();
    }

    fetchCurrencyInit = () => {
        this.props.fetchCurrencyThunk();
    };

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState((prevState) => ({
            ...prevState,
            inputValueBankCard: e.target.value,
        }));
    }

    render() {
        const { currencies } = this.props;
        const { inputValueBankCard } = this.state;
        const selectOptions =
            currencies === null
                ? []
                : Object.values(currencies.data).filter(({ code }) => {
                      return (
                          code
                              .toLowerCase()
                              .includes(inputValueBankCard.toLowerCase()) ||
                          CurrenciesEnum[code]
                              .toLowerCase()
                              .includes(inputValueBankCard.toLowerCase())
                      );
                  });

        return (
            <Container>
                <h2>Search currency in the bank</h2>
                <SearchContainer>
                    <Input
                        placeholder="Сurrency search..."
                        value={this.state.inputValueBankCard}
                        onChange={this.handleChange.bind(this)}
                    />
                    {inputValueBankCard.length > 0 && (
                        <Hints
                            options={selectOptions}
                            onOptionClick={() => {}}
                        />
                    )}
                </SearchContainer>
            </Container>
        );
    }
}
