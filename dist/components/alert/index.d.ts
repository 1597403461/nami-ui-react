import { FC } from 'react';
export declare type btnType = 'closeable' | 'link' | 'button' | 'default';
interface alterProps {
    message?: string;
    className?: string;
    shape?: string;
    visible?: boolean;
    type?: btnType;
    buttonText?: string;
    linkText?: string;
}
declare const Alert: FC<alterProps>;
export default Alert;
