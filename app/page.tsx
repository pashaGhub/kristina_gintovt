import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Mountain } from '@/components/Mountain';
import { Profile } from '@/components/Profile';
import { Service } from '@/components/Service';

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <Hero />
      {/* Info Section */}
      <section>
        <Profile />
        <Mountain />
        <Service />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-linear-to-b from-slate-50 to-teal-50 py-20"
      >
        <Contact />
      </section>
    </div>
  );
}
