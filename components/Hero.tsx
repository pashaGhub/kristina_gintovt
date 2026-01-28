'use client';
import { useEffect, useState } from 'react';
import plant from '@/public/plant.png';

export function Hero() {
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [heroBgVisible, setHeroBgVisible] = useState(false);

  useEffect(() => {
    // Trigger background slide-in first
    setTimeout(() => setHeroBgVisible(true), 100);
    // Then trigger text slide-in
    setTimeout(() => setHeroTextVisible(true), 400);
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden bg-linear-to-br from-orange-50 via-peach-50 to-teal-50">
      {/* Background Image with Slide Animation */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          heroBgVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="w-full h-full bg-linear-to-br from-orange-200 via-amber-200 to-teal-300"
          style={{
            backgroundImage: `url(${plant.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Diagonal Separator mobile */}
      <div
        className={`md:hidden absolute inset-0 bg-linear-to-br from-amber-50/45 via-orange-50/45 to-teal-50/95 transition-all duration-1000 ease-out ${
          heroBgVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 5% 100%)',
        }}
      />

      {/* Diagonal Separator tablet */}
      <div
        className={`hidden md:block lg:hidden absolute inset-0 bg-linear-to-br from-amber-50/45 via-orange-50/45 to-teal-50/95 transition-all duration-1000 ease-out ${
          heroBgVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
        style={{
          clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 12% 100%)',
        }}
      />

      {/* Diagonal Separator large */}
      <div
        className={`hidden lg:block xl:hidden absolute inset-0 bg-linear-to-br from-amber-50/45 via-orange-50/45 to-teal-50/95 transition-all duration-1000 ease-out ${
          heroBgVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
        style={{
          clipPath: 'polygon(32% 0, 100% 0, 100% 100%, 22% 100%)',
        }}
      />

      {/* Diagonal Separator xl */}
      <div
        className={`hidden xl:block absolute inset-0 bg-linear-to-br from-amber-50/45 via-orange-50/45 to-teal-50/95 transition-all duration-1000 ease-out ${
          heroBgVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
        style={{
          clipPath: 'polygon(52% 0, 100% 0, 100% 100%, 42% 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative h-full w-full flex items-center justify-end px-18 md:px-20 lg:px-32">
        <div
          className={`max-w-md md:max-w-lg transition-all duration-1000 ease-out delay-300
            ${
              heroTextVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-32 opacity-0'
            }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-teal-800 mb-8 leading-tight">
            Augimas prasideda ten, kur yra saugu.
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            Tai psichologinių konsultacijų erdvė, kur galima sustoti, būti
            išgirstam ir leisti vidiniams pokyčiams augti savo tempu.
          </p>
          <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed font-medium">
            Santykis, kuriame galite būti savimi.
          </p>
          <a
            href="#contact"
            className="inline-block bg-linear-to-r from-orange-300 to-teal-800 hover:opacity-90 text-white px-8 py-3 rounded transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Susisiek
          </a>
        </div>
      </div>
    </section>
  );
}
