import axios from "axios";
import { URLAPI } from "../../../src/config.js";

const instance = axios.create({
  baseURL: URLAPI,
  withCredentials: true,
});

export default instance;