import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';
import AboutUsPage from '@/components/pages/AboutUsPage';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Us | Lowell Edwards Home Integration, Inc.',
  description: 'Since 1978, Lowell/Edwards has been installing reliable technology for residential and commercial properties. Since 2019, focused on intercom, video entry, and access control systems.',
};

export default function AboutRoutePage() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <AboutUsPage />
      <Footer />
      <ChatBot />
    </>
  );
}
