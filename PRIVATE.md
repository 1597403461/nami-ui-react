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
4. 若不是执行`config set registry http://registry.npmjs.org`将镜像改为npm
5. 执行`npm adduser`登陆账号
6. 执行`npm whoami`查看是否登陆成功

## 使用async必须安装插件`@babel/plugin-transform-runtime`

`npm i @babel/plugin-transform-runtime -D`

在.babelrc配置文件中配置`"plugins": ["@babel/plugin-transform-runtime"]`

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
