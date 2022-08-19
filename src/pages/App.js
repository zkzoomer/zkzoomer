import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from '../hooks/scrollToTop';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Home from './Home';
import NotFound from './NotFound';
import { theme } from '../styles';
import '../styles/App.css'

const BodyWrapper = styled.div`
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  z-index: 1;

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
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
