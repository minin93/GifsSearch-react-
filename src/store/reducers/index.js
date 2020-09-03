import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as FormReducer } from 'redux-form';

import AuthReducer from './auth';
import GifsReducer from './gifs';
import ModalReducer from './modal';

const rootReducer = (history) =>
	combineReducers({
		auth: AuthReducer,
		form: FormReducer,
		router: connectRouter(history),
		gifs: GifsReducer,
		modal: ModalReducer,
	});
// router: connectRouter(history),
export default rootReducer;
