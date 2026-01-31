import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-noir-900 text-gray-100">
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
