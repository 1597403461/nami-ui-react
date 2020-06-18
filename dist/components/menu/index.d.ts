import { FC } from 'react';
import { menuProps } from './menu';
import { SubMenuProps } from './subMenu';
import { menuItemProps } from './item';
export declare type IMenuComponent = FC<menuProps> & {
    Item: FC<menuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
