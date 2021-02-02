import React from "react"

interface Props {
  data: object[]
}

interface CoinObject {
  id?: string
  symbol?: string
  price_change_percentage_24h_in_currency?: number
  current_price?: number
  market_cap?: number
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>24H Change</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: CoinObject) => (
            <tr key={coin.id}>
              <td>{coin.symbol}</td>
              <td>{coin.price_change_percentage_24h_in_currency}</td>
              <td>{coin.current_price}</td>
              <td>{coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
