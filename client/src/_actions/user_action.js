import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER
} from './types'

export function loginUser(dataTosubmit) {

    const req = axios.post('/api/users/login', dataTosubmit)
    .then(res => res.data)

    return {
        type: LOGIN_USER,
        payload: req
    }
}

export function registerUser(dataTosubmit) {

    const req = axios.post('/api/users/register', dataTosubmit)
    .then(res => res.data)

    return {
        type: REGISTER_USER,
        payload: req
    }
}