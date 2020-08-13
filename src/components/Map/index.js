// https://tomchentw.github.io/react-google-maps/
import React from 'react';
// import { GoogleMap, Marker } from 'react-google-maps';
import './index.scss';

const CustomMap = (props) => {
	return (
		<div>
			google map component
			{/* <GoogleMap
				defaultZoom={props.zoom}
				defaultCenter={{ lat: props.latitude, lng: props.longitude }}
			>
				{props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
			</GoogleMap> */}
		</div>
	)
}

export default CustomMap;