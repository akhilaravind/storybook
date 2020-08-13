import React from 'react';
import { Player } from 'video-react';
import './index.scss';

const VideoViewer = (props) => {
	return (
		<Player
			playsInline
			poster={props.src}
			src={props.src}
		/>
	)
}

export default VideoViewer;