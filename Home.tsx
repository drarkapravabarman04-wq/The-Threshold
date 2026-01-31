import { Book, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string, chapterId?: number) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-midnight-900 to-noir-800"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-midnight-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-midnight-700/50 backdrop-blur-sm border border-neon-smoke/30 rounded-full text-neon-smoke text-sm font-medium mb-6">
              A Supernatural Noir Serial
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-smoke to-neon-cyan">
            THRESHOLD
          </h1>

          <div className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>

          <p className="text-xl sm:text-2xl text-gray-300 font-reading mb-8 max-w-3xl mx-auto leading-relaxed">
            Where the living meet the dead, and the line between worlds grows dangerously thin.
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-gray-400 font-reading leading-relaxed mb-6">
              Detective Sarah Cross thought she understood death. Then Marcus walked into her apartment—a dead man with a warning: something is tearing holes between worlds, and the bodies are piling up.
            </p>
            <p className="text-lg text-gray-400 font-reading leading-relaxed">
              Now she walks the threshold between reality and nightmare, hunting a killer who's already crossed over. In a city where monsters hide in plain sight and nightclubs serve as neutral ground, Sarah must solve a case that doesn't officially exist—before the final ritual opens a gate that can never be closed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('reader', 1)}
              className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-noir-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center gap-2"
            >
              <Book size={20} />
              <span>Start Reading</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('chapters')}
              className="px-8 py-4 bg-midnight-700/50 backdrop-blur-sm border border-neon-smoke/30 text-neon-smoke font-semibold rounded-lg hover:bg-midnight-600/50 hover:border-neon-blue/50 transition-all duration-300"
            >
              View All Chapters
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-smoke/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-neon-smoke rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-noir-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-neon-blue">
            Latest Chapters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="group bg-midnight-800/50 backdrop-blur-sm border border-midnight-600 rounded-lg p-6 hover:border-neon-smoke/50 hover:shadow-lg hover:shadow-neon-blue/10 transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate('reader', num)}
              >
                <div className="text-sm text-neon-smoke mb-2">Chapter {num}</div>
                <h3 className="text-xl font-serif font-bold text-gray-100 mb-3 group-hover:text-neon-blue transition-colors">
                  {num === 1 ? 'The Crossing' : num === 2 ? 'Echoes in the Dark' : 'Between Worlds'}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {num === 1
                    ? 'The rain hadn\'t stopped for three days. Detective Sarah Cross stood at the edge of the crime scene, watching the water pool around the chalk outline...'
                    : num === 2
                    ? 'The nightclub called Liminal was exactly the kind of place Sarah had learned to avoid. Neon signs buzzed with an electric hum...'
                    : 'Coming soon...'}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{num === 3 ? 'Coming Soon' : `${num === 1 ? '2,450' : '2,680'} words`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-noir-800 to-noir-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-neon-cyan">
            Enter the World
          </h2>
          <p className="text-lg text-gray-400 font-reading mb-8">
            Explore the characters, locations, and supernatural rules that govern the threshold between worlds.
          </p>
          <button
            onClick={() => onNavigate('lore')}
            className="px-8 py-4 bg-midnight-700/50 backdrop-blur-sm border border-neon-cyan/30 text-neon-cyan font-semibold rounded-lg hover:bg-midnight-600/50 hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
          >
            Explore Lore & World-Building
          </button>
        </div>
      </section>
    </div>
  );
}
