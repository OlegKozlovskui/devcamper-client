import React from 'react';
import styles from './style';
import SearchForm from './components/SearchForm';

const { StyledSection, Container, Title, Description } = styles;

const Home = () => {
  const handleSearch = (searchData) => {
    console.log(searchData);
  };
  return (
    <StyledSection>
      <Container>
        <Title>
          Find a Code Bootcamp
        </Title>
        <Description>
          Find, rate and read reviews on coding bootcamps
        </Description>
        <SearchForm onSearch={handleSearch}/>
      </Container>
    </StyledSection>
  );
};

export default Home;
