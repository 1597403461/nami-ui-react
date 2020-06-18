import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

const prefixCls = 'nami-btn';

export type ButtonSize = 'primary' | 'middle' | 'small';
export type ButtonType = 'ghost' | 'light';

interface BaseButtonProps {
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    btnType?: ButtonType;
    size?: ButtonSize;
    children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>; // 定义button属性
export type ButtonProps = Partial<NativeButtonProps>; // Partial全局设成可选属性

const Button: React.FC<ButtonProps> = props => {
    const {
        btnType,
        size,
        block,
        disabled,
        loading,
        children,
        loadingText,
        className,
        onClick,
        ...otherProps
    } = props;

    const handeClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): any => {
        !loading && onClick && onClick(event);
    };

    const buttonCls = classNames(
        prefixCls,
        `${prefixCls}-${btnType}`,
        {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-block`]: block,
            [`${prefixCls}-loading`]: loading
        },
        className
    );

    const iconNode = loading ? <span className={`${prefixCls}-icon`} /> : null;

    return (
        <button
            test-data='button'
            className={buttonCls}
            disabled={disabled || loading}
            onClick={handeClick}
            {...otherProps}
        >
            {iconNode}
            <span>{loading ? loadingText : children}</span>
        </button>
    );
};
Button.defaultProps = {
    block: false,
    disabled: false,
    loading: false,
    loadingText: '提交中'
};
export default Button;

/**
 * 与原文差异是type值和btnType和size
 */
