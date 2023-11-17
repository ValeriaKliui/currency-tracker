import { PureComponent } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { type CardMarkerProps } from '@constants/interfaces/interfaces';
import { formatBankStatus } from '@utils/formatBankStatus';

export class CardMarker extends PureComponent<CardMarkerProps> {
    render() {
        const {
            onClick,
            onClose,
            bank: {
                fsq_id: bankID,
                name,
                geocodes: {
                    main: { latitude, longitude },
                },
                closed_bucket: isOpened,
                location: { formatted_address: address },
            },
            selectedBankID,
        } = this.props;

        return (
            <>
                <Marker
                    style={{ cursor: 'pointer' }}
                    longitude={longitude}
                    latitude={latitude}
                    onClick={onClick}
                />
                {selectedBankID === bankID && (
                    <Popup
                        latitude={latitude}
                        longitude={longitude}
                        offset={30}
                        style={{ color: 'black' }}
                        onClose={onClose}
                        closeButton={true}
                        closeOnClick={false}
                    >
                        <h3>Банк: {name}</h3>
                        <p>
                            <i>{formatBankStatus(isOpened)}</i>
                        </p>
                        <p>Адрес: {address}</p>
                    </Popup>
                )}
            </>
        );
    }
}
