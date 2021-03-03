import {useCallback, useState} from 'react'
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setLoading(true)
    try {

      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      let data
      let response

      if (method == 'GET') {
        response = await axios.get(url, {method})
        data = await response
        console.log('response', response)
        if (!response.statusText) {
          throw new Error(data.message || "Что-то пошло не так")
        }
      } else {
        response = await fetch(url, {method, body, headers})
        data = await response.json()
        console.log('response', response)
        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так")
        }
      }

      setLoading(false)
      return data

    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearErrors = () => setError(null)

  return {loading, request, error, clearErrors}

}