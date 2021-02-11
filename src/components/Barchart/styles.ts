import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: 100%;
  
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center; 

  @media(min-width: 700px){
    width: 90%;
    height: 100%;
  }
`;
