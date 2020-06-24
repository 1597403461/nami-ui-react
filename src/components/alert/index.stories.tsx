import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { action, actions } from '@storybook/addon-actions';

import Alert from './index';
import './index.less';

const style: CSSProperties = {
    width: '100%'
};
const alert = () => (
    <div style={style}>
        <Alert message='welcome to alert component' shape='circle' onClick={action('btn click')} />
        <br />
        <Alert message='welcome to alert component' onClick={action('btn click')} />
        <br />
        <Alert
            message='welcome to button alert component'
            type='button'
            onClick={action('btn click')}
        />
        <br />
        <Alert
            message='welcome to link alert component'
            linkText='linkText'
            type='link'
            onClick={action('btn click')}
        />
        <br />
        <Alert
            message='please click the icon 👉👉👉'
            type='closeable'
            onClick={action('btn click')}
            onClose={action('icon click')}
        />
    </div>
);

storiesOf('Alert component', module).add('不同样式的 Alert', alert);
