import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

const prefixCls = 'nami-alert';

export type btnType = 'closeable' | 'link' | 'button' | 'default';
export interface alterProps {
    /** alert文案 */
    message?: string;
    className?: string;
    /** alert形状 circle */
    shape?: string;
    /** 动画效果 */
    visible?: boolean;
    /** icon类型 */
    type?: btnType;
    /** type为button时的按钮文案 */
    buttonText?: string;
    /** type为link时icon旁的文案 */
    linkText?: string;
    /** type为closeable时icon的点击 */
    onClose?: () => void;
    /** alert的点击 */
    onClick?: () => void;
}

export const Alert: FC<alterProps> = props => {
    const [visible, setVisible] = useState(true);
    const {
        message,
        className,
        shape,
        type = 'default',
        buttonText,
        linkText,
        onClose,
        onClick
    } = props;

    const handleClose = (): void => {
        setVisible(false);
        onClose && onClose();
    };

    const handleClick = (): void => {
        onClick && onClick();
    };

    const renderType = () => {
        const types = {
            closeable: (
                <span className={`${prefixCls}-icon`} onClick={handleClose}>
                    <Icon type='&#xe69a;' />
                </span>
            ),
            link: (
                <span className={`${prefixCls}-link`}>
                    {linkText && <span className={`${prefixCls}-link-text`}>{linkText}</span>}
                    <Icon type='&#xe69a;' />
                </span>
            ),
            button: <span className={`${prefixCls}-btn`}>{buttonText}</span>,
            default: null
        };
        return types[type];
    };

    const renderAlert = () => {
        const alertCls = classNames(
            prefixCls,
            {
                [`${prefixCls}-circle`]: shape === 'circle'
            },
            className
        );
        return (
            <div className={alertCls} onClick={handleClick}>
                <p className={`${prefixCls}-message`} data-testid='alert'>
                    {message}
                </p>
                {renderType()}
            </div>
        );
    };
    return (
        <CSSTransition in={visible} timeout={100} unmountOnExit classNames={prefixCls}>
            {renderAlert()}
        </CSSTransition>
    );
};

Alert.defaultProps = {
    type: 'default',
    message: '',
    buttonText: '去开启'
};

export default Alert;
