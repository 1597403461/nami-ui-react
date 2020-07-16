import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import NativeApi from '@bairong/rs-native-api';
const modalStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100000,
    background: 'rgba(0, 0, 0, 0.7)'
};

const imgWrapperStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: '50px 40px'
};
const imgStyle: CSSProperties = {
    width: '100%'
};

class Modal extends React.Component {
    handleClick = () => {
        let url =
            'https://itunes.apple.com/cn/app/%E6%A6%95%E6%A0%91%E8%B4%B7%E6%AC%BE-%E6%89%8B%E6%9C%BA%E5%80%9F%E9%92%B1%E5%88%86%E6%9C%9F%E8%B4%B7%E6%AC%BE%E5%B9%B3%E5%8F%B0/id1216088977?mt=8';
        location.href = url;
    };

    render() {
        return (
            <div style={modalStyle} onTouchMove={this.handleClick} onClick={this.handleClick}>
                <div style={imgWrapperStyle}>
                    <img
                        style={imgStyle}
                        src='//img.shurongdai.cn/group1/M00/00/11/wKgX2VwR_smAIKneAAGkP2XMZqk407.png'
                        alt=''
                    />
                </div>
            </div>
        );
    }
}

if (NativeApi.isApp && NativeApi.isIOS && !NativeApi.isSmallByVersion('3.3.1')) {
    const node = document.createElement('div');
    document.body.appendChild(node);
    ReactDOM.render(<Modal />, node);
}
