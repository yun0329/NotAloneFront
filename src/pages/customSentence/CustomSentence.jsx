import { useParams } from 'react-router-dom';
import { CategoryNavbar, NavbarLi, NavbarUl, NavLink } from './CustomSentence.style';
import LionHeader from '../../components/lionHeader/LionHeader';

export default function CustomSentence() {
  const { category } = useParams();

  return (
    <>
      <LionHeader />
      <CategoryNavbar>
        <NavbarUl>
          <NavbarLi><NavLink to="/customSentence/alone" active={category === 'alone' ? 'true' : 'false'}>혼자 살기</NavLink></NavbarLi>
          <NavbarLi><NavLink to="/customSentence/delivery" active={category === 'delivery' ? 'true' : 'false'}>배달 주문</NavLink></NavbarLi>
          <NavbarLi><NavLink to="/customSentence/langBarrier" active={category === 'langBarrier' ? 'true' : 'false'}>언어 장벽</NavLink></NavbarLi>
        </NavbarUl>
      </CategoryNavbar>
    </>
  );
}