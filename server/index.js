const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const home = serve(path.join(__dirname, '..', 'storybook-static'));

const app = new Koa();

app.use(home);

app.listen(3000, () => {
    console.log('server is started at port 3000');
});

