import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TagsPage } from './pages/TagsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tags" element={<TagsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
