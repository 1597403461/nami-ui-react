import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

const prefixCls = 'nami-card-container';

export type colorProps = 'white' | 'gray';

export interface cardProps {
    /** 渐变色 */
    gradientColor?: colorProps;
}

export const CardContainer: FC<cardProps & HTMLAttributes<HTMLElement>> = props => {
    const { children, className, gradientColor, ...otherProps } = props;
    const cardContainerCls = classNames(prefixCls, className, `${prefixCls}-${gradientColor}`);
    return (
        <div className={cardContainerCls} {...otherProps}>
            <div className={`${prefixCls}-inner`}>{children}</div>
        </div>
    );
};

CardContainer.defaultProps = {
    gradientColor: 'white'
};

export default CardContainer;
