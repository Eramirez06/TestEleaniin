import {
	SET_USER_DATA
} from '../actions/types';

const initialState = {
	user: null
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_USER_DATA:
			return Object.assign( {}, state, { user: action.payload } );
		default:
			return state;
	}
};
