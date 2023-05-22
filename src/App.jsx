import { useState } from 'react';
import './App.css';
import Business from './components/Business';
import CardDeal from './components/CardDeal';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Business />
      <CardDeal />
      <Testimonials />
    </main>
  );
}

export default App;
