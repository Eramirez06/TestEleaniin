import { StyleSheet } from 'react-native';
import { responsiveSize } from '../utils/dimensions';

const styles = StyleSheet.create( {
	container: {
		backgroundColor: 'black',
		flex: 1,
		paddingHorizontal: responsiveSize( 15 )
	},
	imgLogo: {
		width: '70%',
		height: responsiveSize( 200 )
	},
	content: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: responsiveSize( 10 )
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	textLogin: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18
	},
	scrollView: {
		flex: 1,
		paddingBottom: responsiveSize( 40 )
	}
} );
export default styles;
