
import React from 'react';
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import CustomRating from '../../../components/Rating/Rating';
import { SizeOptions } from '../../Options';

const typeOptions = {
    None: '',
    Clearable: 'clear',
    Disabled: 'disable'
}
import 'semantic-ui-css/semantic.min.css';
export default {
    title: 'Rating',
    parameters: {
        componentSubtitle: 'Rating component to show star rating in the application. '
    },
    component: CustomRating,
    decorators: [withKnobs]
};

export const BasicRating = () => {
    const type = select('Type', typeOptions, '');
    const icon = text('Icon', 'star');
    const size = select('Size', SizeOptions, 'small');
    const max = number('Max Rating', 5);
    const defaultRating = number('Default', 3);

    return <CustomRating type={type} max={max} icon={icon} size={size} default={defaultRating} onRate={action('Rating Change')} />
}
export const StarRating = () => {
    const type = select('Type', typeOptions, 'clear');
    const icon = text('Icon', 'star');
    const size = select('Size', SizeOptions, 'small');
    const max = number('Max Rating', 5);
    const defaultRating = number('Default', 3);

    return <CustomRating type={type} max={max} icon={icon} size={size} default={defaultRating} onRate={action('Rating Change')} />
}

export const HeartRating = () => {
    const type = select('Type', typeOptions, 'disable');
    const icon = text('Icon', 'heart');
    const size = select('Size', SizeOptions, 'small');
    const max = number('Max Rating', 5);
    const defaultRating = number('Default', 3);

    return <CustomRating type={type} max={max} icon={icon} size={size} default={defaultRating} onRate={action('Rating Change')} />
}
