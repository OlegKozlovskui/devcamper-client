import React from 'react';
import styles from './style';
import SearchForm from './components/SearchForm';

const { StyledSection, Container, Title, Description } = styles;

const Home = () => {
  return (
    <StyledSection>
      <Container>
        <Title>
          Find a Code Bootcamp
        </Title>
        <Description>
          Find, rate and read reviews on coding bootcamps
        </Description>
        <SearchForm />
      </Container>
    </StyledSection>
  );
};

export default Home;
