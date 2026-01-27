import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Mountain } from '@/components/Mountain';
import { Profile } from '@/components/Profile';

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <Hero />
      {/* Info Section */}
      <section>
        <Profile />
        <Mountain />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-linear-to-br from-orange-50 to-slate-50 py-20"
      >
        <Contact />
      </section>
    </div>
  );
}
