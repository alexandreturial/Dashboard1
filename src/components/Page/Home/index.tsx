import React from 'react';
import Card from '../../Card';

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
         
        </Card>
        <Card type="UM">
          <div>
            <header id="water">
              <GiWaterDrop/>
              umidade
            </header>
            <main>
            30%
            </main>
          </div>
          <aside>
            <button style={{background:"#E75E52", padding: "5px"}}><RiArrowUpSLine size={25} color="#FFF"/></button>
            <button style={{background:"#D4CEE5", padding: "5px"}}><RiArrowDownSLine size={25}/></button>
          </aside>
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