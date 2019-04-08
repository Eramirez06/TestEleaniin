/* eslint-disable react/jsx-indent */
import React from 'react';
import {
	TouchableOpacity, View, Image, Text
} from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import NotFound from '../../assets/images/not_found.png';

function colorTipo( tipo ) {
	if ( tipo === 'bug' ) {
		return '#B7FF04';
	} if ( tipo === 'dark' ) {
		return '#3a414c';
	} if ( tipo === 'dragon' ) {
		return '#8272FF';
	} if ( tipo === 'electric' ) {
		return '#FFBE0A';
	} if ( tipo === 'fairy' ) {
		return '#E86ED5';
	} if ( tipo === 'fighting' ) {
		return '#732E09';
	} if ( tipo === 'fire' ) {
		return '#E83204';
	} if ( tipo === 'flying' ) {
		return '#667CE8';
	} if ( tipo === 'ghost' ) {
		return '#2C007A';
	} if ( tipo === 'grass' ) {
		return '#16C005';
	} if ( tipo === 'ground' ) {
		return '#E8CB7F';
	} if ( tipo === 'ice' ) {
		return '#5BCEE2';
	} if ( tipo === 'normal' ) {
		return '#AFB2BA';
	} if ( tipo === 'poison' ) {
		return '#A20D98';
	} if ( tipo === 'psychic' ) {
		return '#C500D1';
	} if ( tipo === 'rock' ) {
		return '#AF8A45';
	} if ( tipo === 'steel' ) {
		return 'silver';
	} if ( tipo === 'water' ) {
		return '#438DF4';
	}
	return 'white';
}

const PokeItem = ( {
	types, image, number, name
} ) => (
	<TouchableOpacity style={styles.container}>
		<View style={styles.insider}>
			{image
				? <Image style={{ width: '70%', height: '50%', alignSelf: 'center' }} resizeMode="contain" source={{ uri: image }} />
				: <Image style={{ width: '70%', height: '50%', alignSelf: 'center' }} resizeMode="contain" source={NotFound} />
			}

			<Text style={styles.textInfo}>
				{'#'}
				{number}
				{' '}
			</Text>
			<Text style={styles.textInfo}>
				{' '}
				{name}
				{' '}
			</Text>
			<View style={styles.typeContent}>
				{types.map( tipos => (
					<View style={{
						padding: 3,
						width: types.length > 1 ? '45 %' : '80%',
						backgroundColor: colorTipo( tipos.type.name ),
						height: 30,
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center'
					}}
					>
						<Text style={styles.tipoPokemon}>
							{tipos.type.name}
						</Text>
					</View>
				) )}
			</View>
		</View>
	</TouchableOpacity>
);

PokeItem.propTypes = {
	types: PropTypes.any.isRequired,
	image: PropTypes.any.isRequired,
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default PokeItem;
