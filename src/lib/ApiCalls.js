const API_URL = process.env.REACT_APP_API_PROD || process.env.REACT_APP_API_LOCAL

export const fetchData = async (path, params) => {
  let response = await fetch(`${API_URL}${path}?populate=*&${params || ''}`)
  let result = await response.json()
  return result.data
}
