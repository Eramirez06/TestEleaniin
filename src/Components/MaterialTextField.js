import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';

export default class MaterialTextField extends Component {
	state = {};

	render() {
		const {	input, meta, ...props } = this.props; // eslint-disable-line

		return (
			<TextField
				tintColor="#3C3C3C"
				errorColor="#3C3C3C"
				{...props}
				error={meta.touched && !meta.valid ? meta.error : ''}
				onChangeText={input.onChange}
				onBlur={input.onBlur}
				onFocus={input.onFocus}
				value={input.value}
			/>
		);
	}
}
