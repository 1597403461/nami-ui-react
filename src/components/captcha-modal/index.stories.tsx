import React, { useState, Fragment, useRef } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { actions } from '@storybook/addon-actions';

import CaptchaModal, { captchaModalProps } from './index';
import Button from '../button/index';

export default {
    title: 'Component/CaptchaModal',
    component: CaptchaModal
};

const Template: Story<captchaModalProps> = () => {
    const captchaModal = useRef<any>();
    const eventsFromObject = actions({
        onChange: 'change input',
        onCaptchaTipsClick: 'click tips'
    });
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
                phoneNumber='18332556608'
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
                {...eventsFromObject}
            />
        </Fragment>
    );
};

export const Base = Template.bind({});

Base.parameters = {
    controls: { hideNoControlsWarning: true }
};
