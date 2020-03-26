import axios from 'axios';
import Constants, { GetEndpoint } from '../common/constants';

const ASSETS_API_URL = GetEndpoint(Constants.API_ENDPOINTS.ASSETS);

export const getAssets = async () => {
  const response = await axios.get(ASSETS_API_URL)
  return response.data
}
export const getLastAssets = async () =>{
  const response = await axios.get(`${ASSETS_API_URL}/Last`)
  return response.data
}

export const postAssets = async (asset) => {
  const response = await axios.post(ASSETS_API_URL, asset)
  return response.data
}

export const putAssets = async (asset) =>{
  const  response = await axios.put(`${ASSETS_API_URL}/${asset.id}`,asset)
  return response
}

export const getAssetsById = async (id) => {
  const response = await axios.get(`${ASSETS_API_URL}/${id}`)
  return response.data
}
