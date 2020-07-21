import React, { ReactNode, FC } from 'react';

const prefixCls = 'nami-empty';

export interface emptyProps {
    /** 图片链接地址 */
    imgUrl?: string;
    /** 文案展示 */
    message?: ReactNode;
}

export const Empty: FC<emptyProps> = ({ imgUrl, message }) => (
    <div className={prefixCls} data-testid='empty'>
        <img className={`${prefixCls}-image`} src={imgUrl} alt='' />
        <p className={`${prefixCls}-message`}>{message}</p>
    </div>
);

export default Empty;
