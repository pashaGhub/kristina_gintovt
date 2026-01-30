'use client';
import Image from 'next/image';
import kristinaProfile from '@/public/kristina_profile.jpg';
import kristinaMountain from '@/public/kristina_mountain.jpg';
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
      className="relative min-h-screen bg-linear-to-b from-slate-50 to-orange-50 py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-teal-800 text-center mb-4">
              Susipažinkime
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-teal-800 mx-auto rounded-full"></div>
          </div>

          {/* First Section - Image Left */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            {/* Image */}
            <div
              className={`w-full md:w-2/5 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-16 opacity-0'
              }`}
            >
              <div className="relative">
                {/* Photo frame effect with rotation */}
                <div className="absolute -inset-2 md:-inset-4 bg-linear-to-br from-slate-300 to-orange-300 rounded shadow-2xl transform rotate-1 md:rotate-2"></div>
                <div className="relative aspect-3/4 w-full rounded overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={kristinaProfile}
                    alt="Kristina Gintovt - Psichologė"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`w-full md:w-3/5 space-y-4 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Esu <strong className="text-teal-800">Kristina Gintovt</strong>,
                psichologė, kognityvinės elgesio terapijos (KET) konsultantė.
                Psichologinės konsultacijos man pirmiausia yra santykis –
                saugus, pagarbus ir grindžiamas pasitikėjimu. Tikiu, kad būtent
                jame atsiranda galimybė sustoti, įsiklausyti į save ir pamažu
                judėti pokyčio link.
              </p>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Mano profesinis kelias susijęs su psichologija ir nuolatiniu
                gilinimusi į žmogaus emocinį pasaulį. Esu baigusi psichologijos
                bakalauro ir magistro studijas, šiuo metu studijuoju kognityvinę
                elgesio terapiją. Dirbu su suaugusiaisiais, teikiu individualias
                konsultacijas, vedu grupinius užsiėmumus bei paskaitas ir
                mokymus psichologinėmis temomis.
              </p>
            </div>
          </div>

          {/* Second Section - Image Right */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            {/* Image */}
            <div
              className={`w-full md:w-2/5 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <div className="relative">
                {/* Photo frame effect with rotation */}
                <div className="absolute -inset-2 md:-inset-4 bg-linear-to-br from-sky-300 to-orange-200 rounded shadow-2xl transform -rotate-1 md:-rotate-3"></div>
                <div className="relative aspect-4/5 w-full rounded overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={kristinaMountain}
                    alt="Kristina Gintovt"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`w-full md:w-3/5 space-y-4 transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Savo darbe siekiu kurti aplinką, kurioje galima būti savimi ir
                kalbėti apie tai, kas sunku. Kartu ieškome būdų geriau suprasti
                savo mintis, jausmus bei reakcijas, stiprinti vidinius resursus
                ir rasti kasdienybėje pritaikomus sprendimus.
              </p>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Visa, kas aptariama konsultacijų metu, išlieka konfidencialu ir
                priimama su pagarba. Nuolat tobulinu profesines žinias ir
                kompetencijas, dalyvauju supervizijose, kuriose užtikrinama
                profesionali pagalba ir priežiūra.
              </p>

              <p className="text-base md:text-lg font-bold leading-relaxed text-teal-800">
                Kiekvienas žmogus ateina su savo istorija, todėl ir konsultacijų
                procesas visada yra individualus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
