const BASE_URL = '/api/groups';

function index(){
    return fetch(BASE_URL, {mode:'cors'}).then(res => {
        console.log(res)
        return res.json()
    });
}

module.exports = { index }