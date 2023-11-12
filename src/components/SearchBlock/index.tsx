import { Component } from 'react';
import { connect } from 'react-redux';
import { CurrencyItem } from '@components/CurrencyItem';
import { Hints } from '@components/Hints';
import { Input } from '@components/Input';
import {
    type BankCardI,
    CurrenciesEnum,
    type SearchBlockDispatch,
    type SearchBlockProps,
    type SearchBlockState,
} from '@constants/interfaces/interfaces';
import { setIsHintsOpened } from '@store/actions/appActions';
import {
    setBanksData,
    setTargetCurrency,
} from '@store/actions/currencyActions';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { type RootStoreType } from '@store/types/interfaces';

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

    componentWillUnmount(): void {
        const { setTargetCurrency } = this.props;
        setTargetCurrency(null);
    }

    fetchCurrencyInit = () => {
        this.props.fetchCurrencyThunk();
    };

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState((prevState) => ({
            ...prevState,
            inputValueBankCard: e.target.value,
        }));
        this.props.setIsHintsOpened(true);
    }

    chooseCurrency(currencyCode: keyof typeof CurrenciesEnum) {
        const { setTargetCurrency } = this.props;
        setTargetCurrency(currencyCode);
    }

    render() {
        const { currencies, targetCurrencyCode } = this.props;
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
                    <Hints
                        options={selectOptions}
                        onOptionClick={this.chooseCurrency.bind(this)}
                    />
                </SearchContainer>
                {targetCurrencyCode !== null && (
                    <CurrencyItem currencyCode={targetCurrencyCode} />
                )}
            </Container>
        );
    }
}
const mapStateToProps = (state: RootStoreType): SearchBlockProps => {
    return {
        currencies: state.currencies.currencies,
        targetCurrencyCode: state.currencies.targetCurrencyCode,
        banksData: state.currencies.banksData,
    };
};

const mapDispatchToProps: SearchBlockDispatch = {
    fetchCurrencyThunk,
    setTargetCurrency,
    setIsHintsOpened,
    setBanksData,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
