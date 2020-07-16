import React from 'react';
import { storiesOf } from '@storybook/react';

const welcome = () => (
    <>
        <h1>欢迎来到榕树app的组件库</h1>
    </>
);
storiesOf('welcome page', module).add('welcome', welcome, { info: { disable: true } });
