import axios from "./axios";

export const resLogin = (username, password) =>
  axios({
    method: "POST",
    url: "/user/login",
    data: { username, password },
  });

export const resRemove = (id) =>
  axios({
    method: "DELETE",
    url: "/goods/" + id,
    data: "删除成功",
  });


export const resUpdate =(id,title, price, resprice)=> axios({
    method: "PATCH",
    url: "/goods/update/"+id,
    data:{
      title, price, resprice
    }
})

export const resCreate =(title, price, resprice)=> axios({
    method: "POST",
    url: "/goods/add",
    data: {title, price, resprice}
})

export const Allremove = () =>
  axios({
    method: "DELETE",
    url: "/goods/del",
    data: "删除成功",
  });



