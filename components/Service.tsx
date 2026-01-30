'use client';
import forestRoute from '@/public/forest_route.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function Service() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-linear-to-b from-orange-50 to-slate-50 py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <h2
              className={`text-4xl md:text-5xl font-light text-teal-800 text-center mb-4 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              Konsultacijos
            </h2>
            <div
              className={`w-24 h-1 bg-linear-to-r from-orange-400 to-teal-800 mx-auto rounded-full transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
            ></div>
          </div>

          {/* First Section - Image Right with Text */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24">
            {/* Image */}
            <div
              className={`w-full md:w-2/5 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-16 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-4 bg-linear-to-br from-amber-200 to-teal-800 rounded shadow-2xl transform -rotate-1 md:-rotate-2"></div>
                <div className="relative aspect-3/4 w-full rounded overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={forestRoute}
                    alt="Miško takas"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`w-full md:w-3/5 space-y-6 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Konsultuoju suaugusius (nuo 18 metų). <br /> Dirbu
                  individualiai, atsižvelgdama į kiekvieno žmogaus situaciją,
                  poreikius ir tempą.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-teal-800 mb-4">
                  Kaip vyksta konsultacijos
                </h3>
                <ul className="space-y-2 text-base md:text-lg text-gray-800">
                  <li className="flex items-start">
                    <span className="text-teal-800 mr-3 font-bold">•</span>
                    <span>Vienos konsultacijos trukmė – 50 minučių</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-800 mr-3 font-bold">•</span>
                    <span>Kaina – 50 Eur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-800 mr-3 font-bold">•</span>
                    <span>
                      Konsultacijos vyksta gyvai Spaudos rūmuose, Vilniuje
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-800 mr-3 font-bold">•</span>
                    <span>Konsultuoju lietuvių ir lenkų kalbomis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Section - Text Only (Two Columns on Desktop) */}
          <div className="flex flex-col md:flex-row gap-12 mb-24">
            {/* Left Column - Darbo metodai */}
            <div
              className={`w-full md:w-1/2 space-y-4 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-light text-teal-800 mb-4">
                Darbo metodai
              </h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Savo darbe daugiausia remiuosi kognityvine elgesio terapija
                (KET). Taip pat taikau:
              </p>
              <ul className="space-y-2 text-base md:text-lg text-gray-800 mb-4">
                <li className="flex items-start">
                  <span className="text-teal-800 mr-3 font-bold">•</span>
                  <span>schemų terapijos metodus;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-800 mr-3 font-bold">•</span>
                  <span>dėmesingo įsisąmoninimo (mindfulness) praktikas;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-800 mr-3 font-bold">•</span>
                  <span>atjauta grįstos terapijos elementus.</span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed italic">
                Metodus derinu individualiai, atsižvelgdama į žmogaus patirtį ir
                poreikius.
              </p>
            </div>

            {/* Right Column - Su kokiais klausimais */}
            <div
              className={`w-full md:w-1/2 space-y-4 transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-light text-teal-800 mb-4">
                Su kokiais klausimais dirbu
              </h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                Konsultacijose dažniausiai dirbame su:
              </p>
              <ul className="space-y-2 text-base md:text-lg text-gray-800">
                {[
                  'savivertės ir nepasitikėjimo savimi klausimais;',
                  'nerimu ir įtampa;',
                  'savižalos patirtimis;',
                  'santykių sunkumais ir krizėmis;',
                  'nemiga;',
                  'potrauminio streso sutrikimu (PTSD, cPTSD);',
                  'vienišumo jausmu;',
                  'perfekcionizmu;',
                  'depresija.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-800 mr-3 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Closing Note */}
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out delay-900 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light italic">
              Jei nesate tikri, ar jūsų sunkumai patenka į šį sąrašą – tai
              nebūtina kliūtis pradėti pokalbį.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
