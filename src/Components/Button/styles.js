import { responsiveSize } from '../../utils/dimensions';

export default {
    label: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600'
    },
    icon: {
        position: 'absolute',
        left: 0,
        paddingTop: responsiveSize(10),
        paddingBottom: responsiveSize(10),
        paddingLeft: responsiveSize(20),
        paddingRight: responsiveSize(10)
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: responsiveSize(5),
        paddingBottom: responsiveSize(5),
        borderRadius: responsiveSize(8),
        height: responsiveSize(55),
        alignItems: 'center',
        position: 'relative'
    },
    spinnerContainer: {
        height: responsiveSize(55),
        alignItems: 'center',
        justifyContent: 'center'
    }
};
