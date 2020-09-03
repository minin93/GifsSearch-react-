import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import { routerReducer } from 'react-router-redux';

import GifsReducer from './gifs';
import ModalReducer from './modal';

export default combineReducers({
	gifs: GifsReducer,
	modal: ModalReducer,
});
// router: connectRouter(history),
