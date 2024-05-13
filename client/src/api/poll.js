import axios from 'axios'
import { URLAPI } from '../../../src/config'

const API = URLAPI

export const getPollRequest = async() => axios.get(`${API}/polls`)

export const getRequest = user => axios.post(`${API}/login`, user)