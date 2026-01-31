import { useState } from 'react';
import { Users, MapPin, BookOpen } from 'lucide-react';
import loreData from '../data/lore.json';

interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  traits: string[];
  status: string;
}

interface Location {
  id: string;
  name: string;
  type: string;
  description: string;
}

interface Concept {
  id: string;
  name: string;
  category: string;
  description: string;
}

export default function Lore() {
  const [activeTab, setActiveTab] = useState<'characters' | 'locations' | 'concepts'>('characters');
  const { characters, locations, concepts } = loreData as {
    characters: Character[];
    locations: Location[];
    concepts: Concept[];
  };

  const tabs = [
    { id: 'characters' as const, label: 'Characters', icon: Users, count: characters.length },
    { id: 'locations' as const, label: 'Locations', icon: MapPin, count: locations.length },
    { id: 'concepts' as const, label: 'Concepts', icon: BookOpen, count: concepts.length },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
            Lore & World-Building
          </h1>
          <p className="text-lg text-gray-400 font-reading">
            Explore the characters, places, and rules that define the world between worlds
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 p-2 bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-midnight-700 text-neon-blue shadow-lg shadow-neon-blue/20'
                      : 'text-gray-400 hover:text-neon-smoke hover:bg-noir-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="inline sm:hidden">{tab.label.slice(0, 4)}</span>
                  <span className="ml-1 px-2 py-0.5 bg-noir-700 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          {activeTab === 'characters' && (
            <>
              {characters.map((character) => (
                <div
                  key={character.id}
                  className="bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg p-6 sm:p-8 hover:border-neon-smoke/50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-100 mb-2">
                        {character.name}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm">
                          {character.role}
                        </span>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm ${
                            character.status === 'Living'
                              ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                              : character.status === 'Living Dead'
                              ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400'
                              : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                          }`}
                        >
                          {character.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 font-reading leading-relaxed mb-4">
                    {character.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 bg-noir-700 text-gray-300 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === 'locations' && (
            <>
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg p-6 sm:p-8 hover:border-neon-smoke/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-100 mb-2">
                        {location.name}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm">
                        {location.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 font-reading leading-relaxed">
                    {location.description}
                  </p>
                </div>
              ))}
            </>
          )}

          {activeTab === 'concepts' && (
            <>
              {concepts.map((concept) => (
                <div
                  key={concept.id}
                  className="bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg p-6 sm:p-8 hover:border-neon-smoke/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-100 mb-2">
                        {concept.name}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-neon-smoke/10 border border-neon-smoke/30 rounded-full text-neon-smoke text-sm">
                        {concept.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 font-reading leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-midnight-800/50 to-noir-800/50 backdrop-blur-sm border border-midnight-600 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-neon-blue mb-4">
            About the World
          </h3>
          <p className="text-gray-400 font-reading leading-relaxed mb-4">
            The world of Threshold exists at the intersection of our reality and something else—a place where the rules of life and death bend, where creatures from nightmares walk among us, and where certain individuals can perceive both worlds simultaneously.
          </p>
          <p className="text-gray-400 font-reading leading-relaxed">
            As the story unfolds, more characters, locations, and concepts will be revealed. The threshold between worlds is vast, and Sarah Cross has only begun to understand what lies beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
