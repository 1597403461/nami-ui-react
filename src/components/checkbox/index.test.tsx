import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox, { baseProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps: baseProps = {
    onChange: jest.fn(),
    checked: true
};
const disabledProps: baseProps = {
    onChange: jest.fn(),
    disabled: true
};

describe('test Checkbox component', () => {
    it('should render the Checkbox component', () => {
        const wrapper = render(<Checkbox {...defaultProps}>同意</Checkbox>);
        const checkedBtn = wrapper.getByTestId('i');
        expect(checkedBtn).toHaveClass(
            'iconfont nami-icon nami-checkbox-icon nami-checkbox-icon-checked'
        );
        expect(checkedBtn.nextElementSibling).toBeTruthy();
        const input = checkedBtn.previousElementSibling as HTMLElement;
        expect(input).toBeChecked();
        fireEvent.click(input);
        expect(defaultProps.onChange).toHaveBeenCalled();
    });
    it('should render the disabled Checkbox component', () => {
        const wrapper = render(<Checkbox {...disabledProps}>同意</Checkbox>);
        const checkedBtn = wrapper.getByTestId('i');
        expect(checkedBtn).not.toHaveClass('nami-checkbox-icon-checked');
        expect(checkedBtn.nextElementSibling).toBeTruthy();
        const input = checkedBtn.previousElementSibling as HTMLElement;
        expect(input).not.toBeChecked();
        expect(input).toBeDisabled();
        expect(input.parentElement).toHaveClass('nami-checkbox nami-checkbox-disabled');
    });
});
