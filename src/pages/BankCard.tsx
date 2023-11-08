import { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBlock } from '@components/SearchBlock';
import {
    type BankCardI,
    type SearchBlockDispatch,
    type SearchBlockProps,
} from '@constants/interfaces/interfaces';
import { setInputValueBankCard } from '@store/actions/bankCardActions';
import { type RootStoreType } from '@store/types/interfaces';

export class BankCard extends Component<BankCardI> {
    render() {
        return <SearchBlock {...this.props} />;
    }
}
const mapStateToProps = (state: RootStoreType): SearchBlockProps => {
    return {
        inputValueBankCard: state.bankCard.inputValueBankCard,
    };
};

const mapDispatchToProps: SearchBlockDispatch = {
    setInputValueBankCard,
};
export default connect(mapStateToProps, mapDispatchToProps)(BankCard);
