import React, { FC } from 'react';
import { PositionProperty } from 'csstype';
import classNames from 'classnames';
const prefixCls = 'nami-fixed-button-container';

export interface FixedButtonContainerProps {
    /** 定位方式 */
    position?: PositionProperty;
    /** 类名 */
    className?: string;
}

export const FixedButtonContainer: FC<FixedButtonContainerProps> = props => {
    const { position, children, className } = props;
    const cls = classNames(prefixCls, className);
    return (
        <div
            className={cls}
            style={{ position }}
            data-testid='fixedContainer'
            data-position={position}
        >
            {children}
        </div>
    );
};

FixedButtonContainer.defaultProps = { position: 'fixed' };
export default FixedButtonContainer;
