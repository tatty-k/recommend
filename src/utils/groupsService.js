import tokenService from './tokenService';

const BASE_URL = '/api/groups';

async function index() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    };
    return await fetch(BASE_URL, options).then(res => res.json());
  }

async function deleteGroup(groupId) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify({id: groupId})
    };
    return await fetch(BASE_URL, options)
    .then(res => res.json())
    .then(json => {
      if (json.deleted === true) {
        return true;
      }
      return false;
      // console.log("json", json) 
    });
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
    deleteGroup
}