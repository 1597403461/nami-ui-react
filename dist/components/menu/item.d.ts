import { FC, CSSProperties } from 'react';
export interface menuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const MenuItem: FC<menuItemProps>;
export default MenuItem;
