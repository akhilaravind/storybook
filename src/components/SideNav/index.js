import React from 'react'
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';
import './index.scss';

const SideNav = (props) => {
	const menus = [
		{ title: 'Home', icon: 'home', page: '/', view: true },
		// { title: 'Providers', icon: 'user', page: '/provider/list', view: true },
		{ title: 'Healthcare Provider', icon: 'user doctor', page: '/healthcare-provider/list', view: true },
		{ title: 'Health Profile', icon: 'user outline', page: '/health-profile', view: true },
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
	return (
		<div className="sidenav-container">
			<div className='black-opaque'></div>
			<List className={props.visible ? 'min-list' : ''}>
				{
					menus.map((menu, index) => {
						return (
							<div key={index}>
								{menu.view &&
									<List.Item key={index}>
										<Link to={menu.page}>
											<Icon name={menu.icon} />
											{
												!props.visible &&
												<span>{menu.title}</span>
											}
										</Link>
									</List.Item>
								}
							</div>
						)
					})
				}
			</List>
		</div>
	)
}

export default SideNav