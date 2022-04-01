import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
