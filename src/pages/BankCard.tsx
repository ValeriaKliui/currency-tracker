import { Component } from 'react';
import Card from '@components/Card';
import SearchBlock from '@components/SearchBlock';

export class BankCard extends Component {
    render() {
        return (
            <>
                <SearchBlock />
                <Card />
            </>
        );
    }
}
