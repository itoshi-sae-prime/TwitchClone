import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SidebarNav from './components/SidebarNav';

function App() {
  return (
    <div className="App">
      <div className=''>
        <Navbar />
        <div className="flex">
          <SidebarNav />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
