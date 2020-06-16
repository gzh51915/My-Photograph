import axios from "./axios"

export const resLogin = (username, password) => axios({
    method: "POST",
    url: "/user/login",
    data: { username, password }
})

export const resRemove = id => axios({
    method: "DELETE",
    url: "/goods/" + id,
    data: "删除成功"
})

export const Allremove =()=> axios({
    method: "GET",
    url: "/goods",
    data: "删除成功"
})

export const resUpdate =(id)=> axios({
    method: "GET",
    url: "/goods/"+id,
    data: "查找结果"
})



