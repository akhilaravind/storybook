import React, { Component } from 'react';
import Hammer from 'hammerjs';
import { Button, Icon, Loader } from 'semantic-ui-react';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneTools from 'cornerstone-tools';
import * as cornerstoneMath from 'cornerstone-math';
import * as cornerstoneWebImageLoader from 'cornerstone-web-image-loader';

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;

const divStyle = {
	width: '512px',
	height: '512px',
	position: 'relative',
	color: 'white',
	border: '1px solid black'
}

const bottomLeftStyle = {
	bottom: '5px',
	left: '5px',
	position: 'absolute',
	color: 'white'
}

type DicomViewerPropsType = {
	stack: Object
}

type DicomViewerStateType = {
	stack: Object,
	viewport: string,
	imageId: string
}

class DicomWidget extends Component<DicomViewerPropsType, DicomViewerStateType> {
	constructor(props: Object) {
		super(props);
		this.state = {
			stack: props.stack,
			viewport: cornerstone.getDefaultViewport(null, undefined),
			imageId: props.stack.imageIds[0],
			loadProgress: {
				imageIds: props.stack.imageIds.slice(0),
				total: props.stack.imageIds.length,
				remaining: props.stack.imageIds.length,
				percentLoaded: 0
			}
		}
	}

	componentDidMount() {
		this.setData();
	}

	componentDidUpdate(prevProps, prevState) {
		return this.state.loadProgress !== prevState.loadProgress;
	}

	componentWillUnmount() {
		cornerstone.events.removeEventListener('cornerstoneimageloaded', this.onImageLoaded);
		const element = this.element;
		element.removeEventListener(
			'cornerstoneimagerendered',
			this.onImageRendered
		)
		element.removeEventListener('cornerstonenewimage', this.onNewImage);
		window.removeEventListener('resize', this.onWindowResize);
		cornerstone.disable(element);
	}

	setData() {
		const element = this.element;
		cornerstone.enable(element);
		cornerstone.loadImage(this.state.imageId).then(image => {
			const stack = this.props.stack;
			cornerstone.displayImage(element, image);
			cornerstoneTools.addStackStateManager(element, ['stack', 'playClip']);
			cornerstoneTools.addToolState(element, 'stack', stack);
			cornerstoneTools.mouseInput.enable(element);
			cornerstoneTools.mouseWheelInput.enable(element);
			cornerstoneTools.pan.activate(element, 2);
			cornerstoneTools.zoom.activate(element, 4);
			cornerstoneTools.wwwc.activate(element, 1);
			cornerstoneTools.stackScrollWheel.activate(element);
			cornerstoneTools.scrollIndicator.enable(element);
			cornerstoneTools.touchInput.enable(element);
			cornerstoneTools.panTouchDrag.activate(element);
			cornerstoneTools.zoomTouchPinch.activate(element);
			cornerstoneTools.stackPrefetch.enable(element, 3);
			cornerstoneTools.wwwcTouchDrag.activate(element);

			element.addEventListener('cornerstoneImageRendered', this.onImageRendered);
		}).catch(err => {
		})
		cornerstone.events.addEventListener('cornerstoneimageloaded', this.onImageLoaded);
	}

	onWindowResize() {
		cornerstone.resize(this.element)
	}

	onImageLoaded = (event) => {
		var eventData = event.detail;
		var imageId = eventData.image.imageId;
		var loadProgress = this.state.loadProgress;
		var imageIds = loadProgress['imageIds'];

		for (var i = imageIds.length - 1; i >= 0; i--) {
			if (imageIds[i] === imageId) {
				imageIds.splice(i, 1)
			}
		}

		loadProgress['remaining'] = imageIds.length;
		loadProgress['percentLoaded'] = parseInt(100 - loadProgress['remaining'] / loadProgress['total'] * 100, 10);
		this.setState({ loadProgress: loadProgress });
	}

	onImageRendered = () => {
		const viewport = cornerstone.getViewport(this.element);
		this.setState({ viewport });
	}

	onNewImage() {
		const enabledElement = cornerstone.getEnabledElement(this.element);
		this.setState({ imageId: enabledElement.image.imageId });
	}

	onPlay = () => {
		cornerstoneTools.playClip(this.element, 3);
	}

	onStop = () => {
		cornerstoneTools.stopClip(this.element);
	}

	render() {
		return (
			<div
				className='viewportElement'
				style={divStyle}
				ref={input => {
					this.element = input
				}}>
				{this.state.loadProgress.percentLoaded !== 100 ? <Loader active content={`Please wait...${this.state.loadProgress.percentLoaded} %`} /> : ''}
				<canvas className='cornerstone-canvas' />
				<div style={bottomLeftStyle}>
					<Button icon onClick={this.onPlay}><Icon name='play' /></Button>
					<Button icon onClick={this.onStop}><Icon name='stop' /></Button>
				</div>
			</div>
		)
	}
}

export default DicomWidget;
