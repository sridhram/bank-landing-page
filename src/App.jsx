import { useState } from 'react';
import './App.css';
import Business from './components/Business';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Business />
    </main>
  );
}

export default App;
