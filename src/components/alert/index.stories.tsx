import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Alert, { alterProps } from './index';

export default {
    title: 'Component/Alert',
    component: Alert
};

const Template: Story<alterProps> = args => <Alert {...args} />;

export const Base = Template.bind({});

Base.args = {
    message: 'please click the icon 👉👉👉',
    linkText: 'go go go'
};
