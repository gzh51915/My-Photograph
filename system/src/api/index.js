import axios from "./axios"

export const resLogin = (username, password) => axios({
    method: "POST",
    url: "/user/login",
    data: { username, password }
})

