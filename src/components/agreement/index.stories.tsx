import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import TransAgreement, { IMenuComponent } from './index';

const { Item } = TransAgreement;

export default {
    title: 'Component/Agreement',
    component: TransAgreement
};

const Template: Story<IMenuComponent> = args => (
    <TransAgreement {...args}>
        <Item name='机构授权协议' />
    </TransAgreement>
);

export const Base = Template.bind({});

// Base.args = {
//     checked: false
// };

// Base.itemArgs = {
//     name: '机构授权协议'
// };
