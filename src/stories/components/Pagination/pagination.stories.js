
import React from 'react';
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import CustomPagination from '../../../components/Pagination/Pagination'


import 'semantic-ui-css/semantic.min.css';
export default {
    title: 'Pagination',
    parameters: {
        componentSubtitle: 'Pagination component to show pagination in the application. '
    },
    component: CustomPagination,
    decorators: [withKnobs]
};

export const Pagination = () => {
    const size = text('Size', 'large');
    const activePage = number('Active Page', 3);
    const siblingRange = number('Sibling Range', 5);
    const totalPages = number('Total Pages', 20);

    return <CustomPagination size={size} activePage={activePage} siblingRange={siblingRange} totalPages={totalPages} onPageChange={action('Pagination Change')} />
}
