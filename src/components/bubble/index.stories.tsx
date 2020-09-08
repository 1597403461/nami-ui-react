import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Bubble, { bubbleProps } from './index';

export default {
    title: 'Component/Bubble',
    component: Bubble
};

const Template: Story<bubbleProps> = args => <Bubble {...args} />;

export const Base = Template.bind({});

Base.args = {
    children: 'bubble'
};
