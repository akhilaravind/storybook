import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(withA11y);
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});