import styled from 'styled-components';
import bg from '../../asserts/images/bg-image.jpg';

const StyledSection = styled.section`
  background: url(${bg}) center center no-repeat ;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
`;

const Title = styled.h1`
  color: var(--light);
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 8px;
`;

const Description = styled.h5`
  color: var(--light);
  font-weight: 300;
  text-align: center;
  margin-bottom: 16px;
`;

const styles = {
  StyledSection,
  Container,
  Title,
  Description,
};

export default styles;
