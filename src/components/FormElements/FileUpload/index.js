import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Modal, Popup, Button, Icon } from 'semantic-ui-react';
import { confirmAlert } from 'react-confirm-alert';
import ErrorMessage from './../../ErrorMessage';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './index.scss';

const FileUpload = (props) => {
	const [files, setFiles] = useState([]);
	const [state, openFile] = useState({ isOpen: false, file: [] });
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		disabled: props.disabled,
		minSize: props.minSize,
		// maxSize: props.maxSize,
		multiple: props.multiple,
		noDrag: props.noDrag,
		onDrop: acceptedFiles => {
			let newFiles = files;
			newFiles = acceptedFiles.concat(files)
			setFiles(newFiles.map(file =>
				Object.assign(file, {
					preview: URL.createObjectURL(file)
				})
			));
		},
		onDropAccepted: files => {
			props.handleChange(props.id, files)
		},
		onFileDialogCancel: () => {
			alert('File choose cancelled')
		},
		onDropRejected: (file) => {
			alert('Drop rejected')
		}
	});

	const deleteFile = (file) => {
		confirmAlert({
			title: 'Confirm to delete',
			message: 'Are your sure you want to delete this file?',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						files.splice(files.indexOf(file), 1)
						setFiles(files.map(file =>
							Object.assign(file, {
								preview: URL.createObjectURL(file)
							})
						));
					}
				},
				{
					label: 'No',
					onClick: () => { console.log('Yo clicked no') }
				}
			]
		});
	}

	const thumbs = files.map((file, index) => (
		<div className='image-container' key={index}>
			<div className='inner'>
				<Icon bordered color='red' name='trash' className='delete-icon' onClick={() => deleteFile(file)} />
				<Icon bordered color='teal' name='eye' className='preview-icon' onClick={() => openFile({ isOpen: true, file: file })} />
				<img src={file.preview} onClick={() => openFile({ isOpen: true, file: file })} alt='' />
			</div>
		</div>
	));

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

	return (
		<section className="dropzone-container">
			{
				props.label &&
				<label>
					<span>{props.label}</span>&nbsp;
					{
						props.helpText && props.helpText.content &&
						<Popup
							inverted
							size='small'
							position='top center'
							content={props.helpText.content}
							trigger={<Icon name={props.helpText.icon} size='tiny' circular />}
						/>
					}
				</label>
			}
			<div {...getRootProps({ className: 'dropzone' })}>
				<img src='download.svg' alt='' />
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			{
				files.length > 0 &&
				<aside className='images-container'>
					{thumbs}
					<Modal size='large' open={state.isOpen} onClose={() => openFile({ isOpen: false, file: [] })}>
						<Modal.Header>Preview</Modal.Header>
						<Modal.Content>
							<img src={state.file.preview} className='preview-image' alt='' />
						</Modal.Content>
						<Modal.Actions>
							<Button onClick={() => openFile({ isOpen: false, file: [] })}>Close Modal</Button>
						</Modal.Actions>
					</Modal>
				</aside>
			}
			<ErrorMessage error={props.error} />
		</section>
	);
}

export default FileUpload;