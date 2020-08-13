import React from 'react';
import { Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './rating.scss';
/**
 *  Component props type are defined below.
 */
const CustomRating = (props) => {
	const { type, icon, size, max, onRate } = props;
	console.log(props);
	const RenderContent = () => {
		switch (type) {
			case 'clear':
				return (
					<Rating
						icon={icon}
						size={size}
						defaultRating={props.default}
						maxRating={max}
						onRate={onRate}
						clearable
					/>
				)
			case 'disable':
				return (
					<Rating
						icon={icon}
						size={size}
						defaultRating={props.default}
						maxRating={max}
						onRate={onRate}
						disabled
					/>
				)
			default:
				return (
					<Rating
						icon={icon}
						size={size}
						defaultRating={props.default}
						maxRating={max}
						onRate={onRate}
					/>
				)
		}
	}
	return (
		<React.Fragment>
			<RenderContent />
		</React.Fragment>
	)
};

CustomRating.propTypes = {
	/**
	* 'clear' for clearable, 'disabled' for disabled rating. Leave it empty if dont want it as clearable or disabled.
	*/
	type: PropTypes.string,
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
	max: PropTypes.number,
	/**
	* callback function on rating change.
	*/
	onRate: PropTypes.func,
	/**
	* Default rating value, eg. 3,4,2 etc..
	*/
	default: PropTypes.number,
};

CustomRating.defaultProps = {
	type: 'clear',
	icon: 'heart',
	size: '',
	max: 5,
	onRate: '()=>',
	default: 3,
}
export default CustomRating;