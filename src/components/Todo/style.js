import styled from "styled-components";

export const List = styled.section`
  margin-top: 50px;
`
export const Item = styled.div`
  padding: 20px 10px;
  margin: 15px 0;
  background: ${(props) => props.done ? 'green' : '#fff'};
  color: ${(props) => props.done ? '#fff' : "#222"};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 15px;
  }

  svg {
    fill: ${({ done }) => done ? '#fff' : '#222'};
    cursor: pointer;
  }
`