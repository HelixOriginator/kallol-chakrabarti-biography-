import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Concepts from './components/Concepts';
import Portfolio from './components/Portfolio';
import Assistant from './components/Assistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links and IntersectionObserver for animations
  useEffect(() => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            targetElement?.scrollIntoView({
                behavior: 'smooth'
            });
        }
      });
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Delay observation slightly to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Hero />
      <Stats />
      <About />
      <Concepts />
      <Portfolio />
      <Assistant />
      <Footer />
    </div>
  );
};

export default App;