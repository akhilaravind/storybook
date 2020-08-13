// import React from 'react';
// // import { Document, Page } from 'react-pdf';
// // import 'react-pdf/dist/Page/AnnotationLayer.css';

// const PdfViewer = (props) => {
// 	// const [activePage, setActivePage] = useState(null);
// 	// const [pageNumber, setPageNumber] = useState(1);

// 	// function onDocumentLoadSuccess({ activePage }) {
// 	// 	setActivePage(activePage);
// 	// }

// 	return (
// 		// <div>
// 		// 	<Document
// 		// 		file='http://www.africau.edu/images/default/sample.pdf'
// 		// 		onLoadSuccess={onDocumentLoadSuccess}
// 		// 	>
// 		// 		<Page pageNumber={pageNumber} />
// 		// 	</Document>
// 		// 	<p>Page {pageNumber} of {activePage}</p>
// 		// </div>
// 		<div>PDF Viewer</div>
// 	);
// }

// export default PdfViewer;

import React, { useState } from 'react';
import { Popup, Modal, Icon, Button, Label } from 'semantic-ui-react';
import './index.scss';

const PdfViewer = (props) => {

	const { attachment, trigger } = props;
	const [modalContent, setModalContent] = useState(null);

	const closeModal = () => {
		setModalContent(null);
	}

	const openWindow = () => {
		window.open(attachment.link);
	}

	const openModal = () => {
		let result = (
			<Modal open={true} onClose={closeModal}>
				<Icon name='times' onClick={closeModal} />
				<Modal.Content style={{ backgroundColor: '#131010', height: 'calc(100vh - 8%)', padding: '0 0' }}>
					<object data={attachment.link} style={{ width: '100%', height: '100%' }} >
						Can't open PDF.
						<Label as='a' onClick={openWindow}>Click to open in browser</Label>
					</object>
				</Modal.Content>
			</Modal>
		)
		setModalContent(result);
	}

	return (
		<React.Fragment>
			{
				trigger ?
					<Button onClick={openModal} content={trigger} />
					:
					<Popup
						content={attachment.fileName}
						trigger={<Button icon='file pdf outline' onClick={openModal} />}
					/>
			}
			{modalContent}
		</React.Fragment>
	)
}

export default PdfViewer;