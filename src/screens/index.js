/* eslint-disable max-len */
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';
import store from '../store';
import Login from './App';
import Generations from './Generations';
import Pokemons from './Pokemons';

export function initApp() {
	if ( firebase.auth().currentUser !== null ) {
		Navigation.events().registerAppLaunchedListener( () => {
			Navigation.setRoot( {
				root: {
					stack: {
						children: [ {
							component: {
								name: 'generation', // onboarding
								options: {
									topBar: {
										visible: false,
										drawBehind: true,
										animate: false
									}
								}
							}
						} ]
					}
				}
			} );
		} );
	} else {
		Navigation.events().registerAppLaunchedListener( () => {
			Navigation.setRoot( {
				root: {
					stack: {
						children: [ {
							component: {
								name: 'login', // onboarding
								options: {
									topBar: {
										visible: false,
										drawBehind: true,
										animate: false
									}
								}
							}
						} ]
					}
				}
			} );
		} );
	}
}


export const goToPage = ( page, componentId ) => {
	Navigation.push( componentId, {
		component: {
			name: page,
			options: {
				bottomTabs: {
					visible: false,
					drawBehind: true
				},
				topBar: {
					visible: false,
					drawBehind: true
				}
			}
		}
	} );
};
export const goToPageWithProps = ( page, componentId, props ) =>	Navigation.push( componentId, {
	component: {
		name: page,
		passProps: {
			...props
		},
		options: {
			bottomTabs: {
				visible: false,
				drawBehind: true
			},
			topBar: {
				visible: false,
				drawBehind: true
			}
		}
	}
} );


export const goBack = componentId => Navigation.pop( componentId );
export const backTo = componentId => Navigation.popTo( componentId );

// register all screens of the app (including internal ones)
export function registerScreens() {
	Navigation.registerComponentWithRedux( 'login', () => Login, Provider, store );
	Navigation.registerComponentWithRedux( 'generation', () => Generations, Provider, store );
	Navigation.registerComponentWithRedux( 'listPokemon', () => Pokemons, Provider, store );
}
