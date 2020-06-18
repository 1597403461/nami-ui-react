import React, { FC, CSSProperties } from 'react';
export declare type selectCallback = (selectIndex: number) => void;
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
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: FC<menuProps>;
export default Menu;
export { default as MenuItem } from './item';
