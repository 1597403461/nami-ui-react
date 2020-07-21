import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';

import CardContainer from './index';

const style: CSSProperties = { height: '160px' };

const cardContainer = () => <CardContainer style={style} />;

storiesOf('cardContainer', module).add('cardContainer 面板展示', cardContainer);
