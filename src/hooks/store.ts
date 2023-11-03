import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux';
import { type RootStoreType } from '@store/types/interfaces';
import { type AnyAction } from 'redux';
import { type ThunkDispatch } from 'redux-thunk';

export type RootDispatchThunkType = ThunkDispatch<
    RootStoreType,
    any,
    AnyAction
>;
export const useAppDispatch = () => useDispatch<RootDispatchThunkType>();

export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector;
