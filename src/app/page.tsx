'use client';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import Solution from '@/components/sections/Solution';
import LTE from '@/components/sections/LTE';
import Personas from '@/components/sections/Personas';
import Products from '@/components/sections/Products';
import Gallery from '@/components/sections/Gallery';
import Installations from '@/components/sections/Installations';
import WhyUs from '@/components/sections/WhyUs';
import CTAStrip from '@/components/sections/CTAStrip';
import Quote from '@/components/sections/Quote';
import ChatBot from '@/components/ui/ChatBot';

export default function Home() {
  useRevealOnScroll();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <WhyUs />
        <Installations />
        <Solution />
        <Personas />
        <Products />
        {/* <Gallery /> */}
        <LTE />
        <CTAStrip />
        <Quote />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
