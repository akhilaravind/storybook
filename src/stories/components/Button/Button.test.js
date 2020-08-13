import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderStory } from '@storybook/react';

import { BasicButton } from './Button.stories';

it('renders the button in the BasicButton state', () => {
    render(renderStory(BasicButton));
    expect(screen.getByRole('button')).toHaveTextContent('BasicButton');
});