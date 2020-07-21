import React, {
    ReactNode,
    ChangeEvent,
    FC,
    useState,
    useRef,
    useEffect,
    useImperativeHandle,
    forwardRef
} from 'react';

import Toast from '../toast';
import Modal from '../modal';
import classNames from 'classnames';
import { ButtonProps } from '../button';

const prefixCls = 'nami-captcha-modal';

export interface captchaModalProps {
    /** 弹框是否可见 */
    visible?: boolean;
    /** 弹框标题 */
    title?: ReactNode;
    /** 弹框电话号 */
    phoneNumber: string;
    /** 确认按钮是否loading */
    confirmLoading?: boolean;
    /** 确认按钮是否loading */
    confirmLoaning?: boolean;
    /** 是否展示收不到验证码文案 */
    captchaTipsShow?: boolean;
    /** className */
    className?: string;
    /** 确认按钮其他参数 */
    okButtonProps?: ButtonProps;
    /** 收不到验证码点击函数 */
    onCaptchaTipsClick?: () => void;
    /** 重新发送验证码点击函数 */
    onResend?: () => void;
    /** 确认按钮点击函数 */
    onOk?: () => void;
    /** 取消按钮点击函数 */
    onCancel?: () => void;
    /** 输入验证码触发函数 */
    onChange?: (res: any) => any;
    /** ref */
    ref?: any;
}
export interface state {
    captcha: string;
    seconds: number | string;
}

export const CaptchaModal: FC<captchaModalProps> = forwardRef((props, ref) => {
    const timer = useRef<NodeJS.Timeout>();
    const [captcha, setcaptcha] = useState<string>('');
    const [seconds, setseconds] = useState<string | number>('');
    const {
        visible,
        title,
        phoneNumber,
        confirmLoading,
        confirmLoaning,
        captchaTipsShow,
        className,
        okButtonProps,
        ...otherProps
    } = props;
    const captchaModalCls = classNames(prefixCls, className);
    useEffect(
        () => () => {
            timer.current && clearInterval(timer.current);
        },
        []
    );
    useImperativeHandle(ref, () => ({
        clearCaptchaValue: () => {
            setcaptcha('');
        },
        clearInterval: () => {
            timer.current && clearInterval(timer.current);
        },
        // 倒计时
        countDown: (seconds: number) => {
            timer.current && clearInterval(timer.current);
            setseconds(seconds);
            timer.current = setInterval(() => {
                let _seconds = --seconds;
                setseconds(_seconds);
                if (_seconds <= 0) {
                    timer.current && clearInterval(timer.current);
                }
            }, 1000);
        }
    }));
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { onChange } = props;
        let value = (e.target.value = e.target.value.replace(/\D/g, ''));
        if (!/^[0-9]*$/.test(value)) {
            Toast('请输入正确的验证码');
            return;
        }
        setcaptcha(value);

        onChange && onChange(value);
    };
    const handleResend = () => {
        const { onResend } = props;
        onResend && onResend();
    };
    const handleOk = () => {
        const { onOk } = props;
        onOk && onOk();
    };
    const handleCancel = () => {
        timer.current && clearInterval(timer.current);
        setcaptcha(() => '');
        const { onCancel } = props;
        onCancel && onCancel();
    };
    const handleCaptchaTipsClick = () => {
        const { onCaptchaTipsClick } = props;
        onCaptchaTipsClick && onCaptchaTipsClick();
    };
    const renderSendButton = () => (
        <button type='button' disabled={seconds > 0} onClick={handleResend} data-testid='resendBtn'>
            {seconds > 0 ? `${seconds}秒后重新发送` : '重获验证码'}
        </button>
    );

    return (
        <Modal
            className={captchaModalCls}
            title={title}
            confirmLoading={confirmLoading || confirmLoaning}
            onCancel={handleCancel}
            okButtonProps={{ loadingText: '', disabled: captcha.length < 4, ...okButtonProps }}
            onOk={handleOk}
            visible={visible}
            {...otherProps}
        >
            <div className={`${captchaModalCls}-content`} data-testid='captcha-main'>
                <p>已发送验证码短信到</p>
                <p className={`${captchaModalCls}-phone`}>{phoneNumber}</p>
                <div className={`${captchaModalCls}-input`}>
                    <input
                        data-testid='input'
                        type='tel'
                        maxLength={6}
                        value={captcha}
                        onChange={handleChange}
                        placeholder='请输入验证码'
                    />
                    {renderSendButton()}
                </div>
                {captchaTipsShow ? (
                    <div className={`${captchaModalCls}-tips`} onClick={handleCaptchaTipsClick}>
                        收不到验证码？
                    </div>
                ) : null}
            </div>
        </Modal>
    );
});

CaptchaModal.defaultProps = {
    title: '验证手机号',
    okButtonProps: {}
};
export default CaptchaModal;
