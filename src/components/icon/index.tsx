import React, { FC } from 'react';
import classNames from 'classnames';

const prefixCls = 'nami-icon';

export interface iconProps {
    className?: string;
    type: string;
}

const Icon: FC<iconProps> = ({ className, type, ...otherProps }) => {
    const iconCls = classNames(prefixCls, className);

    return (
        <i data-testid='i' className={`iconfont ${iconCls}`} {...otherProps}>
            {type}
        </i>
    );
};

export default Icon;
