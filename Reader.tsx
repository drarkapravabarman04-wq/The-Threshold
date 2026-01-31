import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Type, Home, List } from 'lucide-react';
import chaptersData from '../data/chapters.json';

interface Chapter {
  id: number;
  title: string;
  publishDate: string;
  wordCount: number;
  content: string;
}

interface ReaderProps {
  chapterId: number;
  onNavigate: (page: string, chapterId?: number) => void;
}

export default function Reader({ chapterId, onNavigate }: ReaderProps) {
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const chapters = chaptersData as Chapter[];
  const currentChapter = chapters.find((ch) => ch.id === chapterId);
  const currentIndex = chapters.findIndex((ch) => ch.id === chapterId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < chapters.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!currentChapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-400 mb-4">Chapter not found</p>
          <button
            onClick={() => onNavigate('chapters')}
            className="px-6 py-3 bg-neon-blue text-noir-900 font-semibold rounded-lg hover:bg-neon-cyan transition-colors"
          >
            Back to Chapters
          </button>
        </div>
      </div>
    );
  }

  const fontSizeClasses = {
    small: 'text-base sm:text-lg',
    medium: 'text-lg sm:text-xl',
    large: 'text-xl sm:text-2xl',
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      onNavigate('reader', chapters[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onNavigate('reader', chapters[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-noir-900 pb-32">
      <div className="sticky top-16 z-40 bg-noir-800/95 backdrop-blur-sm border-b border-midnight-700 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 text-gray-400 hover:text-neon-blue transition-colors"
              title="Home"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => onNavigate('chapters')}
              className="p-2 text-gray-400 hover:text-neon-blue transition-colors"
              title="All Chapters"
            >
              <List size={20} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 mr-2 hidden sm:inline">Font Size:</span>
            <button
              onClick={() => setFontSize('small')}
              className={`p-2 rounded transition-colors ${
                fontSize === 'small'
                  ? 'bg-neon-blue text-noir-900'
                  : 'text-gray-400 hover:text-neon-blue'
              }`}
              title="Small"
            >
              <Type size={16} />
            </button>
            <button
              onClick={() => setFontSize('medium')}
              className={`p-2 rounded transition-colors ${
                fontSize === 'medium'
                  ? 'bg-neon-blue text-noir-900'
                  : 'text-gray-400 hover:text-neon-blue'
              }`}
              title="Medium"
            >
              <Type size={20} />
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`p-2 rounded transition-colors ${
                fontSize === 'large'
                  ? 'bg-neon-blue text-noir-900'
                  : 'text-gray-400 hover:text-neon-blue'
              }`}
              title="Large"
            >
              <Type size={24} />
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 pb-8 border-b border-midnight-700">
          <div className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium mb-4">
            Chapter {currentChapter.id}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
            {currentChapter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{new Date(currentChapter.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{currentChapter.wordCount.toLocaleString()} words</span>
            <span>•</span>
            <span>{Math.ceil(currentChapter.wordCount / 200)} min read</span>
          </div>
        </header>

        <div
          className={`prose prose-invert prose-lg max-w-none font-reading ${fontSizeClasses[fontSize]}`}
        >
          {currentChapter.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-midnight-700">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={!hasPrevious}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                hasPrevious
                  ? 'bg-midnight-700 text-neon-blue hover:bg-midnight-600 hover:shadow-lg hover:shadow-neon-blue/20'
                  : 'bg-noir-700 text-gray-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous Chapter</span>
              <span className="sm:hidden">Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                hasNext
                  ? 'bg-midnight-700 text-neon-blue hover:bg-midnight-600 hover:shadow-lg hover:shadow-neon-blue/20'
                  : 'bg-noir-700 text-gray-600 cursor-not-allowed'
              }`}
            >
              <span className="hidden sm:inline">Next Chapter</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {hasNext && (
            <div className="mt-8 p-6 bg-midnight-800/30 backdrop-blur-sm border border-midnight-600 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Up Next</p>
              <p className="text-xl font-serif font-bold text-neon-blue">
                Chapter {chapters[currentIndex + 1].id}: {chapters[currentIndex + 1].title}
              </p>
            </div>
          )}
        </div>
      </article>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-noir-800/95 backdrop-blur-sm border-t border-midnight-700 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={!hasPrevious}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              hasPrevious
                ? 'text-neon-blue hover:bg-midnight-700'
                : 'text-gray-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-500">Chapter {currentChapter.id} of {chapters.length}</p>
            <div className="flex gap-1 mt-2">
              {chapters.map((ch, idx) => (
                <div
                  key={ch.id}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-neon-blue w-6'
                      : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={!hasNext}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              hasNext
                ? 'text-neon-blue hover:bg-midnight-700'
                : 'text-gray-600 cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
