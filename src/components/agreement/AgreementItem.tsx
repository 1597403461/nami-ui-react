import React, { FC } from 'react';

export interface baseProps {
    /** 协议文案 */
    name?: string;
    /** 协议点击事件 */
    onClick?: () => void;
}

export const AgreementItem: FC<baseProps> = props => {
    const { onClick, name } = props;
    const handeClick = () => {
        onClick && onClick();
    };
    return <span onClick={handeClick}>{`《${name}》`}</span>;
};

export default AgreementItem;
