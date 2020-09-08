import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Modal, { modalProps } from './index';

export default {
    title: 'Component/Modal',
    component: Modal
};

const Template: Story<modalProps> = args => <Modal {...args} />;

export const Base = Template.bind({});

Base.args = {
    title: '三大框架',
    showCloseButton: true,
    children: 'react vue angular',
    visible: true
};
