import { FC } from 'react';
import Menu, { menuProps } from './menu';
import SubMenu, { SubMenuProps } from './subMenu';
import MenuItem, { menuItemProps } from './item';
export type IMenuComponent = FC<menuProps> & {
    Item: FC<menuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
