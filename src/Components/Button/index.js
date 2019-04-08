import React from 'react';
import {
	TouchableOpacity, Text, View, Image, ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ( {
	text,
	textColor,
	buttonColor,
	onPress,
	style,
	icon,
	fontSize,
	loading,
	spinnerColor,
	valid
} ) => (
	<TouchableOpacity
		style={[ { backgroundColor: valid ? buttonColor : `${buttonColor}50` }, style ]}
		activeOpacity={valid && !loading ? 0.9 : 1}
		onPress={valid && !loading ? onPress : () => { }}
	>
		<View style={[ styles.buttonContent, { display: loading ? 'none' : 'flex' } ]}>
			<View style={styles.icon}><Image source={icon} /></View>
			<Text style={[ styles.label, { color: textColor, fontSize } ]}>
				{text}
			</Text>
		</View>
		<View style={[ styles.spinnerContainer, { display: loading ? 'flex' : 'none' } ]}>
			<ActivityIndicator size="small" color={spinnerColor} />
		</View>
	</TouchableOpacity>
);

Button.propTypes = {
	textColor: PropTypes.string.isRequired,
	buttonColor: PropTypes.string, // only on hex - for disabled opacity
	fontSize: PropTypes.number,
	onPress: PropTypes.func,
	text: PropTypes.string.isRequired,
	style: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.object
	] ),
	icon: PropTypes.number,
	loading: PropTypes.bool,
	spinnerColor: PropTypes.string,
	valid: PropTypes.bool
};

Button.defaultProps = {
	onPress: () => { },
	style: {},
	fontSize: null,
	icon: 0,
	buttonColor: '#ffffff', // only on hex - for disabled opacity
	loading: false,
	spinnerColor: 'black',
	valid: true
};


export default Button;
