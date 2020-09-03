import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as FormReducer } from 'redux-form';

import GifsReducer from './gifs';
import ModalReducer from './modal';

const rootReducer = (history) =>
	combineReducers({
		form: FormReducer,
		router: connectRouter(history),
		gifs: GifsReducer,
		modal: ModalReducer,
	});
// router: connectRouter(history),
export default rootReducer;
