import axios from "./axios";

//登录请求
export const resLogin = (username, password) =>
  axios({
    method: "POST",
    url: "/user/login",
    data: { username, password },
  });

//删除单个数据请求
export const resRemove = (id) =>
  axios({
    method: "DELETE",
    url: "/goods/" + id,
    data: "删除成功",
  });

// 修改数据请求
export const resUpdate =(id,title, price,respricce)=> axios({
    method: "PATCH",
    url: "/goods/update/"+id,
    data:{
      title, price,respricce
    }
})

// 添加数据请求
export const resCreate =(title, price,respricce)=> axios({
    method: "POST",
    url: "/goods/add",
    data: {title, price,respricce}
})

// 删除所有数据请求
export const Allremove = () =>
  axios({
    method: "DELETE",
    url: "/goods/del",
    data: "删除成功",
  });

  // 注册请求
  export const resReg =(username,password,age,address,vcode)=> axios({
    method: "POST",
    url: "/user",
    data:{
     username,password,age,address,vcode
    }
})

// 获取验证码请求
  export const resSvg =()=> axios({
    method: "GET",
    url: "/verifycode",
    data:"获取验证码"
})

