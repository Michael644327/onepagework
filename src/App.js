// import './App.css';
import './one-page.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/blog';
import BlogContent from './pages/blog-content';

function App() {
  return (  
    <>  
    <Router>
          <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/onepagework" style={{ marginRight: '1rem' }}>首頁</Link>
        <Link to="/onepagework/blog" style={{ marginRight: '1rem' }}>部落格</Link>
      </nav>
    <div className="App">
    {/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>00
      </header>*/}
      <Routes>
        <Route path="/onepagework" element={<Home />} />
        <Route path="/onepagework/blog" element={<Blog />} />
        <Route path="/onepagework/blog/page1" element={<BlogContent />} />
      </Routes>
    </div> 
    </Router>
    <footer>© 2025 Alyse Wang. All rights reserved.</footer>
    </>
  );
}

export default App;
