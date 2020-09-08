import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './index';

export default {
    title: 'Component/Button',
    component: Button
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    btnType: 'primary',
    children: 'button'
};

export const Ghost = Template.bind({});
Ghost.args = {
    btnType: 'ghost',
    children: 'button'
};

export const Light = Template.bind({});
Light.args = {
    btnType: 'light',
    children: 'Button'
};

export const Middle = Template.bind({});
Middle.args = {
    btnType: 'primary',
    size: 'middle',
    children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
    btnType: 'primary',
    size: 'small',
    children: 'Button'
};

export const Loading = Template.bind({});
Loading.args = {
    btnType: 'primary',
    loading: true,
    children: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    btnType: 'primary',
    children: 'Button'
};

export const Block = Template.bind({});
Block.args = {
    block: true,
    btnType: 'primary',
    children: 'Button'
};
