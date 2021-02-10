import React from 'react';
import Aside from '../Aside';
import Content from '../Content';

import { 
    Container,

} from './styles';

const Layout: React.FC = ({children}) => {
  return (
      <Container>
        <Aside/>
        <Content>
          {children}
        </Content>
      </Container>
  );
}

export default Layout;