import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryNavbar = styled.nav`
  justify-content: space-around;
  padding: 10px;
  font-family: 'Pretendard-Regular';
`;

export const NavbarUl = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;

export const NavbarLi = styled.li`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active === 'true' ? 'black' : 'gray')}; 
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')}; 
  cursor: pointer;
`;

export const ListBoxWrap = styled.div`
width: 100%;
list-style: none;
display: flex;
justify-content: space-evenly;
padding: 0;
margin: 0;
  
`;

