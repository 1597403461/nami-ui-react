import React from 'react';
import { storiesOf } from '@storybook/react';

import Empty from './index';

const empty = () => (
    <Empty
        message='welcome to Empty component'
        imgUrl='https://img.shurongdai.cn/group1/M00/00/13/wKgX2VyZ4SqATCZFAABd9w8Dj1E540.png'
    />
);

storiesOf('empty component', module).add('empty 展示', empty);
