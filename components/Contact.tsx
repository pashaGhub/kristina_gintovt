'use client';
import { sendEmail } from '@/actions/sendEmail';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const result = await sendEmail(name, email, message);

    setIsLoading(false);

    if (result.success) {
      setStatus({
        type: 'success',
        message: 'Žinutė sėkmingai išsiųsta! Netrukus su jumis susisieksime.',
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({
        type: 'error',
        message:
          result.error || 'Nepavyko išsiųsti žinutės. Bandykite dar kartą.',
      });
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: null, message: '' });
    }, 5000);
  };

  return (
    <div className="container mx-auto px-12">
      <div className="mb-16">
        <h2 className="text-5xl font-light text-teal-800 text-center mb-4">
          Susisiekite
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-teal-800 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-light text-teal-800 mb-8">
              Kontaktinė Informacija
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-800 rounded flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    El. paštas
                  </p>
                  <p className="text-gray-800 font-medium">
                    cbt.terapija@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-800 rounded flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    Kabinetas
                  </p>
                  <p className="text-gray-800 font-medium">
                    Spaudos rūmai (Laisvės pr. 60, Vilnius)
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="pt-6 border-t border-gray-200/70 font-light text-teal-800">
              <p className="text-2xl mb-2">Bendradarbiauju su:</p>

              <Link
                href="https://inpace.lt/darbuotojai/kristina-gintovt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Image
                    src="/caritas.png"
                    alt="Caritas"
                    width={160}
                    height={64}
                    className="h-16 w-auto"
                  />
                  <p>
                    Vilniaus arkivyskupijos Carito <br /> Mediacijos centru “In
                    Pace”
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-200/50">
          <h3 className="text-2xl font-light text-teal-800 mb-8">
            Siųsti Žinutę
          </h3>

          {status.type && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              <p className="text-sm">{status.message}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wide text-gray-600 mb-2"
              >
                Vardas
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Jūsų vardas"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wide text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="jusu.pastas@pavyzdys.lt"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wide text-gray-600 mb-2"
              >
                Žinutė
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-teal-800 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Papasakokite apie tai, kas Jus čia atvedė..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-orange-300 to-teal-800 hover:opacity-90 text-white py-3 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Siunčiama...
                </>
              ) : (
                'Siųsti Žinutę'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
