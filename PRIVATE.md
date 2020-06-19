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
