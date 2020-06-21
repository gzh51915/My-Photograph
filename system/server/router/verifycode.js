
const express = require('express');
const Router = express.Router();

const svgCaptcha = require('svg-captcha');

// 生成图形验证码
Router.get('/', (req, res) => {
    var captcha = svgCaptcha.create({
        ignoreChars: '0o1i',
        noise: 2,
        color: true,
    });
    // console.log(captcha.data);

    // 把验验证码保存在session中
    req.session.vcode = captcha.text.toLocaleLowerCase();


    res.send({data:captcha.data,text:captcha.text.toLocaleLowerCase()});
})


module.exports = Router
