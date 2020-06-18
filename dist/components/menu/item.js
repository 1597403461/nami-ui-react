import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
var prefixCls = 'nami-menu-item';
var MenuItem = function (props) {
    var index = props.index, className = props.className, disabled = props.disabled, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var menuItemClass = classNames(prefixCls, className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        context.onSelect && !disabled && typeof index === 'number' && context.onSelect(index);
    };
    return (React.createElement("li", { className: menuItemClass, style: style, onClick: handleClick }, children));
};
MenuItem.defaultProps = {
    index: 0
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
