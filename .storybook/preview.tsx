import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import React, { CSSProperties } from 'react';

import '../stories/index.less';
const wrapperStyle: CSSProperties = {
    padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
    <div style={wrapperStyle}>
        <h3 style={{paddingBottom:'20px'}}>组件演示</h3>
        {stroyFn()}
    </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })
