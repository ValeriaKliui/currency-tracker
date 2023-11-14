import { Component } from 'react';
import { connect } from 'react-redux';
import { CurrencyItem } from '@components/CurrencyItem';
import { Hints } from '@components/Hints';
import { Input } from '@components/Input';
import {
    type BankCardI,
    type Currencies,
    CurrenciesEnum,
    type CurrencyCodeType,
    type SearchBlockDispatch,
    type SearchBlockProps,
    type SearchBlockState,
} from '@constants/interfaces/interfaces';
import { setIsHintsOpened } from '@store/actions/appActions';
import {
    setBanksData,
    setCurrencies,
    setTargetCurrency,
} from '@store/actions/currencyActions';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { type RootStoreType } from '@store/types/interfaces';
import { getCache } from '@utils/cacheData';

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
        this.chooseCurrency = this.chooseCurrency.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setCurrencyInit();
    }

    componentWillUnmount(): void {
        const { setTargetCurrency } = this.props;
        setTargetCurrency(null);
    }

    setCurrencyInit = () => {
        const { fetchCurrencyThunk, setCurrencies } = this.props;
        const cachedCurrencyData = getCache<Currencies>('currencyData');
        if (cachedCurrencyData !== null) setCurrencies(cachedCurrencyData);
        else fetchCurrencyThunk();
    };

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState((prevState) => ({
            ...prevState,
            inputValueBankCard: e.target.value,
        }));
        this.props.setIsHintsOpened(true);
    }

    chooseCurrency(currencyCode: CurrencyCodeType) {
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
                        onChange={this.handleChange}
                    />
                    <Hints
                        options={selectOptions}
                        onOptionClick={this.chooseCurrency}
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
    setCurrencies,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
