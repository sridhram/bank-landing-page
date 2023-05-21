import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
