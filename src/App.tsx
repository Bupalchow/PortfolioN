import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Uses from './pages/Uses';
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/uses" element={<Uses />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;