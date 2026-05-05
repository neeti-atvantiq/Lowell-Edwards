import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';
import WhyUsPage from '@/components/pages/WhyUsPage';

export const metadata: Metadata = {
  title: 'Why Us | Lowell Edwards Home Integration, Inc.',
  description: 'Learn why property teams choose Lowell Edwards for delivery quality, support, and dependable maintenance response.',
};

export default function WhyUsRoutePage() {
  return (
    <>
      <Navigation />
      <WhyUsPage />
      <Footer />
      <ChatBot />
    </>
  );
}
