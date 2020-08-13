import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Segment, Grid, Breadcrumb, Header, Popup, List, Icon } from 'semantic-ui-react';
// import { i18n } from './../../utils';
import './Breadcrumbs.scss';
import PropTypes from 'prop-types';

/**
*	Custom Breadcrumb component, to show breadcrumbs throughout the application
*  Component props type are defined below.
*/

const Breadcrumbs = (props) => {
	return (
		<React.Fragment>
			<Responsive minWidth={768}>
				<Segment className='breadcrumbs-segment'>
					<Grid stackable>
						<Grid.Row>
							<Grid.Column width='16'>
								<h2>{props.title}</h2>
								<Breadcrumb>
									{
										props.menus &&
										props.menus.length > 0 &&
										props.menus.map((menu, index) => {
											return (
												<React.Fragment key={index}>
													<Breadcrumb.Section>
														{
															menu.path !== '' ?
																<Link to={{ pathname: menu.path }}>{menu.title}</Link>
																:
																<span>{menu.title}</span>
														}
													</Breadcrumb.Section>
													{
														index !== props.menus.length - 1 &&
														<Breadcrumb.Divider />
													}
												</React.Fragment>
											)
										})
									}
								</Breadcrumb>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Responsive>
			<Responsive maxWidth={767}>
				<Grid divided='vertically' className='page-nav-container'>
					<Grid.Row columns={2}>
						<Grid.Column width='14'>
							{
								props.haveBack ?
									<Header as='h2'>
										<Link to={{ pathname: `/` }}>
											<Icon name='chevron left' />
										</Link>
										<Header.Content>{props.title}</Header.Content>
									</Header>
									:
									<img src='/assets/pwa-logo.png' alt='logo' />
							}
						</Grid.Column>
						<Grid.Column width='2'>
							<Popup
								flowing
								on={['click']}
								position='bottom right'
								trigger={<Icon name='ellipsis vertical' />}
							>
								<List>
									<List.Item>Add new</List.Item>
									<List.Item>Search</List.Item>
									<List.Item>Filters</List.Item>
								</List>
							</Popup>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Responsive>
		</React.Fragment>
	)
}


Breadcrumbs.propTypes = {
	/**
	* Title for the bradcrumb, the same is displayed in the mobile menu
	*/
	title: PropTypes.string,
	/**
	* To toggle back arrow on the mobile view
	*/
	haveBack: PropTypes.oneOf([true, false]),
	/**
	* Array of titles and path to be displayed on the breadcrumb
	* Should be in the format  {"title": "home", "path": "/"}
	*/
	menu: PropTypes.array,

};

Breadcrumbs.defaultProps = {
	title: 'Home',
	haveBack: true,
	menu: []
}

export default Breadcrumbs;