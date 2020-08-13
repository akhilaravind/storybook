import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import './Card.scss';

const CustomCard = (props) => {
	const { card, type } = props;
	const RenderCard = () => {
		switch (type) {
			case 'profile':
				return (
					<Card fluid>
						<Card.Content>
							<Image
								floated='left'
								size='mini'
								src={card.image}
							/>
							<Card.Header>{card.name}</Card.Header>
							<Card.Meta>{card.email}</Card.Meta>
							<Card.Meta>{card.phone}</Card.Meta>
							<Card.Meta>
								<p>Config: {card.utils?.config}</p>
								<p>i18n: {card.utils?.i18n}</p>
								<p>helper: {card.utils?.helper}</p>
							</Card.Meta>
						</Card.Content>
					</Card>
				);
			default:
				return (
					<Card className='custom-card'>
						<Icon name={card.icon} />
						<Card.Content>
							<Card.Header>{card.title}</Card.Header>
						</Card.Content>
					</Card>
				);
		}
	}

	return (
		<React.Fragment>
			<RenderCard />
		</React.Fragment>
	)
}

export default CustomCard;