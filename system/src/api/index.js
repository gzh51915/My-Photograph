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

export const Allremove = () =>
  axios({
    method: "DELETE",
    url: "/goods/del",
    data: "删除成功",
  });

export const resUpdate = (id,age,address) =>
  axios({
    method: "PATCH",
    url: "/goods/update/" + id,
    data: {age,address},
  });

export const resCreate = (username, password, age, address) =>
  axios({
    method: "POST",
    url: "/goods/add",
    data: { username, password, age, address },
  });
