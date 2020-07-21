/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { actions, action } from '@storybook/addon-actions';

import Modal from './index';
import Button from '../button/index';
const baseModal = () => {
    const eventsFromObject = actions({
        onOk: 'click ok button',
        onCancel: 'click cancel button'
    });
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <Fragment>
            <Button
                btnType='primary'
                onClick={() => {
                    setVisible(true);
                }}
            >
                please click me
            </Button>
            <Modal
                title='三大框架'
                visible={visible}
                children='react vue angular'
                onClose={() => {
                    setVisible(false);
                }}
                showCloseButton
                {...eventsFromObject}
            />
        </Fragment>
    );
};

const loadingModal = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <Fragment>
            <Button
                btnType='primary'
                onClick={() => {
                    setVisible(true);
                }}
            >
                please click me
            </Button>
            <Modal
                title='三大框架'
                visible={visible}
                confirmLoading={loading}
                children='react vue angular'
                onOk={() => {
                    setLoading(true);
                }}
                onCancel={action('click cancel button')}
                okButtonProps={{ loadingText: '' }}
                okText='点我'
                onClose={() => {
                    setVisible(false);
                    setLoading(false);
                }}
                showCloseButton
            />
        </Fragment>
    );
};
const params = {
    info: { inline: true, header: false, source: true, propTablesExclude: [Button] }
};

storiesOf('Modal', module)
    .add('基础 modal', baseModal, params)
    .add('loading modal', loadingModal, params);
