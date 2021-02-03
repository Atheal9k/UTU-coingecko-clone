import React from "react"
import styled from "styled-components"

interface Props {
  data: object[]
}

interface CoinObject {
  image?: any
  id?: string
  name?: string
  price_change_percentage_24h_in_currency?: number
  current_price?: number
  market_cap?: number
}

const Div = styled.div`
  margin-top: 1.3rem;
`

const Table: React.FC<Props> = ({ data }) => {
  const formatPercent = (number: number | undefined) =>
    `${new Number(number).toFixed(2)}%`

  const formatDollar = (
    number: any,
    maximumSignificantDigits: number | undefined
  ) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number)

  return (
    <Div className="ui container">
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24H Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: CoinObject) => (
            <tr key={coin.id}>
              <td>
                <img
                  src={coin.image}
                  style={{ width: 25, height: 25, marginRight: 10 }}
                />
                {coin.name}
              </td>

              <td>{formatDollar(coin.current_price, 20)}</td>
              <td>
                <span
                  className={
                    coin.price_change_percentage_24h_in_currency &&
                    coin.price_change_percentage_24h_in_currency > 0
                      ? "text-success"
                      : "text-danger"
                  }>
                  {formatPercent(coin.price_change_percentage_24h_in_currency)}
                </span>
              </td>
              <td>{formatDollar(coin.market_cap, 12)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Div>
  )
}

export default Table
