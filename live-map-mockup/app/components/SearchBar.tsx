import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Search for buildings, facilities...' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="h-12 rounded-xl border-gray-200 bg-white pl-12 pr-12 shadow-sm"
        />
        {query && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={handleClear}
            className="absolute right-2 h-8 w-8 rounded-full"
          >
            <X className="w-4 h-4 text-gray-400" />
          </Button>
        )}
      </div>
    </div>
  );
}
