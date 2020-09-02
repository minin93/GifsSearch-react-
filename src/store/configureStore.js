import { createStore, applyMiddleware } from 'redux';
// import {routerMiddleware} from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
// import { createBrowserHistory as createHistory } from 'history';
import rootReducer from '../reducers';

// export const history = createHistory();
// routerMiddleware(history), in middleware
const middleware = [ReduxPromise];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

export function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, composedEnhancers);
	return store;
}
