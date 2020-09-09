# LOG

## 软连接（本地调试`nami-ui-react`库的组件）

1. `npm run build`打包源文件
2. `sudo npm link`创建全局软连接
3. 在测试项目中`npm link nami-ui-react`链接此本地源码包
4. 完成（即可引用 nami-ui-react 库中的组件）

## npm 账号注册以及登陆

1. npm 官网注册账号
2. 打开终端
3. `npm config ls`查看镜像是否为`registry = "http://registry.npmjs.org/"`
4. 若不是执行`npm config set registry http://registry.npmjs.org`将镜像改为 npm
5. 执行`npm adduser`登陆账号
6. 执行`npm whoami`查看是否登陆成功

## 安装配置 ts

`npm install --save-dev typescript awesome-typescript-loader source-map-loader`
这些依赖会让 TypeScript 和 webpack 在一起良好地工作。 awesome-typescript-loader 可以让 Webpack 使用 TypeScript 的标准配置文件 tsconfig.json 编译 TypeScript 代码。 source-map-loader 使用 TypeScript 输出的 sourcemap 文件来告诉 webpack 何时生成 自己的 sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试 TypeScript 源码一样。

在 react 中使用 ts 要安装预设`@babel/preset-typescript`

## 安装 jest 测试

`npm i jest @types/jest @testing-library/jest-dom @testing-library/react @testing-library/user-event -D`

## 配置 storyBook

初始化`npx sb init`

配置 main.js 使其支持 ts
需要安装`babel-loader`和`babel-preset-react-app`（具体看官网）

```js
module.exports = {
    stories: ['../stories/**/*.stories.tsx', '../src/components/**/*.stories.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]]
            }
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    }
};
```
