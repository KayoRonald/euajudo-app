import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  place-items: center;
  -webkit-box-align: center;
  display: grid;
  grid-row: start / start;
   margin-top: 33px;
  img {
    width: 480px;
  }
  .text {
    width: 300px;
    text-align: center;
  }
  .button {
    padding: 0.5em;
    background-color: color("light");
    transition: 0.5s;
    cursor: pointer;
    font-weight: bold;
    border-radius: 25px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: none;
  }
`;
