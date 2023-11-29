
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import HomePage  from './HomePage';

function App() {
  return (
    <div className="App">
    <header>
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/function">Function Component</Link>
              </li>
              <li>
                <Link to="/class">Class Component</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/function" element={<FunctionComponent />} />
            <Route path="/class" element={<ClassComponent />} />
          </Routes>
        </div>
      </Router>
    </header>
    </div>
  );
}

export default App;
