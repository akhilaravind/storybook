// https://www.npmjs.com/package/react-folder-tree/v/2.11.1
import React from 'react';
import FolderTree from 'react-folder-tree';
import './index.scss';

const TreeNode = (props) => {
	return (
		<div className='tree-node'>
			<FolderTree data={props.json} />
		</div>
	)
};

export default TreeNode;