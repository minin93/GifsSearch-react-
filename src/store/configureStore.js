import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

export const history = createBrowserHistory();
// routerMiddleware(history), in middleware
const middleware = [ReduxPromise, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

export function configureStore(initialState) {
	const store = createStore(
		rootReducer(history),
		initialState,
		composedEnhancers
	);
	return store;
}
