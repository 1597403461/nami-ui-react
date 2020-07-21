import React from 'react';
import { render } from '@testing-library/react';
import CardContainer, { cardProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const grayProps: cardProps = {
    gradientColor: 'gray'
};

describe('test CardContainer component', () => {
    it('should render the gray CardContainer component', () => {
        const wrapper = render(<CardContainer>I am card container</CardContainer>);
        const element = wrapper.getByText('I am card container');
        expect(element).toBeTruthy();
        expect(element.parentElement).toHaveClass('nami-card-container nami-card-container-white');
    });
    it('should render the white CardContainer component', () => {
        const wrapper = render(<CardContainer {...grayProps}>I am card container</CardContainer>);
        const element = wrapper.getByText('I am card container');
        expect(element).toBeTruthy();
        expect(element.parentElement).toHaveClass('nami-card-container nami-card-container-gray');
    });
});
