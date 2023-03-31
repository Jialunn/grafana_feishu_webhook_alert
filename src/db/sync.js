const seq = require('./seq')

require('./model/index')

// INSERT INTO `admins` VALUES (1, 'bazhuayu', 'de086d1447f2bc5818d5d1047249920c', 'admin', 'http://127.0.0.1:30000/images/1.jpg', '2020-08-01 17:57:05', '2020-08-01 17:57:07');
// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

// 执行同步
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})
