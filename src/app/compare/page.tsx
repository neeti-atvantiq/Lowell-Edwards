import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';
import ComparePage from '@/components/pages/ComparePage';

export const metadata: Metadata = {
  title: 'Compare Systems | Lowell Edwards Home Integration, Inc.',
  description: 'Compare ButterflyMX, Akuvox, and DoorBird feature support to pick the best fit for your building.',
};

export default function CompareRoutePage() {
  return (
    <>
      <Navigation />
      <ComparePage />
      <Footer />
      <ChatBot />
    </>
  );
}
