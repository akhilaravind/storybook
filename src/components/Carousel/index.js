import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

const CustomCarousel = (props) => {
	const { banners } = props;
	return (
		<Carousel>
			{
				banners.map((banner, index) => {
					return (
						<div key={index}>
							<img src={banner.image} alt='' />
							<p className="legend">{banner.label}</p>
						</div>
					)
				})
			}
		</Carousel>
	)
}

export default CustomCarousel;