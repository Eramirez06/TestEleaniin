import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authentication from './authentication';
import actualRoom from './actualRoom';

const rootReducer = combineReducers( {
	authentication,
	actualRoom,
	form: formReducer
} );

export default rootReducer;
