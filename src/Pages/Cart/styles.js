import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 35px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead {
    display: flex;
    justify-content: space-between;

    th {
      vertical-align: middle;
      padding: 12px 50px;
    }
  }

  body {
    display: flex;
    background: #fff;
    border-bottom: 1px solid #eee;
    flex-direction: column;
    tr {
      display: flex;
      td {
        padding: 12px 20px;
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
    max-width: 200px;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 20px;
    margin-left: 5px;
  }
`;
