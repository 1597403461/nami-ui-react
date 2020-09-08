import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import Checkbox, { checkboxProps } from './index';

export default {
    title: 'Component/Checkbox',
    component: Checkbox
};

const Template: Story<checkboxProps> = () => {
    const [checked, setChecked] = useState(false);
    const handleOnChange = (checked: any) => {
        setChecked(() => checked);
    };
    return (
        <Checkbox checked={checked} onChange={handleOnChange}>
            please click me
        </Checkbox>
    );
};

export const Base = Template.bind({});

Base.parameters = {
    controls: { hideNoControlsWarning: true }
};
