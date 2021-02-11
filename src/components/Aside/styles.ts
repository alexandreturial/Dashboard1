import styled from 'styled-components';

export const Container = styled.div`
  display:none;


  @media(min-width: 700px){
    grid-area: AS;

    width:100%;
    height:100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

   
  }
`;


export const Lista = styled.ul`
  list-style: none;
  width: 100%;
  
  padding-left: 25%;

  li{
  
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    
    font: 600 15px Poppins;
    color: ${props => props.theme.colors.secundary};
    
    &:hover{
      color: ${props => props.theme.colors.purple};
    }

    ::after{
        width: 3px;
        content: '';
        display: block;
        
        border-bottom: 35px solid ${props => props.theme.colors.purple};
        box-shadow:0px 0px 2px 0px #622ec3;
       

        align-items: flex-end;
    }
  }
`;