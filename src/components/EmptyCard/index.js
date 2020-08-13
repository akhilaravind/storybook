import React from 'react';
import { Card } from 'semantic-ui-react';
import './index.scss';

const EmptyCard = (props) => {
	const { title, message } = props;
	return (
		<Card>
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Card.Description>{message}</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default EmptyCard;