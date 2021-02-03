import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  height: 6.5rem;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledHeader = styled.header`
  text-align: center;
  color: black;
  font-weight: 700;
  font-size: 3rem;
`

const Header = () => {
  return (
    <div className="ui container">
      <StyledDiv>
        <StyledHeader>Coin Exchange</StyledHeader>
        <i className="fas fa-coins fa-2x"></i>
      </StyledDiv>
    </div>
  )
}

export default Header
