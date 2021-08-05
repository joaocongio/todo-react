import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;

    h1 {
      font-size: 22px;
    }
`

export const Search = styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
      border-radius: 10px 0 0 10px;
      width: 100%;
    }

    button {
      border-radius: 0 10px 10px 0;
      background-color: green;
      font-weight: 700;
      color: #fff;
    }
`