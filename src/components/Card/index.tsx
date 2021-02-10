import React from 'react';

import { Container } from './styles';

interface ICardProps{
  type: string
}

const Card: React.FC<ICardProps> = ({type, children}) => {
  return (
      <Container type={type}>
          {children}
      </Container>
  );
}

export default Card;