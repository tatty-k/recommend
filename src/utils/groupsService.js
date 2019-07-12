const BASE_URL = '/api/groups';

async function index(){
    return await fetch(BASE_URL, {mode:'cors'}).then(res => {
        console.log(res)
        return res.json()
    });
}

export default { 
    index 
}