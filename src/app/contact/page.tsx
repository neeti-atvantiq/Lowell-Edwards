import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactPage from '@/components/sections/Contact';
import ChatBot from '@/components/ui/ChatBot';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function Contact() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <ContactPage />
      <Footer />
      <ChatBot />
    </>
  );
}
