import { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from '@components/Map';
import { SearchBlock } from '@components/SearchBlock';
import {
    type BankCardI,
    type SearchBlockDispatch,
    type SearchBlockProps,
} from '@constants/interfaces/interfaces';
// import { setInputValueBankCard } from '@store/actions/bankCardActions';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { type RootStoreType } from '@store/types/interfaces';
export class BankCard extends Component<BankCardI> {
    render() {
        return (
            <>
                <SearchBlock {...this.props} /> <Map />
            </>
        );
    }
}
const mapStateToProps = (state: RootStoreType): SearchBlockProps => {
    return {
        currencies: state.currencies.currencies,
    };
};

const mapDispatchToProps: SearchBlockDispatch = {
    fetchCurrencyThunk,
};
export default connect(mapStateToProps, mapDispatchToProps)(BankCard);
