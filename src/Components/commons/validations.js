/* eslint-disable no-useless-escape */
export const required = value => ( value === null || value === '' || value === undefined
	? 'Required Field.'
	: undefined );

export const codeLength = value => ( value !== undefined
	? ( value.length > 4
		? 'The code can only have up to 4 characters.'
		: undefined )
  || ( value.length < 2
  	? 'The code can only have at least 2 characters.'
  	: undefined )
	: undefined );

export const textLength = value => ( value !== undefined
	? ( value.length > 45
		? 'The name can only have up to 45 characters.'
		: undefined )
  || ( value.length < 3
  	? 'The name must have at least 3 characters.'
  	: undefined )
	: undefined );

export const username = value => ( value !== undefined
	? ( value.length > 45
		? 'The username can only have up to 45 characters.'
		: undefined )
  || ( value.length < 3
  	? 'The username must have at least 3 characters.'
  	: undefined )
	: undefined );

export const password = value => ( value
	? ( value.length > 50
		? 'The password can only have up to 50 characters.'
		: undefined ) || ( value.length < 6 ? 'Min 6 characters.' : undefined )
	: undefined );

export const typeInteger = ( value ) => {
	let regexInteger = /^[1-9]\d*?$/;
	if ( value ) {
		return regexInteger.test( value )
			? null
			: 'This field only supports whole numbers.';
	}
	return value;
};

export const typeIntegerOrDecimal = ( value ) => {
	let regexIntegerOrDecial = /^[1-9]\d*(\.\d+)?$/;
	if ( value ) {
		return regexIntegerOrDecial.test( value )
			? null
			: 'This field only admits whole numbers or decimals.';
	}
	return value;
};

export const phone = ( value ) => {
	let regexIntegerOrDecial = /^\+\d*$/;
	if ( value ) {
		return regexIntegerOrDecial.test( value ) ? null : 'Invalid phone';
	}
	return value;
};

export const phoneLength = value => ( value !== undefined
	? ( value.length > 20 ? 'Maximum 20 characters.' : undefined )
  || ( value.length < 11 ? 'At least 11 characters' : undefined )
	: undefined );

export const onlyWords = ( value ) => {
	let regexWordsAndSpacesBetween = /^[a-zA-ZÀ-ÿ]+( [a-zA-ZÀ-ÿ]+)*$/; // ^[a-zA-Z ]+$/;
	if ( value ) {
		return regexWordsAndSpacesBetween.test( value )
			? null
			: 'This field only supports letters.';
	}
	return value;
};
export const validateEmail = ( value ) => {
	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if ( value ) {
		return emailRegex.test( value ) ? null : 'Invalid email';
	}
	return null;
};

export const confirmPassword = ( value, allValues ) => {
	let pass = allValues.register && allValues.register.proPassword;
	if ( value ) {
		if ( pass ) {
			return pass === value ? null : 'Passwords do not match.';
		}
		return null;
	}
	return 'You must enter a password.';
};

export const confirmEmail = ( value, allValues ) => {
	let email = allValues.user && allValues.user.email;
	if ( value ) {
		if ( email ) {
			return email === value ? null : 'Email addresses do not match';
		}
		return null;
	}
	return 'You must enter an email address.';
};

export const typeIntegerOrDecimalFull = ( value ) => {
	let regexIntegerOrDecimalFull = /^-?\d+(?:.\d+)?$/;
	if ( value ) {
		return regexIntegerOrDecimalFull.test( value )
			? null
			: 'This field only supports whole numbers or decimals, positive and negative.';
	}
	return value;
};
export const typePercentaje = ( value ) => {
	let regexPercentaje = /^([0-9]{1,2}([\.][0-9]{1,})?$|100([\.][0]{1,})?)$/;
	if ( value ) {
		return regexPercentaje.test( value )
			? null
			: 'Invalid format for percentage.';
	}
	return value;
};

export const requiredNoUnderscore = value => ( value === null
  || value === ''
  || value === undefined
  || value.indexOf( '_' ) !== -1
	? 'Required Field'
	: null );

export const noUnderscore = ( value ) => {
	if ( value ) return value.indexOf( '_' ) !== -1 ? 'Incomplete field' : null;
	return null;
};

export const postWordsLimit = value => ( value.trim().split( ' ' ).length < 3 ? 'Minimum 3 words' : null );

export const postMaxCharLimit = value => ( value.length > 1000 ? 'Maximum 1000 characters' : null );
