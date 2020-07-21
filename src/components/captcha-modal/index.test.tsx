import React, { useRef, useState, Fragment } from 'react';
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import CaptchaModal, { captchaModalProps } from './index';
import Button from '../button';
import '@testing-library/jest-dom/extend-expect';

const captchaProps: captchaModalProps = {
    onCaptchaTipsClick: jest.fn(),
    onChange: jest.fn(),
    phoneNumber: '18332556608'
};

const CaptchaModalTest = () => {
    const captchaModal = useRef<any>();
    const [visible, setVisible] = useState<boolean>(false);
    const [captchaModalButtonLoading, setcaptchaModalButtonLoading] = useState(false);
    return (
        <Fragment>
            <Button
                btnType='primary'
                onClick={() => {
                    setVisible(true);
                    captchaModal.current && captchaModal.current.countDown(10);
                }}
            >
                please click me
            </Button>
            <CaptchaModal
                ref={captchaModal}
                title='验证手机号'
                captchaTipsShow={true}
                visible={visible}
                confirmLoading={captchaModalButtonLoading}
                onResend={() => {
                    captchaModal.current.clearCaptchaValue();
                    captchaModal.current.countDown(10);
                }}
                onCancel={() => {
                    setVisible(false);
                    setcaptchaModalButtonLoading(false);
                }}
                onOk={() => {
                    setcaptchaModalButtonLoading(true);
                }}
                {...captchaProps}
            />
        </Fragment>
    );
};

describe('test captchaModal component', () => {
    it('should render correct captchaModal', async () => {
        const { getByTestId, getByText, queryByTestId } = render(<CaptchaModalTest />);
        const btnelement = getByText('please click me');
        const preModalElement = queryByTestId('modal-main');
        expect(preModalElement).not.toBeInTheDocument();
        // 点击按钮渲染弹款
        fireEvent.click(btnelement);
        const modalElement = getByTestId('modal-main');
        const input = getByTestId('input');
        const okBtn = getByText('确定').parentElement as HTMLButtonElement;
        const cancelBtn = getByText('取消').parentElement as HTMLButtonElement;
        expect(modalElement).toBeInTheDocument();
        expect(getByTestId('captcha-main')).toBeInTheDocument();
        expect(getByText('验证手机号')).toBeTruthy();
        expect(getByText('18332556608')).toBeTruthy();
        expect(okBtn).toBeTruthy();
        expect(okBtn).toBeDisabled();
        expect(cancelBtn).toBeTruthy();
        expect(getByText('收不到验证码？')).toBeTruthy();
        // 点击收不到验证码
        fireEvent.click(getByText('收不到验证码？'));
        expect(captchaProps.onCaptchaTipsClick).toBeCalledTimes(1);
        // 改变input值为3位数
        fireEvent.change(input, { target: { value: '123' } });
        expect(captchaProps.onChange).toBeCalledTimes(1);
        // 确定按钮仍然不可点击
        expect(okBtn).toBeDisabled();
        // 改变input值为3位数以上
        fireEvent.change(input, { target: { value: '1234' } });
        // 确定按钮可以点击
        expect(okBtn).not.toBeDisabled();
        // 点击确定按钮
        fireEvent.click(okBtn);
        // 点击确定按钮，状态改变为提交中
        expect(okBtn.firstElementChild).toHaveClass('nami-btn-icon');
        // 确定文案为空
        expect(okBtn.lastElementChild).toBeEmptyDOMElement();
        // 确定按钮的状态改变为不可点击
        expect(okBtn).toBeDisabled();
        const resendBtn = getByTestId('resendBtn');
        // 点击重新发送验证码
        fireEvent.click(resendBtn);
        // 重新发送验证码禁用
        expect(resendBtn).toBeDisabled();
        // input清空
        expect(input).toBeEmptyDOMElement();
        // 确定按钮不可点击
        expect(okBtn).toBeDisabled();
        fireEvent.click(cancelBtn);
        // 重新发送验证码禁用
        expect(resendBtn).toBeDisabled();
        // input清空
        expect(input).toBeEmptyDOMElement();
        await waitForElementToBeRemoved(() => getByTestId('modal-main'));
    });
});
