import React, { Fragment, FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import BodyScroll from '@bairong/body-scroll';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

const prefixCls = 'nami-modal-wrapper';

const node = document.createElement('div');
document.body.appendChild(node);
export interface ModalWrappperlProps {
    /** 是否展示 */
    visible?: boolean;
    /** 遮罩层可否点击 */
    maskClosable?: boolean;
    /** 点击遮罩层或者关闭按钮的触发函数  */
    onClose?: () => void;
    /** classname */
    className?: string;
}
export const ModalWrapper: FC<ModalWrappperlProps> = props => {
    const { visible, className, children, onClose, maskClosable } = props;

    useEffect(
        () => () => {
            BodyScroll['abled']();
            document.body.removeChild(node);
        },
        []
    );

    useEffect(() => {
        BodyScroll[visible ? 'disabled' : 'abled']();
    }, [visible]);

    const handleMaskClick = () => {
        maskClosable && onClose && onClose();
    };
    const renderContent = () => <div className={`${prefixCls}-content`}></div>;

    const renderMask = () => <div className={`${prefixCls}-mask`} onClick={handleMaskClick} />;

    const renderModalWrapper = () => {
        const modalWrapperCls = classNames(prefixCls, className);
        return (
            <Fragment>
                <CSSTransition in={visible} timeout={300} unmountOnExit classNames={prefixCls}>
                    <div className={modalWrapperCls}>{children || renderContent()}</div>
                </CSSTransition>
                <CSSTransition
                    in={visible}
                    timeout={300}
                    unmountOnExit
                    classNames={`${prefixCls}-mask`}
                >
                    {renderMask()}
                </CSSTransition>
            </Fragment>
        );
    };
    return ReactDOM.createPortal(renderModalWrapper(), node);
};

ModalWrapper.defaultProps = {
    visible: false,
    maskClosable: false
};
export default ModalWrapper;
