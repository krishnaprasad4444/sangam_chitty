import axios from 'axios';
import BASE_API_URL from '../endpoints/config';

const url = BASE_API_URL;

import { getToken } from '../token/tokenService'

export const httpGETRequest = (data) => {
  return axios.get(url, { params: data })
}

export const httpGETRequestWithToken = (data) => {
  const token = getToken();
  return axios.get(url, { headers: { Authorization: `Bearer ${token}` }, params: data })
}

export const httpPOSTRequest = (data) => {
  return axios.post(url, data)
}

export const httpPOSTRequestWithToken = (data) => {
  const token = getToken();
  return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } })
}

export const httpPUTRequest = (data) => {
  return axios.put(url, data)
}

export const httpPUTRequestWithToken = (data) => {
  const token = getToken();
  return axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } })
}

export const httpFileUploadRequest = (folder, data) => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
    params: { folder: folder }
  }
  return axios.post(data, config)
}

export const httpDELETERequest = (data) => {
  return axios.delete(url, { params: data })
}

export const httpDELETERequestWithToken = (data) => {
  const token = getToken();
  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` }, params: data }) 
}