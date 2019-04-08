/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../Components/header';
import styles from './styles';
import { goBack } from '../index';
import Loading from '../../assets/images/loading.gif';
import PokeItem from '../../Components/PokeItem';

class ListPokemon extends Component {
	constructor( props ) {
		super( props );
		this.state = {

		};
	}

	closeSession = () => {
		let { componentId } = this.props;
		goBack( componentId );
	}

	render() {
		// eslint-disable-next-line react/prop-types
		let { isFetching, pokemons } = this.props;
		if ( !isFetching ) {
			return (
				<View style={styles.container}>
					<Header onPressClose={this.closeSession} changeVisible title="Pokemons x generacion" />
					<ScrollView>
						<View style={{
							flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
						}}
						>
							{pokemons.map( ( value ) => {
								if ( value.sprites !== undefined ) {
									return (
										<PokeItem
											key={value.id}
											types={value.types}
											image={value.sprites.front_default}
											number={value.id}
											name={value.name}
										/>
									);
								}
								return null;
							} )}
						</View>
					</ScrollView>
				</View>
			);
		}
		return (
			<Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={Loading} />
		);
	}
}

ListPokemon.propTypes = {
	componentId: PropTypes.string.isRequired
};

const mapStateToProps = ( { actualRoom } ) => ( {
	room: actualRoom.room,
	pokemons: actualRoom.pokemons,
	isFetching: actualRoom.isFetching
} );

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		loginOut,
// 		loadUserData
// 	},
// 		dispatch);
// }

export default connect( mapStateToProps, null )( ListPokemon );
