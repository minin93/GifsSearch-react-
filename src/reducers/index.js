import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import { routerReducer } from 'react-router-redux';

import GifsReducer from './gifs';
import ModalReducer from './modal';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		gifs: GifsReducer,
		modal: ModalReducer,
	});
// router: connectRouter(history),
export default rootReducer;
