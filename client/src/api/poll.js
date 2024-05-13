import axios from 'axios'
import { URLAPI } from '../../../src/config'

const API = URLAPI

export const getPollRequest = async(id) => axios.get(`${API}/polls/${id}/question`)

//export const getRequest = user => axios.post(`${API}/login`, user)