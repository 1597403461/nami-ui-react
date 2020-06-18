import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';
var prefixCls = 'nami-alert';
var Alert = function (props) {
    var message = props.message, className = props.className, shape = props.shape, visible = props.visible, _a = props.type, type = _a === void 0 ? 'default' : _a, buttonText = props.buttonText, linkText = props.linkText;
    var renderType = function () {
        var types = {
            closeable: (React.createElement("span", { className: prefixCls + "-icon" },
                React.createElement(Icon, { type: '\uE69B' }))),
            link: (React.createElement("span", { className: prefixCls + "-link" },
                linkText && React.createElement("span", { className: prefixCls + "-link-text" }, linkText),
                React.createElement(Icon, { type: '\uE69A' }))),
            button: React.createElement("span", { className: prefixCls + "-btn" }, buttonText),
            default: null
        };
        return types[type];
    };
    var renderAlert = function () {
        var _a;
        var alertCls = classNames(prefixCls, (_a = {},
            _a[prefixCls + "-circle"] = shape === 'circle',
            _a), className);
        return (React.createElement("div", { className: alertCls },
            React.createElement("p", { className: prefixCls + "-message" }, message),
            renderType()));
    };
    return (React.createElement(CSSTransition, { in: visible, timeout: 100, unmountOnExit: true, classNames: prefixCls }, renderAlert()));
};
Alert.defaultProps = {
    visible: true,
    message: '',
    buttonText: '去开启'
};
export default Alert;
