const Constants = Object.freeze({
  API_DEV_URL: 'https://localhost:44399/api',
  API_ENDPOINTS:{
    ASSETS:'assets',
  }
})

export const GetEndpoint = (endpoint) => {
  return `${Constants.API_DEV_URL}/${endpoint}`
}

export default Constants
