import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducers/app';
// import { bankCardReducer } from './reducers/bankCard';
import { currencyReducer } from './reducers/currencies';
import { timelineReducer } from './reducers/timeline';

export const rootReducer = combineReducers({
    app: appReducer,
    currencies: currencyReducer,
    timeline: timelineReducer,
    // bankCard: bankCardReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
