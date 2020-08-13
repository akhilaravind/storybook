import React from 'react';
import { List, Image, Button } from 'semantic-ui-react';
import './index.scss';

const CusomList = (props) => {
	const { type, items } = props;
	const renderContent = () => {
		switch (type) {
			case 'icon':
				return (
					<List relaxed>
						{
							items.map((item, index) => {
								return (
									<List.Item key={index}>
										<List.Icon name={item.icon} size='large' verticalAlign='middle' />
										<List.Content>
											<List.Header as='a'>{item.title}</List.Header>
											<List.Description as='a'>{item.description}</List.Description>
										</List.Content>
									</List.Item>
								)
							})
						}
					</List>
				)
			case 'image':
				return (
					<List relaxed='very'>
						{
							items.map((item, index) => {
								return (
									<List.Item>
										<Image avatar src={item.image} />
										<List.Content>
											<List.Header as='a'>{item.title}</List.Header>
											<List.Description>{item.description}</List.Description>
										</List.Content>
									</List.Item>
								)
							})
						}
					</List>
				)
			case 'float':
				return (
					<List divided verticalAlign='middle'>
						{
							items.map((item, index) => {
								return (
									<List.Item>
										<List.Content floated='right'>
											<Button>Add</Button>
										</List.Content>
										<Image avatar src={item.image} />
										<List.Content>{item.title}</List.Content>
									</List.Item>
								)
							})
						}
					</List>
				)
			default:
				return (
					<List>
						{
							items.map((item, index) => {
								return (<List.Item>{item.title}</List.Item>)
							})
						}
					</List>
				)
		}
	}
	return (
		<React.Fragment>
			{renderContent()}
		</React.Fragment>
	)
};

export default CusomList;