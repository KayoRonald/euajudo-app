import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-size: 16px;
  height: 100%;
  overflow-x: hidden;
  color: #fff;
}
a {
  color: inherit;
  text-decoration: none;
}
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-track {
  background: black;
}
body::-webkit-scrollbar-thumb {
  background: #454545;
  border-radius: 3px;
}
body::-webkit-scrollbar-thumb:hover {
  background: grey;
}
#id1,
#id2 {
  margin: 0 auto;
  width: 394px!important
}
.chakra-accordion {
  div:last-child {
    border-bottom-width: 0 !important;
  }
}
*:focus{
  box-shadow: none !important;
  text-decoration: none !important;
}
`;
