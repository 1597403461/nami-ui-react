import React, { FC, CSSProperties, createContext, useState, Children } from 'react';
import classNames from 'classnames';
import { menuItemProps } from './item';

const prefixCls = 'nami-menu';

export type selectCallback = (selectIndex: number) => void;
export interface IMenuContext {
    index?: number;
    onSelect?: selectCallback;
}
export interface menuProps {
    defaultIndex?: number;
    className?: string;
    style?: CSSProperties;
    onSelect?: selectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });
const Menu: FC<menuProps> = props => {
    const { defaultIndex, className, style, onSelect, children } = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const menuClass = classNames(prefixCls, className);
    const handleClick = (index: number) => {
        setActive(index);
        onSelect && onSelect(index);
    };
    const passedContext: IMenuContext = {
        index: currentActive,
        onSelect: handleClick
    };

    const renderChildren = () =>
        Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<menuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'subMenuItem') {
                return React.cloneElement(childElement, {
                    index
                });
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component');
            }
        });

    return (
        <ul data-testid='test-menu' className={menuClass} style={style}>
            <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    defaultIndex: 0
};
export default Menu;
export { default as MenuItem } from './item';
