import React, { FC } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

const prefixCls = 'nami-alert';

export type btnType = 'closeable' | 'link' | 'button' | 'default';
interface alterProps {
    message?: string;
    className?: string;
    shape?: string;
    visible?: boolean;
    type?: btnType;
    buttonText?: string;
    linkText?: string;
}

const Alert: FC<alterProps> = props => {
    const { message, className, shape, visible, type = 'default', buttonText, linkText } = props;

    const renderType = () => {
        const types = {
            closeable: (
                <span className={`${prefixCls}-icon`}>
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
            <div className={alertCls}>
                <p className={`${prefixCls}-message`}>{message}</p>
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
    visible: true,
    message: '',
    buttonText: '去开启'
};

export default Alert;
