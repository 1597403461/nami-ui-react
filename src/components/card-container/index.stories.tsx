import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CardContainer, { cardProps } from './index';

export default {
    title: 'Component/CardContainer',
    component: CardContainer
};

const Template: Story<cardProps> = args => <CardContainer {...args} />;

export const Base = Template.bind({});
