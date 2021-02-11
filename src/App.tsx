import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlocalStyles from './styles/global';

import { useTheme } from './hooks/Theme';
import Layout from './components/Layout';
import Home from './Page/Home';


const App: React.FC = () => {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
    <GlocalStyles/>
      <Layout>
        <Home/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;