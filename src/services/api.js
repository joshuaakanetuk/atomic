import config from '../config'
import TokenService from '../services/token'

const ApiService = {
  getCells() {
    return fetch(`${config.API_ENDPOINT}/cells`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCell(id) {
    return fetch(`${config.API_ENDPOINT}/cells/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  insertCell(cell) {
    return fetch(`${config.API_ENDPOINT}/cells`, {
      method: 'POST',
      body: JSON.stringify(cell),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  updateCell(id, cell) {
    return fetch(`${config.API_ENDPOINT}/cells/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(cell),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :  res.json()
        
      )
  },
  deleteCell(id, cell) {
    return fetch(`${config.API_ENDPOINT}/cells/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(cell),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :  res.json()
        
      )
  },
}

export default ApiService
