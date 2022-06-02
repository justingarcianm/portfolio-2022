const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_API_PROD_URI || process.env.NEXT_PUBLIC_API_LOCAL_URI

export const fetchData = async (path, params) => {
  let response = await fetch(
    `${STRAPI_API_URL}${path}${params || '?populate=*'}`
  )
  let result = await response.json()
  return result.data
}

export const sendData = async data => {
  let response = await fetch(`${STRAPI_API_URL}messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
  return await response
}
