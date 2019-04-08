import React from 'react';
import {
	TouchableOpacity, Text, Image, View
} from 'react-native';
import styles from './styles';

const cards = ( {
	image, text, onPress
} ) => (
	<TouchableOpacity onPress={onPress} style={styles.item}>
		<View style={styles.generations}>
			<Image resizeMode="contain" source={image} style={{ width: 100, height: 100 }} />
			<Text style={styles.generationtext}>{text}</Text>
		</View>
	</TouchableOpacity>
);
export default cards;
