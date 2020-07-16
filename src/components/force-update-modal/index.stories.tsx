import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';

const update = () => <div />;

addParameters({
    info: {
        inline: true,
        header: false,
        source: false,
        text: `使用方法此组件直接在react的ReactDOM.render页面引入即可（实现方式可看源码）其UI与Modal组件类似，只是实现方式不同。
        `
    }
});

storiesOf('update-modal', module).add('升级组件', update);
