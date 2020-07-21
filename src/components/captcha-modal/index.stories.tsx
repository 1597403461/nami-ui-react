/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, Fragment, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import CaptchaModal from './index';
import Button from '../button/index';
const captchaModal = () => {
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

storiesOf('captcha', module).add('验证码弹框 captcha', captchaModal, {
    info: {
        inline: true,
        header: false,
        source: true,
        propTablesExclude: [Button]
    }
});
