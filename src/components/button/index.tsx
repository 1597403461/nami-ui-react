import React, { ButtonHTMLAttributes, FC, ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';

const prefixCls = 'nami-btn';

export type ButtonSize = 'middle' | 'small';
export type ButtonType = 'ghost' | 'light' | 'primary';

interface BaseButtonProps {
    /** 控制宽度100% */
    block?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 加载中 */
    loading?: boolean;
    /** 加载中的文本 */
    loadingText?: string;
    /**button类型 */
    btnType?: ButtonType;
    /** button大小 */
    size?: ButtonSize;
    children: ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>; // 定义button属性
export type ButtonProps = Partial<NativeButtonProps>; // Partial全局设成可选属性

export const Button: FC<ButtonProps> = props => {
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

    const handeClick = (event: MouseEvent<HTMLElement, globalThis.MouseEvent>): any => {
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
 * 原意的type是此时的btnType
 * 原意的htmlType是此时的默认属性type
 */
