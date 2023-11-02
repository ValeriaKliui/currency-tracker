import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducers/app';
import { currencyReducer } from './reducers/currencies';

export const rootReducer = combineReducers({
    app: appReducer,
    currencies: currencyReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
