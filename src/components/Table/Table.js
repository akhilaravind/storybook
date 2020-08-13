import React, { useState } from 'react';
import { Table, Dropdown, Checkbox } from 'semantic-ui-react';
import CustomPagination from '../Pagination/Pagination';
import propTypes from 'prop-types';
import './Table.scss';

const CustomTable = (props) => {
	// const headers = props.headers;
	const rows = props.rows;
	const options = [
		{ key: 10, text: 10, value: 10 },
		{ key: 25, text: 25, value: 25 },
		{ key: 50, text: 50, value: 50 },
		{ key: 100, text: 100, value: 100 }
	];
	const [value, setValue] = useState(10);
	const [activePage, setActivePage] = useState(1);

	const getKeys = () => (Object.keys(rows[0]));

	// const handleChange = () => {
	// 	console.log('on change');
	// }

	const getTableHeader = () => {
		var keys = getKeys();
		return keys.map((key, index) => {
			return (
				<Table.HeaderCell key={key}>
					<Checkbox />&nbsp;
					{/* <input
						className='checkbox-element'
						type="checkbox"
						id={index}
						name={index}
						value={index}
						// checked={props.value.includes(option.value)}
						onChange={handleChange}
					/> */}
					{key.toUpperCase()}
				</Table.HeaderCell>
			)
		})
	}

	const getTableRows = () => {
		var items = rows;
		var keys = getKeys();
		return items.map((row, index) => {
			return (
				<Table.Row key={index}>
					{
						keys.map((key, index) => <Table.Cell key={row[key]}>{row[key]}</Table.Cell>)
					}
				</Table.Row>
			)
		})
	}

	const handlePaginationChange = (activePage) => {
		setActivePage(activePage);
	}

	return (
		<React.Fragment>
			<h2>{props.title}</h2>
			<Table basic='very'>
				<Table.Header>
					<Table.Row>{getTableHeader()}</Table.Row>
				</Table.Header>
				<Table.Body>
					{getTableRows()}
				</Table.Body>
			</Table>
			<Dropdown
				selection
				value={value}
				options={options}
				onChange={(e, data) => setValue(data.value)}
			/>
			<CustomPagination
				size='small'
				siblingRange={1}
				activePage={activePage}
				totalPages={10}
				onPageChange={handlePaginationChange}
			/>
		</React.Fragment>
	)
}

CustomTable.propTypes = {
	/**
	* `Type` the type of skelton to be loaded.
	*/
	type: PropTypes.oneOf(['', 'basic', 'line', 'size', 'paragraph']),
	/**
	* Number of block elements count.
	*/
	count: PropTypes.number,
};

CustomTable.defaultProps = {
	type: 'basic',
	count: '',
}

export default CustomTable;