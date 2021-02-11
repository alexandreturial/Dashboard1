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

  color: ${props =>props.theme.colors.secundary};
  
  
`;
