import { Component } from 'react';
import { Map } from 'react-map-gl';
import { connect } from 'react-redux';
import { CardMarker } from '@components/CardMarker';
import {
    type CardDispatch,
    type CardI,
    type CardProps,
    type CardState,
} from '@constants/interfaces/interfaces';
import { fetchBanksThunk } from '@store/services/currencyThunk';
import { type RootStoreType } from '@store/types/interfaces';
import { getRelevantBanks } from '@utils/getRelevantBanks';

export class Card extends Component<CardI, CardState> {
    constructor(props: CardI) {
        super(props);
        this.state = {
            viewport: {
                latitude: 0,
                longitude: 0,
                zoom: 9.5,
            },
            selectedBankID: null,
        };
    }

    componentDidMount(): void {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState((prevState) => ({
                ...prevState,
                viewport: {
                    ...prevState.viewport,
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                },
            }));
        });
    }

    componentDidUpdate(
        prevProps: Readonly<CardI>,
        prevState: Readonly<CardState>,
    ): void {
        const { banksData, fetchBanksThunk } = this.props;

        if (prevState.viewport !== this.state.viewport) {
            banksData === null && fetchBanksThunk();
        }
    }

    openPopUp(selectedBankID: string) {
        return () => {
            this.setState({ selectedBankID });
        };
    }

    closePopUp() {
        return () => {
            this.setState({ selectedBankID: null });
        };
    }

    render() {
        const { viewport, selectedBankID } = this.state;
        const { banksData, targetCurrencyCode } = this.props;

        return (
            <>
                {viewport.latitude !== 0 && viewport.longitude !== 0 && (
                    <Map
                        mapboxAccessToken={`${process.env.REACT_APP_KEY_MAP}`}
                        initialViewState={viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        style={{ height: '50vh' }}
                    >
                        {getRelevantBanks(targetCurrencyCode, banksData).map(
                            (bank) => (
                                <CardMarker
                                    key={bank.fsq_id}
                                    bank={bank}
                                    onClick={this.openPopUp(bank.fsq_id)}
                                    onClose={this.closePopUp}
                                    selectedBankID={selectedBankID}
                                />
                            ),
                        )}
                    </Map>
                )}
            </>
        );
    }
}
const mapStateToProps = (state: RootStoreType): CardProps => {
    return {
        banksData: state.currencies.banksData,
        targetCurrencyCode: state.currencies.targetCurrencyCode,
    };
};

const mapDispatchToProps: CardDispatch = {
    fetchBanksThunk,
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
