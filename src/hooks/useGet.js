import { useState, useEffect } from 'react'
import { API } from '../config/api'

export const useGet = (url) => {
  const [isInvoke, setInvoke] = useState(true)
  const [data, setData] = useState([])

  const invoke = () => {
    setInvoke(!isInvoke)
  }

  useEffect(() => {
    const getData = async () => {
      const response = await API.get(url)

      if (response.data.status === 'failed') {
        return console.log(`Error: ${response.data.message}`)
      }

      const data = response.data.data
      setData(data)
    }
    getData()
  }, [url, isInvoke])

  return { data, invoke }
}
