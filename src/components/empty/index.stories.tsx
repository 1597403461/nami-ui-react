import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Empty, { emptyProps } from './index';

export default {
    title: 'Component/Empty',
    component: Empty
};

const Template: Story<emptyProps> = args => <Empty {...args} />;

export const Base = Template.bind({});

Base.args = {
    message: 'welcome to Empty component',
    imgUrl: 'https://img.shurongdai.cn/group1/M00/00/13/wKgX2VyZ4SqATCZFAABd9w8Dj1E540.png'
};
