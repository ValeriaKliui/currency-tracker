import { banksData } from '@constants/constants/banks';
import { useEffect, useState, type FC } from 'react';
import MapCart, { GeolocateControl, Marker, Popup } from 'react-map-gl';

export const Map: FC = () => {
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 3.5,
    });
    const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewport({
                ...viewport,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                zoom: 9.5,
            });
        });
    }, []);
    console.log(selectedIndex);
    const setSelectedMarker = (index: string | null) => {
        setSelectedIndex(index);
    };
    const closePopup = () => {
        setSelectedMarker(null);
    };

    const openPopup = (index: string | null) => {
        setSelectedMarker(index);
    };

    console.log(viewport.latitude, viewport.longitude);
    return (
        <>
            {viewport.latitude !== 0 && viewport.longitude !== 0 && (
                <div>
                    <MapCart
                        style={{ height: '50vh' }}
                        mapboxAccessToken="pk.eyJ1IjoibGVyYWtsaXVpIiwiYSI6ImNsb3I2MjNqeTByczQycm12a2pjNGIweXgifQ.Rq2NonT2_zWDcnXdxBdXlQ"
                        initialViewState={viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                    >
                        {banksData.results.map(({ geocodes, name, fsq_id }) => (
                            <>
                                <Marker
                                    longitude={geocodes.main.longitude}
                                    latitude={geocodes.main.latitude}
                                    // anchor="bottom"
                                    // onClick={() => {
                                    //     console.log(showPopup);
                                    //     setShowPopup(true);
                                    // }}
                                    onClick={() => openPopup(fsq_id)}
                                />
                                {selectedIndex !== null && (
                                    <Popup
                                        latitude={geocodes.main.longitude}
                                        longitude={geocodes.main.longitude}
                                        onClose={closePopup}
                                        closeButton={true}
                                        closeOnClick={false}
                                    >
                                        <p>{name}</p>
                                    </Popup>
                                )}
                                {/* {showPopup && (
                                    <Popup
                                        longitude={geocodes.main.longitude}
                                        latitude={geocodes.main.latitude}
                                        anchor="bottom"
                                        style={{ color: 'black' }}
                                        onClose={() => setShowPopup(true)}
                                    >
                                        You are here
                                    </Popup>
                                )} */}
                            </>
                        ))}
                    </MapCart>
                </div>
            )}
        </>
    );
};
