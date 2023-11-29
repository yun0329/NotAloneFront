import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceInfo from '../pages/serviceInfo/ServiceInfo';
import Main from '../pages/main/Main';
import Splash from '../pages/splash/Splash';
import Category from '../pages/categoryPage/CategoryPage';
import Result from '../pages/result/Result';
import TextInput from '../pages/textInput/TextInput';
import CustomSentence from '../pages/customSentence/CustomSentence';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/serviceInfo" element={<ServiceInfo />} />
        <Route path="/main" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/customSentence/:category" element={<CustomSentence />} />
        <Route path="/result" element={<Result />} />
        <Route path="/textInput" element={<TextInput />} />
      </Routes>
    </BrowserRouter>
  );
}
