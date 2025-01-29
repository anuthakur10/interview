import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SearchBar } from '@/components/SearchBar';
import { QuestionList } from '@/components/QuestionList';
import { getAllCategories } from '@/utils/categoryUtils';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex relative">
        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
        
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            setIsOpen(false);
          }}
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
        />
        
        <main className="w-full lg:pl-64">
          <div className="max-w-7xl mx-auto p-4 lg:p-6">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <QuestionList
              category={selectedCategory}
              searchQuery={searchQuery}
            />
          </div>
        </main>
      </div>
    </div>
  );
}