import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/main/Main';
import Splash from '../pages/splash/Splash';
import Category from '../pages/category/Category';
import CustomSentence from '../pages/customSentence/CustomSentence';
import Result from '../pages/result/Result';
import TextInput from '../pages/textInput/TextInput';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/customSentence" element={<CustomSentence />} />
        <Route path="/result" element={<Result />} />
        <Route path="/textInput" element={<TextInput />} />
      </Routes>
    </BrowserRouter>
  );
}
