import { type FC } from 'react';
import { CurrenciesConverter } from '@components/CurrenciesConverter';
import { CurrenciesList } from '@components/CurrenciesList';
import { Modal } from '@components/Modal';
import { useAppDispatch } from '@hooks/store';
import { setBaseCurrency } from '@store/actions/currencyActions';

export const Home: FC = () => {
    const dispatch = useAppDispatch();
    const onClose = (): void => {
        dispatch(setBaseCurrency(null));
    };
    return (
        <>
            <CurrenciesList />
            <Modal onClose={onClose}>
                <CurrenciesConverter />
            </Modal>
        </>
    );
};
