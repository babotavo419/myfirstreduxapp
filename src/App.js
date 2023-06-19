import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar';
import DataDisplay from './components/DataDisplay';

import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const App = () => {
  const { loading, error } = useSelector((state) => state);

  return (
    <AppContainer>
      <h1 style={{ color: '#ff7f00' }}>Enter if you dare</h1>
      <SearchBar />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <DataDisplay />
    </AppContainer>
  );
};

export default App;

