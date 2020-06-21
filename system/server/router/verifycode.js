
const express = require('express');
const Router = express.Router();
// const session = require("express-session");

const svgCaptcha = require('svg-captcha');

// Router.use(session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: ('name', 'value', { maxAge: 5 * 60 * 1000, secure: false })
// }));
// 生成图形验证码
Router.get('/', (req, res) => {
    var captcha = svgCaptcha.create({
        ignoreChars: '0o1i',
        noise: 2,
        color: true,
    });
    console.log(captcha.text);

    // 把验验证码保存在session中
    req.session.vcode = captcha.text.toLocaleLowerCase();

    console.log('session=', req.session.vcode)

    res.send({data:captcha.data,vcode:req.session.vcode});
})


module.exports = Router