import React, { useContext, FC } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../icon/index';
export interface SubMenuProps {
    index?: number;
    title: string;
    className?: string;
}

const SubMenuItem: FC<SubMenuProps> = ({ index, title, className }) => {
    const context = useContext(MenuContext);
    const classes = classNames('nami-menu-item nami-menu-submenu-item', className, {
        'is-active': context.index === index
    });

    const handleClick = () => {
        context.onSelect && typeof index === 'number' && context.onSelect(index);
    };
    return (
        <li key={index} className={classes} onClick={handleClick}>
            {title}
            <Icon type={context.index === index ? '\ue646' : '\ue645'} className='submenu-icon' />
        </li>
    );
};

SubMenuItem.displayName = 'subMenuItem';
export default SubMenuItem;
