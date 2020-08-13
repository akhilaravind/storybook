

import React from 'react';
import { withKnobs, select, number } from "@storybook/addon-knobs";
import Skeleton from '../../../components/Skeleton/Skeleton';
import 'semantic-ui-css/semantic.min.css';

const sizeOptions = {
    None: '',
    Basic: 'basic',
    Line: 'line',
    Size: 'size',
    Paragraph: 'paragraph',
}
export default {
    title: 'Skeleton',
    parameters: {
        componentSubtitle: 'Skeleton component to show Skeleton before loading the content. '
    },
    component: Skeleton,
    decorators: [withKnobs]
};

export const BasicSkeletons = () => {
    const type = select('Type', sizeOptions, 'basic');
    const count = number('Element Count', 3);

    return <div style={{ 'padding': '30px' }}><Skeleton type={type} count={count} /></div>
}
export const ParagraphSkeletons = () => {
    const type = select('Type', sizeOptions, 'paragraph');
    const count = number('Element Count', 3);

    return <div style={{ 'padding': '30px' }}><Skeleton type={type} count={count} /></div>
}
