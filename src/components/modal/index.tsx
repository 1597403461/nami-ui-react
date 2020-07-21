import React, { FC, ReactNode } from 'react';
import Button, { ButtonProps } from '../button';
import classNames from 'classnames';
import Icon from '../icon';
import ModalWrapper from '../modal-wrapper/index';

const prefixCls = 'nami-modal';

export interface modalProps {
    /** modal是否展示 */
    visible?: boolean;
    /** 按钮是否展示 */
    footerHide?: boolean;
    /** 遮罩层是否可点击 */
    maskClosable?: boolean;
    /** 是否展示确定按钮 */
    showOkButton?: boolean;
    /** 是否展示取消按钮 */
    showCancelButton?: boolean;
    /** 是否展示关闭按钮 */
    showCloseButton?: boolean;
    /** 是否展示确定按钮的loading状态 */
    confirmLoading?: boolean;
    /** 取消按钮文案 */
    cancelText?: string;
    /** 确定按钮文案 */
    okText?: string;
    /** className */
    className?: string;
    /** modalWrapper 的className */
    wrapperClassName?: string;
    /** 取消按钮的剩余参数 */
    cancelButtonProps?: ButtonProps;
    /** 确定按钮的剩余参数 */
    okButtonProps?: ButtonProps;
    /** 点击遮罩层的触发函数  */
    onClose?: () => any;
    /** 点击取消按钮的触发函数 */
    onCancel?: () => any;
    /** 点击确定按钮的触发函数 */
    onOk?: () => any;
    /** 标题 */
    title?: ReactNode;
}

export const Modal: FC<modalProps> = props => {
    const {
        visible,
        wrapperClassName,
        maskClosable,
        onClose,
        onCancel,
        onOk,
        title,
        cancelButtonProps,
        okButtonProps,
        footerHide,
        className,
        children,
        cancelText,
        okText,
        confirmLoading,
        showOkButton,
        showCancelButton,
        showCloseButton
    } = props;

    const handleOk = () => {
        onOk && onOk();
    };

    const handleCancel = () => {
        onCancel && onCancel();
    };

    const handleClose = () => {
        showCloseButton && onClose && onClose();
    };

    const renderTitle = () =>
        title && (
            <div className={`${prefixCls}-header`}>
                <h3 className={`${prefixCls}-title`}>{title}</h3>
            </div>
        );
    const renderFoooter = () => {
        const footerCls = classNames(`${prefixCls}-footer`, {
            [`${prefixCls}-footer-center`]: !showOkButton || !showCancelButton
        });

        return (
            !footerHide && (
                <div className={footerCls}>
                    {showCancelButton && (
                        <Button
                            btnType='ghost'
                            size='middle'
                            {...cancelButtonProps}
                            onClick={handleCancel}
                        >
                            {cancelText}
                        </Button>
                    )}
                    {showOkButton && (
                        <Button
                            btnType='primary'
                            size='middle'
                            {...okButtonProps}
                            loading={confirmLoading}
                            onClick={handleOk}
                        >
                            {okText}
                        </Button>
                    )}
                </div>
            )
        );
    };
    const renderCloseButton = () => {
        const { showCloseButton } = props;
        return (
            showCloseButton && (
                <Icon className={`${prefixCls}-close-btn`} type='&#xe68b;' onClick={handleClose} />
            )
        );
    };
    const renderModal = () => {
        const modalCls = classNames(
            prefixCls,
            {
                [`${prefixCls}-without-footer`]: footerHide
            },
            className
        );

        return (
            <div className={modalCls} data-testid='modal-main'>
                {renderTitle()}
                <div className={`${prefixCls}-body`}> {children}</div>
                {renderFoooter()}
                {renderCloseButton()}
            </div>
        );
    };
    return (
        <ModalWrapper
            visible={visible}
            className={wrapperClassName}
            maskClosable={maskClosable}
            onClose={onClose}
        >
            {renderModal()}
        </ModalWrapper>
    );
};

Modal.defaultProps = {
    visible: false,
    footerHide: false,
    maskClosable: false,
    showOkButton: true,
    showCancelButton: true,
    showCloseButton: false,
    confirmLoading: false,
    cancelText: '取消',
    okText: '确定',
    className: '',
    cancelButtonProps: {},
    okButtonProps: {}
};
export default Modal;
