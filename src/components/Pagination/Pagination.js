import React from 'react';
import { Pagination } from 'semantic-ui-react';
import propTypes from 'prop-types';
import './style.scss';

const CustomPagination = (props) => {
	const { size,
		activePage,
		siblingRange,
		totalPages,
		onPageChange } = props
	return (
		<Pagination
			size={size}
			boundaryRange={0}
			defaultActivePage={activePage}
			siblingRange={siblingRange}
			ellipsisItem={null}
			firstItem={null}
			lastItem={null}
			prevItem={{ content: 'Previous', disabled: (activePage === 1) }}
			nextItem={{ content: 'Next', disabled: (activePage === totalPages) }}
			totalPages={totalPages}
			onPageChange={(e, data) => onPageChange(data.activePage)}
		/>
	)
}

CustomPagination.propTypes = {
	/**
	* Size is the total item size
	*/
	size: propTypes.oneOf(["mini", "tiny", "small", "large", "huge", "massive"]),
	/**
	* Current active page number
	*/
	activePage: propTypes.number,
	/**
	* Size is the total number of pages
	*/
	siblingRange: propTypes.number,
	/**
	* Total Pages
	*/
	totalPages: propTypes.number,
	/**
	* On page change event call back
	*/
	onPageChange: propTypes.func
}

CustomPagination.defaultProps = {
	size: 10,
	activePage: 1,
	siblingRange: 0,
	totalPages: 30,
	onPageChange: '()=>'
}
export default CustomPagination;