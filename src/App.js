// Components
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Create from './components/Create/Create';
import State from './components/State/State';

// Dependencies
import { Routes, Route, Link } from 'react-router-dom';

// Styling

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/:state' element={<State />} />
        <Route path='/:state/:user' element={<Users />} /> 
        <Route path='/create' element={<Create />} />
      </Routes>
    </main>
  );
}

export default App;
