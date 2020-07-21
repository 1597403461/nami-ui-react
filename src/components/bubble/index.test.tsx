import React from 'react';
import { render } from '@testing-library/react';
import Bubble from './index';
import '@testing-library/jest-dom/extend-expect';

describe('test bubble component', () => {
    it('should render the correct default bubble', () => {
        const wrapper = render(<Bubble>I am bubble</Bubble>);
        const element = wrapper.getByText('I am bubble');
        expect(element).toBeTruthy();
        expect(element.parentElement).toHaveClass('nami-bubble nami-bubble-up');
    });
});
