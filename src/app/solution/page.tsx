import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';
import SolutionPage from '@/components/pages/SolutionPage';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Solutions | Lowell Edwards Home Integration, Inc.',
  description: 'Explore Lowell Edwards integrated intercom and access control solutions for multifamily and commercial properties.',
};

export default function SolutionsRoutePage() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'Solutions' }]} />
      <SolutionPage />
      <Footer />
      <ChatBot />
    </>
  );
}
