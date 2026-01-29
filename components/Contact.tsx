export function Contact() {
  return (
    <div className="container mx-auto px-12">
      <h2 className="text-5xl font-light text-teal-800 text-center mb-16">
        Susisiekite
      </h2>

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
                    Spaudos rūmai (Laisvės per. 60, Vilnius)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-200/50">
          <h3 className="text-2xl font-light text-teal-800 mb-8">
            Siųsti Žinutę
          </h3>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="block text-xs uppercase tracking-wide text-gray-600 mb-2"
              >
                Vardas
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-teal-800 transition-all"
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
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-teal-800 transition-all"
                placeholder="jusu.pastas@pavyzdys.lt"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-xs uppercase tracking-wide text-gray-600 mb-2"
              >
                Žinutė
              </label>
              <textarea
                id="description"
                rows={6}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-teal-800 transition-all resize-none"
                placeholder="Papasakokite apie tai, kas Jus čia atvedė..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-orange-300 to-teal-800 hover:opacity-90 text-white py-3 rounded transition-all duration-300"
            >
              Siųsti Žinutę
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
