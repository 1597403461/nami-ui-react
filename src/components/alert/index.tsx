import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

const prefixCls = 'nami-alert';

export type btnType = 'closeable' | 'link' | 'button' | 'default';
export interface alterProps {
    message?: string;
    className?: string;
    shape?: string;
    visible?: boolean;
    type?: btnType;
    buttonText?: string;
    linkText?: string;
    onClose?: () => void;
    onClick?: () => void;
}

const Alert: FC<alterProps> = props => {
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
                    <Icon type='&#xe69b;' />
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
