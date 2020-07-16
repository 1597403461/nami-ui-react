import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Bubble from './index';
import Button from '../button';

const bubble = () => (
    <>
        <Button children='primary button' btnType='primary' size='small' />
        <Bubble onClick={action('bubble click')}>i am bubble</Bubble>
    </>
);

storiesOf('Bubble', module).add('Bubble 浮标展示', bubble);
