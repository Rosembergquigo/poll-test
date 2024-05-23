import axios from 'axios'
import { URLAPI } from '../../../src/config'

const API = URLAPI

export const getPollQuestions = async(id) => axios.get(`${API}polls/${id}/questions`)

//export const getRequest = user => axios.post(`${API}/login`, user)