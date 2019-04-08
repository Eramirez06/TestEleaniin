import React from 'react';
import { PropTypes } from 'prop-types';
import {
	View, TouchableOpacity, Text, Image
} from 'react-native';
import styles from './styles';
import backIcon from '../../assets/images/iconBack.png';
import iconClose from '../../assets/images/close.png';

const Header = ( {
	title, leftIcon, onPress, backVisible, closeIcon, changeVisible, onPressClose, icon
} ) => (
	<View style={styles.headerContainer}>
		{!backVisible && <View style={styles.backButton} />}
		{backVisible && (
			<TouchableOpacity onPress={onPress} style={styles.backButton}>
				{leftIcon ? (
					<Image source={leftIcon} />
				) : (
					<Image source={closeIcon ? iconClose : backIcon} />
				)}
			</TouchableOpacity>
		)}
		<Text style={styles.title}>{title}</Text>
		{!changeVisible && <View style={styles.buttonContainer} />}
		{changeVisible && (
			<TouchableOpacity onPress={onPressClose} style={styles.changeButton}>
				<Image source={icon} />
			</TouchableOpacity>
		)}
	</View>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	backVisible: PropTypes.bool,
	closeIcon: PropTypes.bool,
	changeVisible: PropTypes.bool,
	onPressClose: PropTypes.func,
	icon: PropTypes.any,
	leftIcon: PropTypes.number
};

Header.defaultProps = {
	backVisible: false,
	closeIcon: false,
	changeVisible: false,
	onPressClose: () => {},
	icon: iconClose,
	leftIcon: null
};

export default Header;
