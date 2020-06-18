import React, { createContext, useState, Children } from 'react';
import classNames from 'classnames';
var prefixCls = 'nami-menu';
export var MenuContext = createContext({ index: 0 });
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, style = props.style, onSelect = props.onSelect, children = props.children;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var menuClass = classNames(prefixCls, className);
    var handleClick = function (index) {
        setActive(index);
        onSelect && onSelect(index);
    };
    var passedContext = {
        index: currentActive,
        onSelect: handleClick
    };
    var renderChildren = function () {
        return Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'subMenuItem') {
                return React.cloneElement(childElement, {
                    index: index
                });
            }
            else {
                console.error('Warning: Menu has a child which is not a MenuItem component');
            }
        });
    };
    return (React.createElement("ul", { "data-testid": 'test-menu', className: menuClass, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: 0
};
export default Menu;
export { default as MenuItem } from './item';
