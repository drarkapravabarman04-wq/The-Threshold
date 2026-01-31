import { useState, useMemo } from 'react';
import { Search, Clock, BookOpen, Calendar } from 'lucide-react';
import chaptersData from '../data/chapters.json';

interface Chapter {
  id: number;
  title: string;
  publishDate: string;
  wordCount: number;
  content: string;
}

interface ChaptersProps {
  onNavigate: (page: string, chapterId?: number) => void;
}

export default function Chapters({ onNavigate }: ChaptersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const chapters = chaptersData as Chapter[];

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chapters;

    const query = searchQuery.toLowerCase();
    return chapters.filter(
      (chapter) =>
        chapter.title.toLowerCase().includes(query) ||
        chapter.content.toLowerCase().includes(query)
    );
  }, [searchQuery, chapters]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
            Chapters
          </h1>
          <p className="text-lg text-gray-400 font-reading">
            Follow Sarah Cross as she navigates a world between life and death
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search chapters by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-midnight-800/50 backdrop-blur-sm border border-midnight-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all"
            />
          </div>
        </div>

        {filteredChapters.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No chapters found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredChapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => onNavigate('reader', chapter.id)}
                className="group bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg p-6 sm:p-8 hover:border-neon-smoke/50 hover:bg-midnight-700/30 hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-neon-blue/10 border border-neon-blue/30 rounded-lg text-neon-blue font-bold">
                        {chapter.id}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-100 group-hover:text-neon-blue transition-colors">
                        {chapter.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(chapter.publishDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{chapter.wordCount.toLocaleString()} words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{Math.ceil(chapter.wordCount / 200)} min read</span>
                  </div>
                </div>

                <p className="text-gray-400 font-reading leading-relaxed line-clamp-3 mb-4">
                  {chapter.content.split('\n\n')[0]}
                </p>

                <div className="flex items-center text-neon-blue font-medium group-hover:text-neon-cyan transition-colors">
                  <span>Read Chapter</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg text-center">
          <p className="text-gray-400 font-reading">
            More chapters coming soon. Follow the story as Sarah uncovers the truth behind the threshold.
          </p>
        </div>
      </div>
    </div>
  );
}
