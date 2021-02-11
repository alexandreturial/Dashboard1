import React from 'react';

import { Container, Lista } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>User</h3>
      </div>
      <Lista>
        <li>Dashboard</li>
        <li>Prototipo</li>
        <li>Relatorio</li>
      </Lista>
      <div>
        <h3>Sair</h3>
      </div>
    </Container>
  );
}

export default Aside;