import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from '../hooks/scrollToTop';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Home from './Home';
import NotFound from './NotFound';
import { theme } from '../styles';
import '../styles/App.css'
import Projects from './Projects';
import About from './About';

const BodyWrapper = styled.div`
  background-color: var(--main-background);

  @media (max-width: ${theme.breakpoint}px) {
    padding: 2rem 16px 16px 16px;
  }

`

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Sidebar />
      <Header />
      <BodyWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BodyWrapper>
    </Router>
  );
}
