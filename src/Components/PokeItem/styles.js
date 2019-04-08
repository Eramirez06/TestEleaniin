import { StyleSheet } from 'react-native';
import { responsiveSize, normalize } from '../../utils/dimensions';

const styles = StyleSheet.create( {
	container: {
		width: '32.5%',
		height: responsiveSize( 160 ),
		marginBottom: responsiveSize( 5 )
	},
	insider: {
		flex: 1,
		borderRadius: responsiveSize( 10 ),
		borderWidth: 1,
		borderColor: 'gray'
	},
	textInfo: {
		fontWeight: 'bold',
		fontSize: normalize( 14 ),
		textAlign: 'center'
	},
	tipoPokemon: {
		textAlign: 'center',
		fontSize: normalize( 14 ),
		fontWeight: 'bold'
	},
	typeContent: {
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-around'
	}
} );
export default styles;
