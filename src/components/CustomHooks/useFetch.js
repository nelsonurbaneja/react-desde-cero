import { useState, useEffect } from 'react'

const useFetch = (url,initialState) => {
  
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = () => {
    setLoading(true)
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch( error => {
      setLoading(false)
      setError(error)
    })
  }

  useEffect( () => {
    getData()
    console.log('ejecutado!')
  }, [])
  
  return {
    data,
    loading,
    error
  }

}

export default useFetch