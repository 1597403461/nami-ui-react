import React, { FC, HTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

const prefixCls = 'nami-checkbox';

export interface baseProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    onChange?: <T>(checked: T) => void;
}

export type checkboxProps = baseProps & HTMLAttributes<HTMLElement>;

export const Checkbox: FC<checkboxProps> = props => {
    const { className, children, disabled, checked, onChange, ...otherProps } = props;
    const checkboxCls = classNames(
        prefixCls,
        {
            [`${prefixCls}-disabled`]: disabled
        },
        className
    );
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.checked);
    };
    return (
        <label className={checkboxCls} {...otherProps}>
            <input
                type='checkbox'
                disabled={disabled}
                className={`${prefixCls}-input`}
                checked={checked}
                onChange={handleChange}
            />
            {checked ? (
                <Icon className={`${prefixCls}-icon ${prefixCls}-icon-checked`} type='&#xe6ab;' />
            ) : (
                <Icon className={`${prefixCls}-icon`} type='&#xe6a4;' />
            )}
            {children ? <span className={`${prefixCls}-text`}>{children}</span> : null}
        </label>
    );
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false
};

export default Checkbox;
