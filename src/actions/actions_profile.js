export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_FETCHED';

export function fetchProfile() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 8103951cdd68b7e88db49543d9a95868f4d18a87"});
    return fetch('https://api.github.com/users/Oscar6', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }
}

export function saveProfile(profile) {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 8103951cdd68b7e88db49543d9a95868f4d18a87"});
    return fetch('https://api.github.com/user', {
      method: 'PATCH',
      headers: header,
      body : JSON.stringify(profile)
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}
