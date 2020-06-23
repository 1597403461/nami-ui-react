import React, { Fragment, useEffect, FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import BodyScroll from '../../utils/body-scroll';

const prefixCls = 'nami-slide-left-panel';

const maskCls = `${prefixCls}-mask`;

const PANEL_WHITH = window.innerWidth * 0.65;
const PANEL_HEIGHT = window.innerHeight;

const node = document.createElement('div');
document.body.appendChild(node);

export interface slideleftPanelProps {
    visible?: boolean;
    maskClosable?: boolean;
    onClose?: () => void;
    children?: ReactNode;
}
const SlideleftPanel: FC<slideleftPanelProps> = props => {
    const { visible, children, onClose, maskClosable } = props;
    useEffect(
        () => () => {
            BodyScroll['abled']();
            document.body.removeChild(node);
        },
        []
    );

    useEffect(() => {
        BodyScroll[visible ? 'disabled' : 'abled']();
    }, [visible]);

    const handleMaskClick = () => {
        maskClosable && onClose && onClose();
    };
    const renderBody = () => (
        <div
            className={`${prefixCls}`}
            style={{ height: PANEL_HEIGHT, width: PANEL_WHITH }}
            data-testid='SlideleftPanel'
        >
            {children}
        </div>
    );
    const renderMask = () => (
        <div className={maskCls} onClick={handleMaskClick} data-testid='mask' />
    );

    const renderSlideUpPanel = () => (
        <Fragment>
            <CSSTransition in={visible} timeout={300} unmountOnExit classNames={prefixCls}>
                {renderBody()}
            </CSSTransition>
            <CSSTransition in={visible} timeout={300} unmountOnExit classNames={maskCls}>
                {renderMask()}
            </CSSTransition>
        </Fragment>
    );

    return ReactDOM.createPortal(renderSlideUpPanel(), node);
};

SlideleftPanel.defaultProps = {
    visible: false,
    maskClosable: true
};

export default SlideleftPanel;
