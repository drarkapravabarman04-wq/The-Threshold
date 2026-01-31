import { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Reader from './pages/Reader';
import Lore from './pages/Lore';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentChapterId, setCurrentChapterId] = useState<number>(1);

  const handleNavigate = (page: string, chapterId?: number) => {
    setCurrentPage(page);
    if (chapterId !== undefined) {
      setCurrentChapterId(chapterId);
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'chapters':
        return <Chapters onNavigate={handleNavigate} />;
      case 'reader':
        return <Reader chapterId={currentChapterId} onNavigate={handleNavigate} />;
      case 'lore':
        return <Lore />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
