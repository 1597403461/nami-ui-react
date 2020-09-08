import React from 'react';

import Toast from './index';
import Button from '../button';

export default {
    title: 'Component/Toast',
    component: Toast
};

const Template = () => {
    const onClick = () => {
        Toast('hello world');
    };
    return (
        <Button btnType='primary' onClick={onClick}>
            please click me
        </Button>
    );
};

Template.parameters = {
    controls: { hideNoControlsWarning: true }
};
