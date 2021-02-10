import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100%;

  display:flex;
  justify-content: space-between;
  align-items: center;
  
  header{
    svg{
      color:  ${props =>props.theme.colors.purple};
      margin-right: 10px;
    }
  }
  
  main{
    font: 500 25px poppins;
    text-align:center;
  }

  aside{
    height: 100%;
    

    button{
        border-radius: 5px;
        margin: 2px 0;
       
        display:flex;
        align-items: center;
        
    }

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
  }
`;
