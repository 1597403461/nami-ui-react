/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

const buttonWithBtnType = () => (
    <Fragment>
        <Button btnType='primary' onClick={action('primary btn click')}>
            primary button
        </Button>
        <Button btnType='ghost' onClick={action('ghost btn click')}>
            ghost button
        </Button>
        <Button btnType='light' onClick={action('light btn click')}>
            light button
        </Button>
    </Fragment>
);

const buttonWithSize = () => (
    <Fragment>
        <Button size='middle' btnType='primary' onClick={action(' middle btn click')}>
            middle button
        </Button>
        <Button btnType='primary' size='small' onClick={action('small btn click')}>
            small button
        </Button>
    </Fragment>
);

const buttonWithDisbled = () => (
    <Fragment>
        <Button disabled btnType='primary' onClick={action('disabled btn click')}>
            primary disabled button
        </Button>
        <Button disabled btnType='ghost' onClick={action('disabled btn click')}>
            ghost disabled button
        </Button>
        <Button disabled btnType='light' onClick={action('disabled btn click')}>
            light disabled button
        </Button>
    </Fragment>
);

const buttonWithLoading = () => {
    const [loading, setloading] = useState(false);
    return (
        <Fragment>
            <Button
                loading={loading}
                btnType='primary'
                onClick={() => {
                    setloading(loading => !loading);
                }}
            >
                please click me
            </Button>
        </Fragment>
    );
};

const buttonWithBlock = () => (
    <Button block loading btnType='primary' onClick={action('btn click')} />
);

storiesOf('Button', module)
    .add('不同类型的 Button', buttonWithBtnType)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('禁用的 Button', buttonWithDisbled)
    .add('加载中的 Button', buttonWithLoading)
    .add('宽度100% Button', buttonWithBlock);
