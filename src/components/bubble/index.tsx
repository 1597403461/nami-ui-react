import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

const prefixCls = 'nami-bubble';

type bubbleDirection = 'up' | 'down';

export interface bubbleProps {
    /** bubble方向 */
    direction?: bubbleDirection;
    className?: string;
    children?: any;
}

export const Bubble: FC<bubbleProps & HTMLAttributes<HTMLElement>> = props => {
    const { children, className, direction, ...otherProps } = props;
    const bubbleCls = classNames(prefixCls, `${prefixCls}-${direction}`, className);
    return (
        <div className={bubbleCls} {...otherProps}>
            <span>{children}</span>
        </div>
    );
};

Bubble.defaultProps = {
    direction: 'up'
};

export default Bubble;
