import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 40px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
`;

export const Texto = styled.div`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.div`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.div`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;