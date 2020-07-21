import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Agreement, { agreementProps } from './Agreement';
import AgreementItem, { baseProps } from './AgreementItem';
import '@testing-library/jest-dom/extend-expect';

const defaultProps: agreementProps = {
    checked: true,
    onChange: jest.fn()
};
const defaultItemProps: baseProps = {
    name: '机构授权协议',
    onClick: jest.fn()
};

describe('test agreement component', () => {
    it('should render the correct default agreement', () => {
        const wrapper = render(
            <Agreement {...defaultProps}>
                <AgreementItem {...defaultItemProps} />
            </Agreement>
        );
        const agreeElement = wrapper.getByText('同意');
        expect(agreeElement).toBeTruthy();
        const element = wrapper.getByText('《机构授权协议》');
        expect(element).toBeTruthy();
        fireEvent.click(element);
        expect(defaultItemProps.onClick).toBeCalledTimes(1);
        const checkedBtn = wrapper.getByTestId('i');
        expect(checkedBtn).toHaveClass(
            'iconfont nami-icon nami-checkbox-icon nami-checkbox-icon-checked'
        );
        fireEvent.click(checkedBtn.previousElementSibling as HTMLElement);
        expect(defaultProps.onChange).toHaveBeenCalled();
    });
});
