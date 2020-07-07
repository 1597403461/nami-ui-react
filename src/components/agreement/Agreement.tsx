import React, {
    cloneElement,
    Children,
    ReactNode,
    FC,
    FunctionComponentElement,
    HTMLAttributes
} from 'react';
import classNames from 'classnames';
import Checkbox from '../checkbox';

const prefixCls = 'nami-agreement';

export interface baseProps {
    /** 单选框是否选中 */
    checked?: boolean;
    /** 单选款文案 */
    agreeText?: ReactNode;
    /** className */
    className?: string;
    /** 点击单选框触发函数，参数为单选框此时状态值 */
    onChange?: <T>(checked: T) => void;
}
export type agreementProps = baseProps & HTMLAttributes<HTMLElement>;

export const Agreement: FC<agreementProps> = props => {
    const { onChange, className, checked, agreeText, children, ...otherProps } = props;

    const agreementCls = classNames(prefixCls, className);

    const renderItem = () =>
        Children.map(children, child => {
            const childElement = child as FunctionComponentElement<ReactNode>;
            return cloneElement(childElement, otherProps);
        });

    return (
        <div className={agreementCls} {...otherProps}>
            <Checkbox checked={checked} onChange={onChange}>
                {agreeText}
            </Checkbox>
            <span className={`${prefixCls}-item`}>{renderItem()}</span>
        </div>
    );
};

Agreement.defaultProps = {
    agreeText: '同意'
};

export default Agreement;
