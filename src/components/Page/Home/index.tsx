import React from 'react';
import Card from '../../Card';
import ClimaInfo from '../../ClimaInfo';

import {
  Container,
  Title,
  MainData

} from './styles';

const Home: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>My Dashboard</Title>
      <MainData>
        <Card type="TM">
          <ClimaInfo/>
        </Card>
        <Card type="UM">
          <ClimaInfo/>
        </Card>
        <Card type="GR1">
          GR1
        </Card>
        <Card type="GR2">
          GR2
        </Card>
      </MainData>
    </Container>
  );
}

export default Home;