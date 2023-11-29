import { useNavigate } from 'react-router-dom';
import LionMessage from '../../components/lionHeader/LionHeader';
import { CategoryContainer } from './CategoryPage.style';
import Category from '../../components/category/Category';

export default function CategoryPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/customSentence/${category}`);
  };

  return (
    <>
      <LionMessage />
      <CategoryContainer>
        <strong>맞춤 카테고리 선택</strong>
        <Category category="alone" onClick={() => handleCategoryClick('alone')} />
        <Category category="delivery" onClick={() => handleCategoryClick('delivery')} />
        <Category category="langBarrier" onClick={() => handleCategoryClick('langBarrier')} />
      </CategoryContainer>
    </>
  );
}