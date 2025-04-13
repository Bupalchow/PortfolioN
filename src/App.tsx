import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Timeline from './pages/timeline';
import Hero from './components/Hero'
import Speaking from './pages/Speaking';

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
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;