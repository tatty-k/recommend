import tokenService from './tokenService';
const BASE_URL = '/api/groups';

async function index() {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    };
    return await fetch(BASE_URL, options).then(res => res.json());
  }

// function create(group) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(group)
//     };
//     return fetch(BASE_URL, options).then(res => res.json());
//   }

export default { 
    index,

}