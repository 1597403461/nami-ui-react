/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TransAgreement from './index';

const { Item } = TransAgreement;

const agreement = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleOnChange = (checked: any) => {
        setChecked(() => checked);
    };
    return (
        <TransAgreement checked={checked} onChange={handleOnChange}>
            <Item name='机构授权协议' onClick={action('click jump')} />
        </TransAgreement>
    );
};

storiesOf('Agreement', module).add('协议展示', agreement);
