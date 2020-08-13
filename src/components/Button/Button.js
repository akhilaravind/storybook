import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Button.scss';
/**
*	Custom button component
*  Component props type are defined below.
*/
const CustomButton = (props) => {
	const RenderButton = () => {
		const { type, label, icon, size, color } = props;
		switch (type) {
			case 'icon':
				return <Button icon={icon} aria-hidden='true' />
			case 'label':
				return <Button icon={icon} label={label} labelPosition='left' />
			case 'size':
				return <Button size={size}>{label}</Button>
			case 'color':
				return <Button color={color}>{label}</Button>
			case 'fluid':
				return <Button fluid>{label}</Button>
			case 'circular':
				return <Button circular icon={icon} aria-hidden='true' />
			default:
				return <Button basic content={label} />
		}
	}

	return (
		<React.Fragment>
			<RenderButton />
		</React.Fragment>
	)
};

CustomButton.propTypes = {
	/**
	* 'clear' for clearable, 'disabled' for disabled rating. Leave it empty if dont want it as clearable or disabled.
	*/
	type: PropTypes.oneOf(['icon', 'label', 'size', 'color', 'fluid', 'circular', '']),
	/**
	* Rating icons, can try heart, star etc..
	*/
	icon: PropTypes.string,
	/**
	* Size of rating icons, tiny, small, large etc..
	*/
	size: PropTypes.oneOf(['mini', 'tiny', 'small', '', 'large', 'huge', 'massive']),
	/**
	* Maximum number of stars to be shown, 5 as a standard rating count.
	*/
	label: PropTypes.string,
	/**
	* callback function on rating change.
	*/
	color: PropTypes.string
};

CustomButton.defaultProps = {
	type: 'icon',
	icon: 'globe',
	size: '',
	label: '',
	color: '',
}

export default CustomButton;