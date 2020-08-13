import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import './Skeleton.scss';
import PropTypes from 'prop-types';

/**
*	Custom Skeleton component, to show skeleton of the content before loading the actual content
*  Component props type are defined below.
*/
const Skeleton = (props) => {

	const renderPlaceholder = (props) => {
		var elements = [];
		for (let i = 0; i < props.count; i++) {
			elements.push(<Placeholder.Line key={i} length={props.sizeValue} />);
		}
		return elements;
	}

	const RenderSkeleton = (props) => {
		switch (props.type) {
			case 'basic':
				return (
					<Placeholder>
						<Placeholder.Header image>
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Header>
						<Placeholder.Paragraph>
							{renderPlaceholder(props)}
						</Placeholder.Paragraph>
					</Placeholder>
				);
			case 'line':
				return (
					<Placeholder>
						{renderPlaceholder(props)}
					</Placeholder>
				);
			case 'size':
				return (
					<Placeholder>
						{renderPlaceholder(props)}
					</Placeholder>
				);
			case 'paragraph':
				return (
					<Placeholder>
						<Placeholder.Paragraph>
							{renderPlaceholder(props)}
						</Placeholder.Paragraph>
						<Placeholder.Paragraph>
							{renderPlaceholder(props)}
						</Placeholder.Paragraph>
					</Placeholder>
				);
			default:
				return (
					<Placeholder style={{ height: 150, width: 150 }}>
						<Placeholder.Image />
					</Placeholder>
				);
		}
	}

	return (
		<React.Fragment>
			<RenderSkeleton {...props} />
		</React.Fragment>
	)
}

Skeleton.propTypes = {
	/**
	* `Type` the type of skelton to be loaded.
	*/
	type: PropTypes.oneOf(['', 'basic', 'line', 'size', 'paragraph']),
	/**
	* Number of block elements count.
	*/
	count: PropTypes.number,
};

Skeleton.defaultProps = {
	type: 'basic',
	count: '',
}

export default Skeleton;