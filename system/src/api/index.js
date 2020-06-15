import axios from "./axios"

export const resLogin = (username, password) => axios({
    method: "POST",
    url: "/login",
    data: { username, password }
})