import React from 'react';
import PieChart from '../../components/Piechart';
import Card from '../../components/Card';
import ClimaInfo from '../../components/ClimaInfo';
import Barchart from '../../components/Barchart';

import {
  Container,
  Title,
  MainData

} from './styles';

const Home: React.FC = () => {
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
          <Barchart/>
        </Card>
        <Card type="GR2">
          <PieChart/>
        </Card>
      </MainData>
    </Container>
  );
}

export default Home;