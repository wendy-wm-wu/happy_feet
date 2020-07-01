import React from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Search />
    </div>
  );
}

export default App;
