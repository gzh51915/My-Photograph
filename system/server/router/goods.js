const express = require('express');

// 使用express中间件Router来实现server与router的连接
const Router = express.Router()

const db = require('../db')

// 查询所有商品 /goods/
Router.get('/', async (req, res) => {
    console.log("勇气")
    const { page = 1, size = 20, sort = { add_time: -1 } } = req.query;
    const limit = size * 1;
    const skip = (page - 1) * size;

    let result
    let data;
    try {

        result = await db.find('usersinfo', {}, { limit, skip, sort })
        data = {
            code: 1,
            data: result,
            msg: 'success'
        }
    } catch (err) {
        console.log(error);
        data = {
            code: 0,
            data: [],
            msg: 'fail'
        }
    }
    // 请求<->响应
    console.log(result)
    res.send(data)
})

Router.post('/', (req, res) => { //增
    // db.create('goods')
})

// 查询id为某个值的商品
Router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const result = await db.find('goods', { _id: id });
    if (result.length > 0) {
        res.send({
            code: 1,
            data: result[0],
            msg: 'success'
        })
    } else {
        res.send({
            code: 0,
            data: [],
            msg: 'fail'
        })
    }
})

module.exports = Router
