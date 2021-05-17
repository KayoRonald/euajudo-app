import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: color("dark", "darkest");
  color: color("light");
  padding: 3rem;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-row: start;
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