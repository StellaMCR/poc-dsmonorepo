'use client'
import { useState } from 'react'
import { requests } from "toolkit"
import { Button, Header } from "ui"

type RequestGetPayload = {
  data: {
    id: number
    first_name: string
  }
}

export type RequestGetConfig = {
  first_name: string
  id: number
}

const BASE_URL = 'https://reqres.in/api/users'

export default function Page() {

  const [data, setData] = useState<{
    id: number
    first_name: string
  } | undefined>({
    id: 0,
    first_name: 'string'
  })

  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await requests.get<
        RequestGetPayload,
        RequestGetConfig
      >({ url: `${BASE_URL}/2` })
      setData(data.data)
    } catch (error) {
      if (error) {
        alert(error.message)
      }
    }
  }

  return (
    <>
      <Header text={`${data.id} ${data.first_name} `} />
      <Button />
      <button onClick={() => fetchData()}>fetch</button>
    </>
  )
}
