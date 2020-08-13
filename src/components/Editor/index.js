import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import './index.scss';

// const editorConfiguration  = {
// 	plugins: [Essentials, Bold, Italic, Paragraph],
// 	toolbar: ['bold', 'italic']
// };

const Editor = (props) => {
	const { data, onChange, onBlur, onFocus } = props;
	return (
		<CKEditor
			editor={ClassicEditor}
			data={data}
			// config={editorConfiguration}
			onInit={editor => {
				// You can store the "editor" and use when it is needed.
				console.log('Editor is ready to use!', editor);
			}}
			onChange={(event, editor) => {
				const data = editor.getData();
				console.log({ event, editor, data });
				onChange(event, editor, data);
			}}
			onBlur={(event, editor) => {
				console.log('Blur.', editor);
				onBlur(event, editor);
			}}
			onFocus={(event, editor) => {
				console.log('Focus.', editor);
				onFocus(event, editor);
			}}
		/>
	)
}

export default Editor;