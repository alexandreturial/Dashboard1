import styled from 'styled-components';


interface IContainerProps{
  type: string
}

export const Container = styled.div<IContainerProps>`
  grid-area: ${props => props.type};
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.white};
  box-shadow: 4px 2px 5px 0px #d2d4da;

  border-radius: 10px;
  padding: 25px 10px;

  display:flex;
  justify-content: space-between;
  align-items: center;
  
  color: ${props =>props.theme.colors.secundary};

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
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
  }
`;
