import React, { useRef, useState } from 'react';
import { Responsive, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { variables } from './../../constants';
import SideNav from './../SideNav';
import FooterTab from './../FooterTab';
import './index.scss';

const NavBar = (props) => {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	const setFieldValue = (value) => {
		let visible = !value;
		setVisible(visible);
	}

	const renderNavbar = () => {
		return (
			<div className='pwa-nav'>
				<div
					className='navbar'
					style={{ 'background': props.theme.white, 'color': props.theme.dark }}
					ref={ref}
				>
					<Grid divided='vertically'>
						<Grid.Row columns={2}>
							<Grid.Column className='menu-col-left'>
								<Responsive minWidth={768}>
									<Icon name='bars' onClick={() => setFieldValue(visible)} />
									<span>{variables.APP_NAME}</span>
								</Responsive>
							</Grid.Column>
							<Grid.Column className='menu-col-right text-right'>
								<Responsive minWidth={768}>
									<Dropdown text='User' aria-label='Profile'>
										<Dropdown.Menu>
											<Dropdown.Item>Profile</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Responsive>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		)
	}

	const renderContent = () => {
		return (
			<div>
				<Responsive minWidth={768}>
					<Grid columns={2}>
						<Grid.Column width={visible ? 1 : 3}>
							<SideNav visible={visible} />
						</Grid.Column>
						<Grid.Column width={visible ? 15 : 13}>
							<div className='pwa-container'>{props.children}</div>
						</Grid.Column>
					</Grid>
				</Responsive>
				<Responsive maxWidth={767}>
					<Grid>
						<Grid.Row>
							<Grid.Column width={16}>
								<div className='pwa-container'>{props.children}</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Responsive>
			</div>
		)
	}

	return (
		<React.Fragment>
			<Responsive>
				{renderNavbar()}
				{renderContent()}
				<FooterTab />
			</Responsive>
		</React.Fragment>
	)
}

export default NavBar;