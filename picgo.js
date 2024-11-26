// // v1.4.x- 版本
// const PicGo = require('picgo')

// v1.5.0+ 版本
const { PicGo } = require('picgo')

const picgo = new PicGo() // 将使用默认的配置文件：~/.picgo/config.json

// 上传具体路径下的图片
picgo.upload(['/xxx/xxx.jpg'])

// 上传剪贴板里的第一张图片（上传时会将格式转为png）
picgo.upload()

// 运行node picgo.js就可以上传指定图片
