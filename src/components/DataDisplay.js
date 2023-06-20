import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DataDisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const ImageContainer = styled.div`
  margin: 0.5rem;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 4px;
`;

const NoImagesMessage = styled.p`
  text-align: center;
  color: white;
`;

const YouAskedMessage = styled.h2`
  text-align: center;  
  color: #ff7f00;
`;

const DataDisplay = () => {
  const { loading, data, error } = useSelector((state) => state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.data || data.data.length === 0) {
    return null;
  }

  const images = data.data;

  return (
    <div>
      <YouAskedMessage>You Asked For It</YouAskedMessage>
      <DataDisplayContainer>
        {images.map((image) => (
          <ImageContainer key={image.id}>
            <Image src={image.images.original.url} alt={image.title} />
          </ImageContainer>
        ))}
      </DataDisplayContainer>
    </div>
  );
};

export default DataDisplay;



