import React from 'react';
import { Image } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	value: string, // image src value
// 	size: string, // mini, tiny, small, medium, large, big, huge, masive 
// 	imageType: string, // avatar, bordered, fluid, rounded, circular, centered
// 	style: string
// }

const ImageElement = (props) => (
	<Image 
		src={props.value} 
		alt={props.name}
		size={props.size} 
		style={props.style}
	/>
)

export default ImageElement;