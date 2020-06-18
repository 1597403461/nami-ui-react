import React, { ButtonHTMLAttributes } from 'react';
export declare type ButtonSize = 'primary' | 'middle' | 'small';
export declare type ButtonType = 'ghost' | 'light';
interface BaseButtonProps {
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    btnType?: ButtonType;
    size?: ButtonSize;
    children: React.ReactNode;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
/**
 * 与原文差异是type值和btnType和size
 */
