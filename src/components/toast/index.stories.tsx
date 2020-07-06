import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';

import Toast from './index';

import Button from '../button';

const toast = () => {
    const onClick = () => {
        Toast('hello world');
    };
    return (
        <Button btnType='primary' onClick={onClick}>
            please click me
        </Button>
    );
};
addParameters({
    info: {
        inline: true,
        header: false,
        source: false,
        propTablesExclude: [Button],
        text: `
            ~~~js
            // 使用方法
            const App = () => {
                const onClick = () => {
                    Toast('hello world');
                };
                return (
                    <Button btnType='primary' onClick={onClick}>
                        please click me
                    </Button>
                );
            };
            ~~~
        `
    }
});
storiesOf('Toast component', module).add('Toast 提示', toast);
