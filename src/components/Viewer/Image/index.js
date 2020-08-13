import React from 'react';
import { Icon, Popup, Modal, Button, Label } from 'semantic-ui-react';
import { ImageViewer } from 'iv-viewer';
import 'iv-viewer/dist/iv-viewer.css';
import './index.scss';

class CustomImageViewer extends React.Component {
	constructor(props) {
		super(props);
		let index = 0;
		if (props.attachments) {
			index = props.attachments.findIndex((att) => att.fileId === props.attachment.fileId);
		}
		this.indexInitial = index;
		this.state = {
			modalContent: null,
			indexActiveImage: index,
			attachments: props.attachments || [props.attachment],
			attachmentActive: props.attachments ? props.attachments[index] : props.attachment,
			zoomOptions: { maxZoom: 200, zoomValue: 50 }
		}
		this.refModalContent = React.createRef();
	}

	handleNavNextImage = (event) => {
		if (this.state.indexActiveImage < (this.state.attachments.length - 1)) {
			const indexNew = this.state.indexActiveImage + 1;
			const attNew = this.state.attachments[indexNew];
			this.setState({
				indexActiveImage: indexNew,
				attachmentActive: attNew
			}, () => { this.clickShowModalHandler() })
			this.viewer.load(attNew.link);
		}
	}

	handleNavPrevImage = (event) => {
		if (this.state.indexActiveImage > 0) {
			const indexNew = this.state.indexActiveImage - 1;
			const attNew = this.state.attachments[indexNew];
			this.setState({
				indexActiveImage: indexNew,
				attachmentActive: attNew
			}, () => { this.clickShowModalHandler() })
			this.viewer.load(attNew.link);
		}
	}

	handleKeyDownNav = (event) => {
		const keyCode = event.keyCode;
		if (keyCode === 37) {
			this.handleNavPrevImage();
		} else if (keyCode === 39) {
			this.handleNavNextImage();
		}
	}

	handleModalClose = () => {
		this.setState({
			modalContent: null,
			attachmentActive: this.props.attachment,
			indexActiveImage: this.indexInitial
		})
	}

	handleModalMounted = () => {
		let attachment = this.props.attachment;
		setTimeout(() => {
			const dom_image = document.querySelector('#image_attached');
			let viewer = new ImageViewer(dom_image, this.state.zoomOptions);
			this.viewer = viewer;
			viewer.load(attachment.link);
			this.refModalContent.current.ref.focus();
		}, 400)
	}

	openWindow = () => {
		window.open(this.props.attachment.link);
	}

	clickShowModalHandler = (event, attachment) => {
		let result = (
			<Modal
				open
				tabIndex='0'
				className='AttachmentImage'
				ref={this.refModalContent}
				onKeyDown={this.handleKeyDownNav}
				onClose={this.handleModalClose}
				onMount={this.handleModalMounted}
			>
				<Modal.Content
					style={{ backgroundColor: '#131010', height: 'inherit', padding: '0 0' }} >
					<div className='controlsTop'>
						<Label as='a' onClick={this.openWindow}><Icon name='download' /></Label>
						<Popup
							content={
								<div>
									<p>
										Use <i className='fa fa-arrow-left' aria-hidden='true' /> arrow keys  to <i className='fa fa-arrow-right' aria-hidden='true' />
                        surf through images.
									</p>
									<p>
										Use <i className='fa fa-arrows-v' aria-hidden='true' /> MouseWheel to <i className='fa fa-search-plus' aria-hidden='true' /> Zoom
									</p>
								</div>
							}
							trigger={<Button icon='help' />}
						/>
						<Button icon='close' onClick={this.handleModalClose} />
					</div>
					<div id='image_attached' src='#' style={{ minWidth: '100%', minHeight: '100%' }} />
					<div className='statusInfo'>
						<Icon name='angle left' onClick={this.handleNavPrevImage} style={{ cursor: 'pointer' }} />
						{this.state.indexActiveImage + 1}/{this.state.attachments.length}
						<Icon name='angle right' onClick={this.handleNavNextImage} style={{ cursor: 'pointer' }} />
						<span className='fileName'>{this.state.attachmentActive.title}</span>
					</div>
				</Modal.Content>
			</Modal>
		)
		this.setState({ modalContent: result })
	}

	render() {
		return (
			<div>
				{
					this.props.trigger ?
						<Button onClick={this.clickShowModalHandler} content={this.props.trigger} />
						:
						<Popup
							content={this.props.attachment.title}
							trigger={<Button icon='image outline' onClick={this.clickShowModalHandler} />}
						/>
				}
				{this.state.modalContent}
			</div>
		)
	}
}

export default CustomImageViewer;