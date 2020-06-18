import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../icon/index';
var SubMenuItem = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className;
    var context = useContext(MenuContext);
    var classes = classNames('nami-menu-item nami-menu-submenu-item', className, {
        'is-active': context.index === index
    });
    var handleClick = function () {
        context.onSelect && typeof index === 'number' && context.onSelect(index);
    };
    return (React.createElement("li", { key: index, className: classes, onClick: handleClick },
        title,
        React.createElement(Icon, { type: context.index === index ? '\ue646' : '\ue645', className: 'submenu-icon' })));
};
SubMenuItem.displayName = 'subMenuItem';
export default SubMenuItem;
