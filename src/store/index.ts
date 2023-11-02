import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducers/app';

export const rootReducer = combineReducers({
    app: appReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
