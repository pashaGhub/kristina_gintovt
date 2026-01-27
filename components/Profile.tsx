'use client';
import Image from 'next/image';
import kristina from '@/public/kristina.jpeg';
import { useEffect, useRef, useState } from 'react';

export function Profile() {
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
      { threshold: 0.5 },
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
      className="relative min-h-screen bg-linear-to-b from-slate-50 to-orange-50 py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* Image - Left Side */}
          <div className="w-full md:w-2/5 shrink-0">
            <div className="relative aspect-3/4 w-full max-w-md mx-auto">
              <Image
                src={kristina}
                alt="Kristina - Professional Psychologist"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Description - Right Side */}
          <div className="w-full md:w-3/5">
            <div
              className={`bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-16 opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light text-teal-800 mb-4">
                Susipažinkite su Kristina
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-teal-800 rounded-full mb-6"></div>

              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Sveiki! Aš esu Kristina, licencijuota psichologė, padedanti
                žmonėms įveikti gyvenimo iššūkius ir atrasti vidinę stiprybę.
                Turiu daugiau nei 10 metų patirties klinikinėje psichologijoje
                ir teikiu užjaučiančią, įrodymais pagrįstą pagalbą, pritaikytą
                Jūsų unikalių poreikiams.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Mano metodas derina kognityvinio elgesio terapiją, sąmoningumo
                technikas ir į asmenį orientuotą konsultavimą, kad sukurčiau
                saugią, palaikančią aplinką, kurioje galėtumėte tyrinėti savo
                mintis, emocijas ir tikslus be vertinimo.
              </p>

              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-light text-teal-800 mb-4">
                  Specializacijos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Nerimo ir Streso Valdymas',
                    'Depresijos Gydymas',
                    'Santykių Konsultavimas',
                    'Asmeninis Augimas',
                    'Trauma ir PTSV',
                    'Gyvenimo Pokyčiai',
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-teal-800"></div>
                      <span className="text-gray-800">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-700">
                  <strong>Kvalifikacija:</strong> Licencijuota Klinikinė
                  Psichologė (MA, PhD) • Amerikos Psichologijos Asociacijos Narė
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
