// import './App.css';
import './css/one-page.css'
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/blog';
import BlogContent from './pages/blog-content';

function App() {
  return (  
    <>  
    <Router>
          <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>首頁</Link>
        <Link to="/blog" style={{ marginRight: '1rem' }}>部落格</Link>
      </nav>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/page1" element={<BlogContent />} />
      </Routes>
    </div> 
    </Router>
    <footer>© 2025 Alyse Wang. All rights reserved.</footer>
    </>
  );
}

export default App;
