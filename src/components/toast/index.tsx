import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message';

declare let window: Window & { BrBridge: any };

const Toast = (message?: any, duration = 2000, callback?: () => any) => {
    if (window.BrBridge && window.BrBridge.env.isApp) {
        showNativeToast(message, duration, callback);
    } else {
        showToast(message, duration, callback);
    }
};

const showNativeToast = (message?: any, duration = 2000, callback?: () => any) => {
    window.BrBridge.call('Common', 'toast', {
        content: message,
        time: duration
    });
    setTimeout(function () {
        callback && callback();
    }, duration - 10);
};

const showToast = (message?: any, duration?: number, callback?: () => any) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Message message={message} />, div);

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        callback && callback();
    }, duration);
};

export default Toast;
