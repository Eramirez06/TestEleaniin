import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import spacings from './styles';

const Spacing = ( { size, value, horizontal } ) => {
	const spacingSize = spacings[ size ];
	const spacing = value || spacingSize;
	return ( !horizontal ? <View style={{ height: spacing, width: '100%' }} /> : <View style={{ height: '100%', width: spacing }} /> );
};

Spacing.propTypes = {
	size: PropTypes.string,
	value: PropTypes.number,
	horizontal: PropTypes.bool
};

Spacing.defaultProps = {
	horizontal: false,
	value: 0,
	size: 'tiny'
};

export default Spacing;
