import axios from 'axios'
import {
    LOGIN_USER
} from './types'

export function loginUser(dataTosubmit) {

    const req = axios.post('/api/users/login', dataTosubmit)
    .then(res => res.data)

    return {
        type: LOGIN_USER,
        payload: req
    }
}