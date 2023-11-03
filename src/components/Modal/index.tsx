import { type FC, memo } from 'react';
import { type ModalProps } from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { closeModal } from '@store/actions/appActions';
import { isModalOpenedSelector } from '@store/selectors/appSelector';

import { Content, ModalStyled, Overlay } from './styled';

export const Modal: FC<ModalProps> = memo(({ children, onClose }) => {
    const dispatch = useAppDispatch();
    const isModalOpened = useAppSelector(isModalOpenedSelector);

    const closeHandler = (): void => {
        dispatch(closeModal());
        onClose();
    };
    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };

    return (
        <ModalStyled $opened={isModalOpened} data-testid="modal">
            <Overlay onClick={closeHandler} data-testid="overlay">
                <Content onClick={onContentClick}>{children}</Content>
            </Overlay>
        </ModalStyled>
    );
});
