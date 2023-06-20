import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './components/SearchBar';
import DataDisplay from './components/DataDisplay';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  color: #ff7f00;
  text-align: center;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Message = styled.p`
  color: #ff7f00;
`;

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { loading, error, data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(fetchData(query));
    setShowMessage(false);
  };

  return (
    <AppContainer>
      <Heading>Enter If You Dare</Heading>
      <SearchBar onSearch={handleSearch} />
      {showMessage && (
        <MessageContainer>
          <Message>You asked for it</Message>
        </MessageContainer>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <DataDisplay />}
    </AppContainer>
  );
};

export default App;




