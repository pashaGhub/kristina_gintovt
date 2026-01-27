'use client';
import canada from '@/public/canada.png';
import { useEffect, useRef, useState } from 'react';

export function Mountain() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // First show backgrounds
            setShowBg(true);
            // Then show text after a delay
            setTimeout(() => setIsVisible(true), 400);
          }
        });
      },
      { threshold: 0.3 },
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
    <div
      ref={sectionRef}
      className="relative min-h-120 flex flex-col items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-fixed"
        style={{
          backgroundImage: `url('${canada.src}')`,
          backgroundPosition: 'center 90%',
        }}
      />

      {/* Top Line - Slide from Left */}
      <div className="relative z-10 w-full mb-8">
        <div
          className={`relative transition-all duration-2000 ease-out ${
            showBg ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div
            className="bg-white/20 backdrop-blur-sm py-6 px-8 md:px-16 lg:px-24"
            style={{
              clipPath: 'polygon(0 0, 60% 0, 55% 100%, 0 100%)',
            }}
          >
            <p
              className={`text-3xl md:text-4xl lg:text-5xl font-light text-white text-left transition-all duration-700 ease-out delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-12 opacity-0'
              }`}
            >
              Kiekvienas kalnas įkopimas
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line - Slide from Right */}
      <div className="relative z-10 w-full">
        <div
          className={`relative transition-all duration-3000 ease-out ${
            showBg ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div
            className="bg-white/20 backdrop-blur-sm py-6 px-8 md:px-16 lg:px-24"
            style={{
              clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 40% 100%)',
            }}
          >
            <p
              className={`text-3xl md:text-4xl lg:text-5xl font-light text-white text-right transition-all duration-700 ease-out delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-12 opacity-0'
              }`}
            >
              po vieną žingsnį
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
