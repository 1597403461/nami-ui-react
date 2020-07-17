# LOG

## 软连接（本地调试`nami-ui-react`库的组件）

1. `npm run build`打包源文件
2. `sudo npm link`创建全局软连接
3. 在测试项目中`npm link nami-ui-react`链接此本地源码包
4. 完成（即可引用nami-ui-react库中的组件）

## npm 账号注册以及登陆

1. npm官网注册账号
2. 打开终端
3. `npm config ls`查看镜像是否为`registry = "http://registry.npmjs.org/"`
4. 若不是执行`npm config set registry http://registry.npmjs.org`将镜像改为npm
5. 执行`npm adduser`登陆账号
6. 执行`npm whoami`查看是否登陆成功

## 安装配置ts

`npm install --save-dev typescript awesome-typescript-loader source-map-loader`
这些依赖会让TypeScript和webpack在一起良好地工作。 awesome-typescript-loader可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码。 source-map-loader使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试TypeScript源码一样。

在react中使用ts要安装预设`@babel/preset-typescript`

## 安装jest测试

`npm i jest @types/jest @testing-library/jest-dom @testing-library/react @testing-library/user-event -D`

## 配置storyBook

初始化`npx -p @storybook/cli sb init`

配置main.js使其支持ts
需要安装`babel-loader`和`babel-preset-react-app`（具体看官网）

```js
module.exports = {
    stories: ['../stories/**/*.stories.tsx', '../src/components/**/*.stories.tsx'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async config => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]],
                },
            }
        );
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
```
