import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

const prefixCls = 'nami-icon';

export interface baseIconProps {
    className?: string;
    type: string;
}

export type IconProps = baseIconProps & HTMLAttributes<HTMLElement>;

const Icon: FC<IconProps> = ({ className, type, ...otherProps }) => {
    const iconCls = classNames(prefixCls, className);

    return (
        <i data-testid='i' className={`iconfont ${iconCls}`} {...otherProps}>
            {type}
        </i>
    );
};

export default Icon;
