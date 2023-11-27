import axios from 'axios'

export const useAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  transformResponse: (data) => JSON.parse(data),
})

useAxios.interceptors.response.use(
  ({ data }) => data,
  () => Promise.reject([])
)
