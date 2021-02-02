import React, { useEffect, useState } from "react"
import coingecko from "../apis/coingecko"
import Table from "./table"
import { AxiosResponse } from "axios"

const App: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await coingecko.get("", {
        params: {
          order: "market_cap_desc",
          price_change_percentage: "24h,7d",
        },
      })

      if (response.data) {
        setData(response.data)
        console.log(response.data)
      }
    }
    setInterval(getData, 5000)
  }, [])

  return (
    <div>
      <Table data={data} />
    </div>
  )
}

export default App