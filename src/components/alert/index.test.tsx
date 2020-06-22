import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { alterProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps = {
    message: '',
    buttonText: '去开启'
};

const testProps: alterProps = {
    message: 'render alert component',
    type: 'closeable',
    onClick: jest.fn()
};

describe('test alert component', () => {
    it('should render the correct default alert', () => {
        const wrapper = render(<Alert {...defaultProps} />);
        const element = wrapper.getByTestId('alert');
        expect(element).toBeTruthy();
    });
    it('should render the correct default alert base on different props', () => {
        const wrapper = render(<Alert {...testProps} />);
        const element = wrapper.getByTestId('alert');
        expect(element).toBeTruthy();
        expect(element.nextElementSibling).toBeTruthy();
        expect(element.nextElementSibling).toHaveClass('nami-alert-icon');
        // expect(testProps.onClick).toHaveBeenCalled();
    });
});
