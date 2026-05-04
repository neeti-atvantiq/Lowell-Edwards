'use client';
import { useEffect } from 'react';
import ContactBar from '@/components/layout/ContactBar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import Solution from '@/components/sections/Solution';
import LTE from '@/components/sections/LTE';
import Personas from '@/components/sections/Personas';
import Finder from '@/components/sections/Finder';
import Products from '@/components/sections/Products';
import Gallery from '@/components/sections/Gallery';
import Installations from '@/components/sections/Installations';
import WhyUs from '@/components/sections/WhyUs';
import Compare from '@/components/sections/Compare';
import CTAStrip from '@/components/sections/CTAStrip';
import Quote from '@/components/sections/Quote';
import ChatBot from '@/components/ui/ChatBot';

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <ContactBar />
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <Solution />
        <LTE />
        <Personas />
        <Finder />
        <Products />
        <Gallery />
        <Installations />
        <WhyUs />
        <Compare />
        <CTAStrip />
        <Quote />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
