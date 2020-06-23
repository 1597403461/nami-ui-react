import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Alert, { alterProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps = {
    message: '',
    buttonText: '去开启',
    onClick: jest.fn()
};

const closeableProps: alterProps = {
    message: 'render alert component',
    type: 'closeable',
    onClose: jest.fn()
};

const linkProps: alterProps = {
    message: 'render alert component',
    type: 'link',
    linkText: 'test'
};

const buttonProps: alterProps = {
    message: 'render alert component',
    type: 'button',
    linkText: 'test',
    onClick: jest.fn()
};

describe('test alert component', () => {
    it('should render the correct default alert', () => {
        const wrapper = render(<Alert {...defaultProps} />);
        const element = wrapper.getByTestId('alert');
        expect(element).toBeTruthy();
        fireEvent.click(element.parentElement as HTMLElement);
        expect(defaultProps.onClick).toBeCalledTimes(1);
    });
    it('should render the correct default alert base on different props closeable', async () => {
        const wrapper = render(<Alert {...closeableProps} />);
        const element = wrapper.getByTestId('alert');
        expect(element).toBeTruthy();
        expect(element.nextElementSibling).toBeTruthy();
        expect(element.nextElementSibling).toHaveClass('nami-alert-icon');
        fireEvent.click(element.nextElementSibling as HTMLElement);
        expect(closeableProps.onClose).toBeCalledTimes(1);
        await waitFor(() => {
            expect(element).not.toBeInTheDocument();
        });
    });
    it('should render the correct default alert base on different props 2 link', () => {
        const wrapper = render(<Alert {...linkProps} />);
        const element = wrapper.getByTestId('alert');
        expect(element).toBeTruthy();
        expect(element.nextElementSibling).toBeTruthy();
        expect(element.nextElementSibling).toHaveClass('nami-alert-link');
    });
    it('should render the correct default alert base on different props 3 button', () => {
        const wrapper = render(<Alert {...buttonProps} />);
        const element = wrapper.getByTestId('alert');
        expect(element).toBeTruthy();
        expect(element.nextElementSibling).toBeTruthy();
        expect(element.nextElementSibling).toHaveClass('nami-alert-btn');
        expect(element.nextElementSibling).toHaveTextContent('去开启');
        fireEvent.click(element.parentElement as HTMLElement);
        expect(defaultProps.onClick).toBeCalledTimes(1);
    });
});
