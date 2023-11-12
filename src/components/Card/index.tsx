import { Component } from 'react';
import { Map, Marker, Popup } from 'react-map-gl';
import { connect } from 'react-redux';
import {
    BankOpened,
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
                        {banksData !== null &&
                            getRelevantBanks(targetCurrencyCode, banksData).map(
                                ({
                                    fsq_id: bankID,
                                    geocodes,
                                    name,
                                    closed_bucket: isOpened,
                                    location: { formatted_address: address },
                                }) => (
                                    <div key={bankID}>
                                        <Marker
                                            style={{ cursor: 'pointer' }}
                                            longitude={geocodes.main.longitude}
                                            latitude={geocodes.main.latitude}
                                            onClick={this.openPopUp(bankID)}
                                        />
                                        {bankID === selectedBankID && (
                                            <Popup
                                                latitude={
                                                    geocodes.main.latitude
                                                }
                                                longitude={
                                                    geocodes.main.longitude
                                                }
                                                offset={30}
                                                style={{ color: 'black' }}
                                                onClose={this.closePopUp}
                                                closeButton={true}
                                                closeOnClick={false}
                                            >
                                                <h3>Банк: {name}</h3>
                                                <p>
                                                    <i>
                                                        {isOpened !== null &&
                                                            Object.entries(
                                                                BankOpened,
                                                            ).filter(
                                                                (status) =>
                                                                    status[1] ===
                                                                    isOpened,
                                                            )[0][0]}
                                                    </i>
                                                </p>
                                                <p>Адрес: {address}</p>
                                            </Popup>
                                        )}
                                    </div>
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
