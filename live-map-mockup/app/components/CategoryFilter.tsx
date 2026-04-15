import { Building2, School, Wrench, Store, Trophy } from 'lucide-react';
import { Button } from './ui/button';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Building2 className="w-4 h-4" />,
  academic: <School className="w-4 h-4" />,
  administrative: <Building2 className="w-4 h-4" />,
  facilities: <Wrench className="w-4 h-4" />,
  services: <Store className="w-4 h-4" />,
  recreational: <Trophy className="w-4 h-4" />,
};

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <Button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            size="sm"
            variant={isActive ? 'default' : 'outline'}
            className={`whitespace-nowrap rounded-xl ${isActive ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : ''}`}
          >
            <span className={isActive ? 'text-white' : 'text-gray-500'}>
              {categoryIcons[category.id]}
            </span>
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}
