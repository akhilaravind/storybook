import React, { useState } from 'react';
import { Popup, Modal, Icon, Button } from 'semantic-ui-react';
import DicomWidget from './DicomWidget';
import './index.scss';

const DicomViewer = (props) => {
	const { attachment, docId } = props;
	const [modalContent, setModalContent] = useState(null);

	const closeModal = () => {
		setModalContent(null);
	}

	const getImagesStack = () => {
		const origin = window.location.origin;
		let urlTemp = '/secure/secureResource/medicaltest/<docId>?dicomImageFileId=0&frame=0'.replace('<docId>', docId);
		let urlTemplate = new URL(urlTemp, origin);
		urlTemplate.searchParams.set('dicomImageFileId', attachment.id);

		let result = [];
		for (let frame = 0; frame < attachment.totalFrames; frame++) {
			urlTemplate.searchParams.set('frame', frame);
			result.push(urlTemplate.toString());
		}

		return {
			imageIds: result,
			currentImageIdIndex: 0
		}
	}

	const openModal = (event, attachment) => {
		let result = (
			<Modal open onClose={closeModal}>
				<Icon name='window close' color='teal' onClick={() => setModalContent(null)} />
				<Modal.Content>
					<DicomWidget dicomFile={attachment} stack={getImagesStack()} />
				</Modal.Content>
			</Modal>
		)
		setModalContent(result);
	}

	return (
		<div className='AttachmentsWidget'>
			<Popup
				content={attachment.fileName}
				trigger={<Button icon='video' onClick={(event) => openModal(event, attachment)} />}
			/>
			{modalContent}
		</div>
	)
}

export default DicomViewer;