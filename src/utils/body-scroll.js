/**
 *   禁止滚动穿透
 * @author shaoyang
 */
(function (window, factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        window.bodyScroll = factory();
    }
})(window, function () {
    let scrollTop = 0;
    let doc = window.document;
    let body = doc.body;
    let docElem = doc.documentElement;

    function disabled() {
        scrollTop = getScrollTop();
        setStyle('fixed', -scrollTop);
        setRefresh(0);
    }
    function abled() {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        setScrollTop(scrollTop);
        setRefresh(1);
    }
    function getRefresh() {
        let meta = doc.querySelector('meta[name="no-refresh"]');
        let val = meta && meta.getAttribute('content');
        let status = {
            no: true,
            yes: false
        };
        return status[val];
    }
    function setRefresh(refresh) {
        if (!getRefresh()) {
            return;
        }
        window.BrBridge &&
            window.BrBridge.env.isApp &&
            window.BrBridge.call('Common', 'pullRefresh', { refresh: refresh });
    }
    function getScrollTop() {
        return body.scrollTop || docElem.scrollTop;
    }
    function setScrollTop(scrollTop) {
        body.scrollTop = docElem.scrollTop = scrollTop;
    }
    function setStyle(position, top) {
        body.style.position = position || '';
        body.style.top = (top || 0) + 'px';
        body.style.width = '100%';
    }

    return {
        disabled: disabled,
        abled: abled
    };
});
