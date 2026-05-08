import React, { useState } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // ============ CONFIGURATION - EDIT HERE ============
  const config = {
    name: "Luciano Campanelli",
    subtitle: "Muylucho",
    role: "Director Creativo Digital",
    bio: {
      intro: "Soy Director Creativo Digital. Trabajo en GUT Buenos Aires.",
      experience: "15+ años en agencias como BBDO, Juju, Thompson, Wunderman y Circus. He tenido la suerte de ganar en todos los festivales de publicidad importantes — Cannes Lions, D&AD, The One Show, Martin Fierro, El Sol — y de ayudar a GUT a ganar títulos como Cannes Agency of the Year.",
      note: "Born and raised in Buenos Aires.",
      personal: "Además ilustro y escribo. La creatividad no tiene un solo formato.",
    },
    
    // Featured projects (5)
    featuredProjects: [
      {
        id: 1,
        title: "Worth the Heat",
        client: "Stella Artois",
        year: "2024",
        url: "https://www.diegoandfacha.com/worth-the-heat"
      },
      {
        id: 2,
        title: "Pee Pee Pee",
        client: "Poise",
        year: "2025",
        url: "#"
      },
      {
        id: 3,
        title: "Let's Move",
        client: "Olympics",
        year: "2024",
        url: "#"
      },
      {
        id: 4,
        title: "My Coke Ad",
        client: "Coca-Cola",
        year: "2024",
        url: "#"
      },
      {
        id: 5,
        title: "The Immortal Support",
        client: "Noblex",
        year: "2024",
        url: "#"
      }
    ],

    // Other projects
    otherProjects: [
      {
        id: 6,
        title: "Numbers Syndrome",
        client: "ASDRA",
        year: "2024",
      },
      {
        id: 7,
        title: "Job 66",
        client: "Bud 66",
        year: "2024",
      },
      {
        id: 8,
        title: "TEDx InfiltraTED",
        client: "TEDx RP",
        year: "2024",
      },
      {
        id: 9,
        title: "Almanaque",
        client: "Paceña",
        year: "2024",
      },
      {
        id: 10,
        title: "Amigos",
        client: "Cofler",
        year: "2024",
      },
      {
        id: 11,
        title: "Redes",
        client: "Tulipán",
        year: "2024",
      }
    ],

    social: {
      instagram: "https://www.instagram.com/muylucho/",
      linkedin: "https://linkedin.com/in/lucianocampanelli"
    },

    contact: "muylucho@gmail.com"
  };

  const allProjects = [...config.featuredProjects, ...config.otherProjects];

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // ============ HOME PAGE ============
  const HomePage = () => (
    <div className="space-y-16 md:space-y-24">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
            {config.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {config.role}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
            {config.bio.intro}
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 md:py-16 border-t border-b border-gray-300">
        <div className="max-w-4xl space-y-6">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {config.bio.experience}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {config.bio.personal}
          </p>
          <p className="text-sm text-gray-500 italic">
            {config.bio.note}
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="pb-12">
        <div className="flex gap-6 md:gap-8 flex-wrap">
          <a 
            href={`https://www.instagram.com/muylucho/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition text-sm md:text-base font-medium"
          >
            Instagram
          </a>
          <a 
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition text-sm md:text-base font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );

  // ============ WORK PAGE ============
  const WorkPage = () => (
    <div className="pt-32 pb-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-16 md:mb-20 text-black">
        Work
      </h1>

      {/* Featured Projects */}
      <div className="mb-20 md:mb-32">
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-600 text-sm tracking-widest uppercase">
          Featured
        </h2>
        <div className="space-y-6 md:space-y-8">
          {config.featuredProjects.map(project => (
            <div key={project.id} className="group pb-6 border-b border-gray-300 hover:border-black transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 md:gap-4">
                <h3 className="text-lg md:text-2xl font-medium text-black group-hover:text-red-500 transition cursor-pointer">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-sm md:text-base text-gray-500">
                  <span className="whitespace-nowrap">{project.client}</span>
                  <span className="text-gray-300">·</span>
                  <span className="whitespace-nowrap">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      {config.otherProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-600 text-sm tracking-widest uppercase">
            Other Works
          </h2>
          <div className="space-y-6 md:space-y-8">
            {config.otherProjects.map(project => (
              <div key={project.id} className="group pb-6 border-b border-gray-300 hover:border-black transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 md:gap-4">
                  <h3 className="text-lg md:text-xl font-medium text-black group-hover:text-red-500 transition cursor-pointer">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="whitespace-nowrap">{project.client}</span>
                    <span className="text-gray-300">·</span>
                    <span className="whitespace-nowrap">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // ============ ART PAGE ============
  const ArtPage = () => (
    <div className="pt-32 pb-12">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-black">
          Dibujo y Escribo
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          Ilustraciones, escritura y exploración visual personal. Podés ver mi trabajo en Instagram o en el libro "Artefactos".
        </p>
        <a 
          href={config.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black border-b-2 border-black hover:border-red-500 hover:text-red-500 transition pb-1 font-medium"
        >
          @muylucho
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );

  // ============ CONTACT PAGE ============
  const ContactPage = () => (
    <div className="pt-32 pb-12">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-black">
          Contacto
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Para proyectos, colaboraciones o charlas creativas:
        </p>

        <a 
          href={`mailto:${config.contact}`}
          className="inline-flex items-center text-2xl md:text-3xl font-bold text-black hover:text-red-500 transition"
        >
          {config.contact}
        </a>

        <div className="mt-16 pt-12 border-t border-gray-300">
          <p className="text-sm text-gray-500 mb-4">También en:</p>
          <div className="flex gap-6">
            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition text-sm">
              Instagram
            </a>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')}
            className="text-lg md:text-xl font-bold tracking-tight text-black hover:text-red-500 transition"
          >
            MUYLUCHO
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { name: 'Home', page: 'home' },
              { name: 'Work', page: 'work' },
              { name: 'Art', page: 'art' },
              { name: 'Contact', page: 'contact' }
            ].map(item => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`text-sm font-medium transition ${
                  currentPage === item.page 
                    ? 'text-black border-b-2 border-red-500' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {[
                { name: 'Home', page: 'home' },
                { name: 'Work', page: 'work' },
                { name: 'Art', page: 'art' },
                { name: 'Contact', page: 'contact' }
              ].map(item => (
                <button
                  key={item.page}
                  onClick={() => navigateTo(item.page)}
                  className="text-sm font-medium text-left text-gray-600 hover:text-black transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 pt-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'art' && <ArtPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
          <p className="text-xs md:text-sm text-gray-500">
            © 2026 Luciano Campanelli. Hecho en React + Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
