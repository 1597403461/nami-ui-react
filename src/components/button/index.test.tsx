import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps = {
    onClick: jest.fn()
};

const testProps: ButtonProps = {
    block: true,
    btnType: 'light',
    size: 'primary',
    className: 'classsss'
};

const disabled: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
};

const loadingProps: ButtonProps = {
    loading: true,
    loadingText: 'loading',
    onClick: jest.fn()
};

test('button test', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText('Nice');
    expect(element).toBeTruthy();
});

describe('test button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        const buttonElement = element.parentElement;
        expect(element.tagName).toEqual('SPAN');
        expect(buttonElement).toHaveClass('nami-btn');
        buttonElement && fireEvent.click(buttonElement);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it('should render the correct component base on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        const buttonElement = element.parentElement;
        expect(buttonElement).toHaveClass(
            'nami-btn nami-btn-primary nami-btn-light classsss nami-btn-block'
        );
    });
    it('should render the disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disabled}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        const buttonElement = element.parentElement as HTMLButtonElement;
        expect(buttonElement.disabled).toBeTruthy();
        fireEvent.click(buttonElement);
        expect(disabled.onClick).not.toHaveBeenCalled();
    });
    it('should render the correct component when loading set to true', () => {
        const wrapper = render(<Button {...loadingProps}>Nice</Button>);
        const element = wrapper.getByText('loading');
        const preElement = element.previousElementSibling as HTMLSpanElement;
        expect(preElement).toHaveClass('nami-btn-icon');
        const buttonElement = element.parentElement as HTMLButtonElement;
        fireEvent.click(buttonElement);
        expect(loadingProps.onClick).not.toHaveBeenCalled();
    });
});
