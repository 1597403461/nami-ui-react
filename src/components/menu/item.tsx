import React, { FC, CSSProperties, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

const prefixCls = 'nami-menu-item';

export interface menuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}

const MenuItem: FC<menuItemProps> = props => {
    const { index, className, disabled, style, children } = props;
    const context = useContext(MenuContext);
    const menuItemClass = classNames(prefixCls, className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });

    const handleClick = () => {
        context.onSelect && !disabled && typeof index === 'number' && context.onSelect(index);
    };

    return (
        <li className={menuItemClass} style={style} onClick={handleClick}>
            {children}
        </li>
    );
};

MenuItem.defaultProps = {
    index: 0
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
