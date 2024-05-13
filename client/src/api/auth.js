import axios from 'axios'
import { URLAPI } from '../../../src/config'

const API = URLAPI

export const registerRequest = user => axios.post(`${API}/user`, user)

export const loginRequest = user => axios.post(`${API}/login`, user)