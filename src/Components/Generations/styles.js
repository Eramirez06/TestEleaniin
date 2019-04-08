import { StyleSheet } from 'react-native';
import { responsiveSize, normalize } from '../../utils/dimensions';

const styles = StyleSheet.create( {
	item: {
		width: '100%',
		height: responsiveSize( 200 ),
		alignItems: 'center',
		justifyContent: 'center'
	},
	generations: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	generationtext: {
		paddingLeft: responsiveSize( 10 ),
		fontWeight: 'bold',
		fontSize: normalize( 22 )
	}
} );
export default styles;
