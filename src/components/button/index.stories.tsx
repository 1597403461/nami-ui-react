/* eslint-disable react-hooks/rules-of-hooks */
import React, { CSSProperties, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';
import './index.css';

const style: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const typeStyle: CSSProperties = {
    width: '30%'
};

const sizeStyle: CSSProperties = {
    width: '20%'
};

const disableStyle: CSSProperties = {
    width: '45%'
};

const buttonWithBtnType = () => (
    <div style={{ ...style, ...typeStyle }}>
        <Button btnType='primary' onClick={action('primary btn click')}>
            primary button
        </Button>
        <Button btnType='ghost' onClick={action('ghost btn click')}>
            ghost button
        </Button>
        <Button btnType='light' onClick={action('light btn click')}>
            light button
        </Button>
    </div>
);

const buttonWithSize = () => (
    <div style={{ ...style, ...sizeStyle }}>
        <Button size='middle' btnType='primary' onClick={action(' middle btn click')}>
            middle button
        </Button>
        <Button btnType='primary' size='small' onClick={action('small btn click')}>
            small button
        </Button>
    </div>
);

const buttonWithDisbled = () => (
    <div style={{ ...style, ...disableStyle }}>
        <Button disabled btnType='primary' onClick={action('disabled btn click')}>
            primary disabled button
        </Button>
        <Button disabled btnType='ghost' onClick={action('disabled btn click')}>
            ghost disabled button
        </Button>
        <Button disabled btnType='light' onClick={action('disabled btn click')}>
            light disabled button
        </Button>
    </div>
);

const buttonWithLoading = () => {
    const [loading, setloading] = useState(false);
    return (
        <div style={{ ...style, ...sizeStyle }}>
            <Button
                block
                loading={loading}
                btnType='primary'
                onClick={() => {
                    setloading(loading => !loading);
                }}
            >
                please click me
            </Button>
        </div>
    );
};

const buttonWithBlock = () => (
    <div style={{ ...style, ...sizeStyle }}>
        <Button block loading btnType='primary' onClick={action('btn click')} />
    </div>
);

storiesOf('Button Component', module)
    .add('不同类型的 Button', buttonWithBtnType)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('禁用的 Button', buttonWithDisbled)
    .add('加载中的 Button', buttonWithLoading)
    .add('宽度100% Button', buttonWithBlock);
