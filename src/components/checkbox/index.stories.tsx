/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

const checkbox = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleOnChange = (checked: any) => {
        setChecked(() => checked);
    };
    return (
        <Checkbox checked={checked} onChange={handleOnChange}>
            please click me
        </Checkbox>
    );
};

storiesOf('checkbox component', module).add('checkbox 展示', checkbox);
