import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Icon, Button, Popup, List } from 'semantic-ui-react';
import './index.scss';

const FooterTab = () => {
	const menus = [
		{ title: 'Home', icon: 'home', page: '/', view: true },
		{ title: 'Healthcare Provider', icon: 'user doctor', page: '/healthcare-provider/list', view: true },
		{ title: 'Health Profile', icon: 'user outline', page: '/health-profile/list', view: true },
		{ title: 'Health Trackers', icon: 'chart bar outline', page: '/health-tracker/list', view: true },
		{ title: 'Medical Reports', icon: 'chart bar outline', page: '/medical-report/list', view: true },
		{ title: 'Health Journal', icon: 'user outline', page: '/health-journal/list', view: true },
		{ title: 'Appointments', icon: 'calendar outline', page: '/appointment/list/all', view: true },
		{ title: 'Video', icon: 'video', page: '/appointment/list/video', view: true },
		{ title: 'Text consultation', icon: 'chat', page: '/appointment/list/text', view: true },
		{ title: 'Monitoring', icon: 'tv', page: '/monitoring/list', view: true },
		{ title: 'Consultation Notes', icon: 'sticky note outline', page: '/consultation-note/list', view: true },
		{ title: 'Prescriptions', icon: 'clipboard outline', page: '/prescription/list', view: true },
		{ title: 'Payments', icon: 'payment', page: '/payment/list', view: true },
		{ title: 'Blogs', icon: 'newspaper outline', page: '/blog/list', view: true },
		{ title: 'Settings', icon: 'cog', page: '/settings', view: true }
	];

	const tabletMenus = [];
	const tabletMoreMenus = [];
	const mobileMenus = [];
	const mobileMoreMenus = [];
	for (let i = 0; i < menus.length; i++) {
		if (i < 4) {
			tabletMenus.push(menus[i]);
		}

		if (i > 3) {
			tabletMoreMenus.push(menus[i]);
		}

		if (i < 3) {
			mobileMenus.push(menus[i]);
		}

		if (i > 2) {
			mobileMoreMenus.push(menus[i]);
		}
	}

	const setMenus = (menus) => {
		const buttonGroups = menus.map((menu, index) =>
			<Button color='red' key={index}>
				<Link to={{ pathname: menu.page }}>
					<Icon name={menu.icon} /> {menu.title}
				</Link>
			</Button>
		);
		return buttonGroups
	}

	const setMoreMenus = (menus) => {
		const listItems = menus.map((menu, index) =>
			<List.Item key={index}>
				<Link to={{ pathname: menu.page }}>{menu.title}</Link>
			</List.Item>
		);
		return listItems
	}

	const setFooter = (menus, moreMenus) => {
		return (
			<Button.Group attached='bottom'>
				{setMenus(menus)}
				<Button color='red'>
					<Popup
						flowing
						on={['click']}
						position='top right'
						content={<List>{setMoreMenus(moreMenus)}</List>}
						trigger={<div><Icon name='ellipsis vertical' />More</div>}
					/>
				</Button>
			</Button.Group>
		)
	}

	return (
		<div className='pwa-footer'>
			<Responsive minWidth={480} maxWidth={767}>{setFooter(tabletMenus, tabletMoreMenus)}</Responsive>
			<Responsive maxWidth={479}>{setFooter(mobileMenus, mobileMoreMenus)}</Responsive>
		</div>
	)
}

export default FooterTab;