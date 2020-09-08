import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import FixedButtonContainer, { FixedButtonContainerProps } from './index';
import Button from '../button';

// const fixed = () => (
//     <FixedButtonContainer>
//         <Button block type='primary' onClick={action('btn click')} >提交</Button>
//     </FixedButtonContainer>
// );

// storiesOf('FixedButtonContainer', module).add('底部固定 button', fixed, {
//     info: {
//         inline: false,
//         header: true,
//         source: true,
//         propTablesExclude: [Button]
//     }
// });

export default {
    title: 'Component/FixedButtonContainer',
    component: FixedButtonContainer
};

const Template: Story<FixedButtonContainerProps> = () => (
    <FixedButtonContainer>
        <Button block btnType='primary' onClick={action('btn click')}>
            提交
        </Button>
    </FixedButtonContainer>
);

export const Base = Template.bind({});
