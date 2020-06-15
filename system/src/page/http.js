
// export const apiurl = 'http://localhost:1915/api';
export const apiurl = 'http://10.3.135.25:1915/api';

const get = async (url,params)=>{
    const res = await fetch(apiurl + url);
    return res.json();
}


export default {
    get
}
