import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import * as Actions from './actions';

export const history = createBrowserHistory();
// routerMiddleware(history), in middleware
const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

export function configureStore(initialState) {
	const store = createStore(
		rootReducer(history),
		initialState,
		composedEnhancers
	);

	store.dispatch(Actions.verifyAuth());

	return store;
}
