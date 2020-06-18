var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
var prefixCls = 'nami-btn';
var Button = function (props) {
    var _a;
    var btnType = props.btnType, size = props.size, block = props.block, disabled = props.disabled, loading = props.loading, children = props.children, loadingText = props.loadingText, className = props.className, onClick = props.onClick, otherProps = __rest(props, ["btnType", "size", "block", "disabled", "loading", "children", "loadingText", "className", "onClick"]);
    var handeClick = function (event) {
        !loading && onClick && onClick(event);
    };
    var buttonCls = classNames(prefixCls, prefixCls + "-" + btnType, (_a = {},
        _a[prefixCls + "-" + size] = size,
        _a[prefixCls + "-block"] = block,
        _a[prefixCls + "-loading"] = loading,
        _a), className);
    var iconNode = loading ? React.createElement("span", { className: prefixCls + "-icon" }) : null;
    return (React.createElement("button", __assign({ "test-data": 'button', className: buttonCls, disabled: disabled || loading, onClick: handeClick }, otherProps),
        iconNode,
        React.createElement("span", null, loading ? loadingText : children)));
};
Button.defaultProps = {
    block: false,
    disabled: false,
    loading: false,
    loadingText: '提交中'
};
export default Button;
/**
 * 与原文差异是type值和btnType和size
 */
