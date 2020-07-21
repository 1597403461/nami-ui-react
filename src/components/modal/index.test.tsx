import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal, { modalProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps: modalProps = {
    visible: true,
    onOk: jest.fn(),
    onCancel: jest.fn()
};
const oneBtnProps: modalProps = {
    visible: true,
    title: 'come on',
    onOk: jest.fn(),
    showCancelButton: false,
    showCloseButton: true,
    onClose: jest.fn(),
    maskClosable: true
};

describe('test modal component', () => {
    it('should render the correct default modal', () => {
        const wrapper = render(<Modal {...defaultProps}>It is a modal</Modal>);
        const element = wrapper.getByText('It is a modal');
        expect(element).toBeTruthy();
        expect(element.previousElementSibling).toBeNull();
        expect(element.nextElementSibling).toHaveClass('nami-modal-footer');
        expect(element.nextElementSibling).not.toHaveClass('nami-modal-footer-center');
        const okBtn = wrapper.getByText('确定');
        fireEvent.click(okBtn);
        expect(defaultProps.onOk).toHaveBeenCalled();
        const cancelBtn = wrapper.getByText('取消');
        fireEvent.click(cancelBtn);
        expect(defaultProps.onCancel).toHaveBeenCalled();
    });

    it('should only render ok button modal', () => {
        const wrapper = render(<Modal {...oneBtnProps}>It is a one btn modal</Modal>);
        const element = wrapper.getByText('It is a one btn modal');
        expect(element).toBeTruthy();
        expect(element.previousElementSibling).toHaveClass('nami-modal-header');
        expect(element.nextElementSibling).toHaveClass(
            'nami-modal-footer nami-modal-footer-center'
        );
        const okBtn = wrapper.getByText('确定');
        fireEvent.click(okBtn);
        expect(oneBtnProps.onOk).toHaveBeenCalled();
        expect(element.nextElementSibling?.nextElementSibling).toHaveClass('nami-modal-close-btn');
        fireEvent.click(element.nextElementSibling?.nextElementSibling as HTMLElement);
        expect(oneBtnProps.onClose).toHaveBeenCalled();
        const maskElement = wrapper.getByTestId('mask');
        fireEvent.click(maskElement);
        expect(oneBtnProps.onClose).toHaveBeenCalled();
    });
});
