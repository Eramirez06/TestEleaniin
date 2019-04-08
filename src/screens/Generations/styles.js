import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

const styles = StyleSheet.create( {
	container: {
		flex: 1
	},
	scrollView: {
		flex: 1,
		paddingBottom: responsiveSize( 40 )
	}
} );
export default styles;
