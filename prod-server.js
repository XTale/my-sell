const express = require('express');
const ora = require('ora');
const config = require('./config');

const port = process.env.PORT || 8900;

var app = express();

const appData = require('./data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

const apiRouter = express.Router();

apiRouter.get('/seller', function(req, res) {
  res.json({
    errno: 0,
    data: seller
  })
});

//通过路由来发送get请求与用app来发送请求是一致的
apiRouter.get('/goods', function(req, res) {
  res.json({
    errno: 0,
    data: goods
  })
});

apiRouter.get('/ratings', function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
});

app.use('/api', apiRouter);
// express框架内置了pexoress.static中间件来设置静态文件。
app.use(express.static('./dist'));
var spinner = ora('running server...');
spinner.start();
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
