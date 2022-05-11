import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  width: 100%;
  background: var(--bg-primary);
`;

const Container = styled.div`
  max-width: 1140px;
  padding: 16px 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Link)`
  color: var(--light);
  font-size: 20px;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  & > svg {
    margin-right: 5px;
    height: 23px;
    width: 23px;
  }
`;

const Nav = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  
  & > a {
    padding: 0 8px;
    text-decoration: none;
    color: rgba(255,255,255,0.5);
    font-size: 16px;
    transition: color ease-in-out 0.3s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    
    &.active, &:hover {
      color: rgba(255,255,255,0.75);
    }
    
  }
`;

const styles = {
  StyledHeader,
  Container,
  StyledLogo,
  Nav,
};

export default styles;

