import {
	SET_DATA_ROOM,
	SET_ACTUAL_ROOM,
	GET_DATA_ROOM
} from './types';
import { generationsAPI, pokemonsAPI } from '../utils/paths';

export function setNewRoom( room ) {
	return ( dispatch ) => {
		dispatch( {
			type: SET_ACTUAL_ROOM,
			payload: room
		} );
		fetch( generationsAPI + room )
			.then( response => response.json() )
			.then( ( responseJson ) => {
				let pokemons = responseJson.pokemon_species;
				dispatch( {
					type: SET_DATA_ROOM,
					payload: pokemons
				} );
				let dataPokemons = [];
				pokemons.forEach( ( element ) => {
					dataPokemons.push( new Promise( ( resolve, reject ) => {
						fetch( pokemonsAPI + element.name )
							.catch( ( error ) => {
								// eslint-disable-next-line
								reject(error)
							} )
							.then( response => ( response.status !== 200
								? response
								: response.json() ) )
							.then( ( responseJSON ) => {
								resolve( responseJSON );
							} );
					} ) );
				} );
				Promise.all( dataPokemons ).then( ( snap ) => {
					dispatch( {
						type: GET_DATA_ROOM,
						payload: snap
					} );
				} );
			} )
			.catch( ( error ) => {
				// eslint-disable-next-line
                console.log(`getList Error: ${error}`);
			} );
	};
}
