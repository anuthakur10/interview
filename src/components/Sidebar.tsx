import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { SidebarProps } from '../types';
import { Button } from './ui/button';

export function Sidebar({ 
  categories, 
  selectedCategory, 
  onSelectCategory, 
  isOpen, 
  onToggle 
}: SidebarProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 h-screen bg-card shadow-sm fixed left-0 top-0">
        <div className="flex flex-col h-full p-6">
          <h2 className="text-xl font-bold mb-6 text-card-foreground">Categories</h2>
          <nav className="space-y-2 overflow-y-auto flex-grow">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="w-full justify-start text-left"
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="lg:hidden fixed top-0 left-0 h-full w-64 bg-card shadow-lg z-40"
      >
        <div className="flex flex-col h-full p-6">
          <h2 className="text-xl font-bold mb-6 text-card-foreground">Categories</h2>
          <nav className="space-y-2 overflow-y-auto flex-grow">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="w-full justify-start text-left"
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </Button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}