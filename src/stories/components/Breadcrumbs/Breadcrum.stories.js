import React from 'react';
import { withKnobs, text, object, boolean } from "@storybook/addon-knobs";
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumbs.js';
import { MemoryRouter } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
    decorators: [withKnobs]
};

const _breadcrumbs = () => {
    const title = text('Title', 'Prescription');
    const haveBack = boolean('Back', false);
    const menus = object('Menu', [
        { 'title': 'home', 'path': '/' },
        { 'title': 'prescriptions', 'path': '/prescription/list' },
        { 'title': 'detail', 'path': '' }
    ]);

    return <Breadcrumb title={title} haveBack={haveBack} menus={menus} />;
}
const BreadCrumbWithBack = () => {
    const title = text('Title', 'Prescription');
    const haveBack = boolean('Back', true);
    const menus = object('Menu', [
        { 'title': 'home', 'path': '/' },
        { 'title': 'prescriptions', 'path': '/prescription/list' },
        { 'title': 'detail', 'path': '' }
    ]);

    return <Breadcrumb title={title} haveBack={haveBack} menus={menus} />;
}
export const Breadcrumbs = (story) => (
    <MemoryRouter>{_breadcrumbs()}</MemoryRouter>
);
export const BreadcrumbsWithBack = (story) => (
    <MemoryRouter><BreadCrumbWithBack /></MemoryRouter>
);