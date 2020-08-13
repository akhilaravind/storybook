import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import CustomButton from '../../../components/Button/Button';
import { SizeOptions } from '../../Options';
import 'semantic-ui-css/semantic.min.css';
export default {
    title: 'Button',
    parameters: {
        componentSubtitle: 'Button component to show Button in the application. '
    },
    component: CustomButton,
    decorators: [withKnobs]
};
const defaultValue = '';
export const BasicButton = () => {
    const type = text('Type', '');
    const size = select('Size', SizeOptions, defaultValue);
    const label = text('Label', 'Button');
    const icon = text('Icon', 'home');
    const color = text('Color', 'purple');

    return <CustomButton type={type} label={label} icon={icon} size={size} color={color} />
}

export const ButtonWithIcon = () => {
    const type = text('Type', 'label');
    const label = text('Label', 'Button');
    const icon = text('Icon', 'home');
    const size = select('Size', SizeOptions, defaultValue);
    const color = text('Color', 'purple');

    return <CustomButton type={type} label={label} icon={icon} size={size} color={color} />
}

export const ButtonVeryingSize = () => {
    const type = text('Type', 'size');
    const label = text('Label', 'Button');
    const icon = text('Icon', 'home');
    const size = select('Size', SizeOptions, 'massive');
    const color = text('Color', 'purple');

    return <CustomButton type={type} label={label} icon={'heart'} size={size} color={color} />
}

