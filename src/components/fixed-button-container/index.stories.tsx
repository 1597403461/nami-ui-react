import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FixedButtonContainer from './index';
import Button from '../button';

const fixed = () => (
    <FixedButtonContainer>
        <Button block children='提交' btnType='primary' onClick={action('btn click')} />
    </FixedButtonContainer>
);

storiesOf('FixedButtonContainer', module).add('底部固定 button', fixed, {
    info: {
        inline: false,
        header: false,
        source: true,
        propTablesExclude: [Button]
    }
});
