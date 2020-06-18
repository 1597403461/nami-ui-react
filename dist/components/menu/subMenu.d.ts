import { FC } from 'react';
export interface SubMenuProps {
    index?: number;
    title: string;
    className?: string;
}
declare const SubMenuItem: FC<SubMenuProps>;
export default SubMenuItem;
