const express = require("express");

// 使用express中间件Router来实现server与router的连接
const Router = express.Router();

const db = require("../db");

// 查询所有商品 /goods/
Router.get("/", async (req, res) => {
  // console.log("勇气")
  const { page = 1, size = 30, sort = { add_time: -1 } } = req.query;
  const limit = size * 1;
  const skip = (page - 1) * size;

  let result;
  let data;
  try {
    result = await db.find("usersinfo", {}, { limit, skip, sort });
    data = {
      code: 1,
      data: result,
      msg: "success",
    };
  } catch (err) {
    console.log(error);
    data = {
      code: 0,
      data: [],
      msg: "fail",
    };
  }
  console.log(data);
  // 请求<->响应
  // console.log(result)
  res.send(data);
});

Router.post("/", (req, res) => {
  //增
  // db.create('goods')
});

// 查询id为某个值的商品
Router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await db.find("usersinfo", { _id: id });
  console.log(666666666666, result);
  if (result.length > 0) {
    res.send({
      code: 1,
      data: result[0],
      msg: "success",
    });
  } else {
    res.send({
      code: 0,
      data: [],
      msg: "fail",
    });
  }
});

// 3.拦截前端提交数据的POST请求
// Router.delete("/:id",async function(req, res){

//     const {id} = req.params;

//         // 查询数据库，根据id删除数据
//     const result =await  db.delete('/usersinfo',{ _id: id})
//     console.log(result);

// })



// Router.delete("/:id",async function(req, res){
//     var id = req.params.id;
//     console.log(666,id);
//     // 查询数据库，根据id删除数据
//     const  result = await db.delete("usersinfo",{_id:id})
//     console.log('9999=',result);
//     res.send(result.result.n)
// })
function formatData({ status = 1, data = [], msg = 'success' } = {}) {
  if (status === 0) {
    msg = 'fail'
  }
  return {
    status,
    data,
    msg
  }
}

Router.delete('/:id', async (req, res) => {
  let { id } = req.params;
  // 查询数据库
  let result = await db.delete('usersinfo', { _id: id });
  // console.log('~~~~~~~~~~~~~~',result);
  if (result.deletedCount > 0) {
    res.send(formatData())
  } else {
    res.send(formatData({
      status: 0
    }))
  }
})

Router.patch('/update/:id', async (req, res) => {
  let { id } = req.params;
  let { qty } = req.body;
  let result = await db.Update('cart', {
    gid: gid
  }, {
    qty
  });

  if (result.modifiedCount > 0) {
    res.send(formatData())
  } else {
    res.send(formatData({
      status: 0
    }))
  }
})
module.exports = Router;
