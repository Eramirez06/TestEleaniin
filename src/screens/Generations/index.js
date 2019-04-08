/* eslint-disable max-len */
import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import firebase from 'react-native-firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Header from '../../Components/header';
import styles from './styles';
import { generationsAPI } from '../../utils/paths';
import Item from '../../Components/Generations';
import Gene1 from '../../assets/images/gene1.png';
import Gene2 from '../../assets/images/gene2.png';
import Gene3 from '../../assets/images/gene3.png';
import Gene4 from '../../assets/images/gene4.png';
import Gene5 from '../../assets/images/gene5.jpg';
import Gene6 from '../../assets/images/gene6.png';
import Gene7 from '../../assets/images/gene7.jpg';
import Loading from '../../assets/images/loading.gif';
import { setNewRoom } from '../../actions/actulRoom';
import { goToPage } from '../index';

class Generations extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			isLoading: true,
			generations: []
		};
	}

	componentDidMount = () => {
		fetch( generationsAPI )
			.then( response => response.json() )
			.then( ( ResponseJSON ) => {
				let { results } = ResponseJSON;
				this.setState( { isLoading: false, generations: results } );
			} );
	}

	closeSession = () => {
		// eslint-disable-next-line react/prop-types
		let { componentId } = this.props;
		firebase.auth().signOut();
		goToPage( 'login', componentId );
	}

	getListOfPokemons = ( index ) => {
		// eslint-disable-next-line no-shadow
		let { setNewRoom, componentId } = this.props;
		setNewRoom( index + 1 );
		goToPage( 'listPokemon', componentId );
	}

	render() {
		let { isLoading, generations } = this.state;
		if ( !isLoading ) {
			return (
				<View style={styles.container}>
					<Header onPressClose={this.closeSession} changeVisible title="Bienvenido" />
					<ScrollView>
						{generations.map( ( value, index ) => (
							<View key={value.url}>
								<View>{index === 0 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene1} text={value.name} />}</View>
								<View>{index === 1 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene2} text={value.name} />}</View>
								<View>{index === 2 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene3} text={value.name} />}</View>
								<View>{index === 3 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene4} text={value.name} />}</View>
								<View>{index === 4 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene5} text={value.name} />}</View>
								<View>{index === 5 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene6} text={value.name} />}</View>
								<View>{index === 6 && <Item onPress={() => this.getListOfPokemons( index )} image={Gene7} text={value.name} />}</View>
							</View>
						) )}
					</ScrollView>
				</View>
			);
		}
		return (
			<Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={Loading} />
		);
	}
}

Generations.propTypes = {
	setNewRoom: PropTypes.func.isRequired,
	componentId: PropTypes.string.isRequired
};

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( {
		setNewRoom
	},
	dispatch );
}
export default connect( null, mapDispatchToProps )( Generations );
