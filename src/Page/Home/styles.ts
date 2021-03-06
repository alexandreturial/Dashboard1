import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 5px 15px;

`;
export const Title = styled.h2`
    width:100%;
`;

export const MainData = styled.main`
  flex:1;
  
  display: grid;
  
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr 2fr 2fr;  
  
  grid-gap: 20px;
  
  grid-template-areas:
  'TM'
  'UM'
  'GR1'
  'GR2';
  
  @media(min-width: 700px){
    grid-template-columns: 1fr 2fr; 
    grid-template-rows: 1fr 1fr 3fr;  
  
    grid-gap: 20px;
    
    grid-template-areas:
    'TM GR1'
    'UM GR1'
    'GR2 GR2';
  }
`;
