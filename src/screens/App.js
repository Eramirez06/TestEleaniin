import React, { Component } from 'react';
import {
	View, Image, ScrollView, Text
} from 'react-native';
import { PropTypes } from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import styles from './styles';
import Logo from '../assets/images/logo.png';
import Spacing from '../Components/spacing/Spacing';
import { goToPage } from './index';

class App extends Component {
	constructor( props ) {
		super( props );
		this.state = {
		};
	}


	onMailLogin = () => {
		this.verifyUser();
	}

	verifyUser = () => {
		// eslint-disable-next-line no-shadow
		let { componentId } = this.props;
		let userFace = firebase.auth().currentUser.uid;
		firebase.database().ref().child( 'profiles' ).orderByChild( 'facebookProfile' )
			.equalTo( userFace )
			.once( 'value' )
			.then( ( snap ) => {
				let dataUsua = snap.val();
				if ( dataUsua !== null ) {
					goToPage( 'generation', componentId );
				} else {
					firebase.database().ref().child( 'profiles' ).push( {
						facebookProfile: userFace
					}, () => {
						goToPage( 'generation', componentId );
					} );
				}
			} );
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={{ flex: 1 }}
					contentContainerStyle={styles.scrollView}
				>
					<View style={styles.content}>
						<Image resizeMode="contain" source={Logo} style={styles.imgLogo} />

						<View style={styles.textContainer}>
							<Text style={styles.textLogin}>Bienvenido entrenador</Text>
						</View>

						<Spacing size="twoXLarge" />
						<LoginButton
							onLoginFinished={
								() => {
									AccessToken.getCurrentAccessToken().then(
										( data ) => {
											const credential = firebase.auth.FacebookAuthProvider.credential( data.accessToken );
											firebase.auth().signInWithCredential( credential )
												.then( ( ) => {
													this.onMailLogin();
												} )
												.catch( ( error ) => {
													console.log( 'Hubo un error' );
												} );
										}
									);
								}
							}
							onLogoutFinished={() => console.log( 'logout.' )}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

App.propTypes = {
	componentId: PropTypes.string.isRequired
};

function mapStateToProps( store ) {
	return {
		loginForm: store.form.login
	};
}

export default reduxForm( {
	form: 'login',
	destroyOnUnmount: false
} )( connect(
	mapStateToProps,
	null
)( App )
);
