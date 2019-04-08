import { StyleSheet, Platform } from 'react-native';
import { responsiveSize, isIPhoneX, iPhone8 } from '../../utils/dimensions';

export default StyleSheet.create( {
	headerContainer: {
		height: responsiveSize( Platform.OS === 'ios' ? ( iPhone8 ? 85 : 100 ) : 60 ), // eslint-disable-line no-nested-ternary
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: isIPhoneX() ? responsiveSize( 30 ) : 0
	},
	backButton: {
		flex: 1,
		paddingLeft: 10
	},
	changeButton: {
		flex: 1,
		alignItems: 'flex-end',
		marginRight: 15
	},
	title: {
		flex: 3,
		fontSize: responsiveSize( 20 ),
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttonContainer: {
		flex: 1
	}
}
);
