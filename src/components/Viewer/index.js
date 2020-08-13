import React from 'react';
import CustomImageViewer from './Image';
import VideoViewer from './Video';
import DicomViewer from './Dicom';
import PdfViewer from './Pdf';
import InvoiceViewer from './Invoice';
import './index.scss';

const Viewer = (props) => {
	const renderViewer = (props) => {
		switch (props.type) {
			case 'image':
				return <CustomImageViewer src={props.src} />
			case 'video':
				return <VideoViewer src={props.src} />
			case 'dicom':
				return <DicomViewer />
			case 'pdf':
				return <PdfViewer src={props.src} />
			default:
				return <InvoiceViewer />
		}
	}

	return (
		<React.Fragment>
			{renderViewer(props)}
		</React.Fragment>
	)
}

export default Viewer;