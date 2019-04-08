import {
	SET_ACTUAL_ROOM, SET_DATA_ROOM, GET_DATA_ROOM
} from '../actions/types';

const initialState = {
	room: [],
	pokemons: [],
	isFetching: false,
	actualRoom: 0
};

function filterData( listadoPokemon ) {
	return listadoPokemon.sort( ( a, b ) => a.id - b.id );
}

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_ACTUAL_ROOM:
			return {
				...state,
				isFetching: true,
				actualRoom: action.payload
			};
		case SET_DATA_ROOM:
			return {
				...state,
				room: action.payload
			};
		case GET_DATA_ROOM:
			return {
				...state,
				isFetching: false,
				pokemons: filterData( action.payload )
			};
		default:
			return state;
	}
};
