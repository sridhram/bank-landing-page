import { useState } from 'react';
import './App.css';
import Business from './components/Business';
import CardDeal from './components/CardDeal';
import Footer from './components/Footer';
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
      <Footer />
    </main>
  );
}

export default App;
