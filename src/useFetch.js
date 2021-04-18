import { useEffect, useState } from "react"

const useFetch = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setIsPending(true)
      setTimeout(async () => {
        try {
          const response = await fetch(url)
          // console.log(response)
          if (!response.ok) {
            const message = `An error has occured: ${response.status}`
            throw new Error(message)
          }
          let data = await response.json()
          setData(data)
          setIsPending(false)
        } catch (e) {
          // const message = `An error has occured: ${error.message}`
          // throw new Error(error)
          // console.log(e.message)
          setIsPending(false)
          setError(e.message)
        }
      }, 1000)
    }
    fetchData()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
