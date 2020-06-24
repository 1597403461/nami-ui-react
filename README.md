# nami-ui-react

component library for react

## 安装

`npm install nami-ui-react --save`

`yarn add nami-ui-react`

## 示例

```js
import { Button } from 'nami-ui-react';
const App = () => (
    <Button btnType="primary" disabled>PRESS ME</Button>
);
```

引入样式

```js
import 'nami-ui-react/dist/index.css';
```

## 本地开发命令

启动本地环境 `npm run stroybook`

全局单元测试 `npm run jest`

启动局部单元测试并监控 `npx jest ./src/components/**/index.test.tsx --watch`

例如：`npx jest ./src/components/button/index.test.tsx --watch`

build静态文件`npm run build`

发布到npm`npm publish`
