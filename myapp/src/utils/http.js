// 把请求都封装为一个模块
export const apiurl = 'http://localhost:1912/goods'

async function get(url){
    const res = await fetch(apiurl + url)
    return res.json()
}

export default {
    get
}