
import './App.css';

import React from 'react';
import styled from 'styled-components';
import Map from './components/Map';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => (
  <Container>
    <Map />
  </Container>
);

export default App;