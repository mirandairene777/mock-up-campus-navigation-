import { MapPin, ChevronRight } from 'lucide-react';
import { Location } from '../data/campusData';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface LocationListProps {
  locations: Location[];
  onLocationClick: (location: Location) => void;
  searchQuery: string;
}

const categoryColors = {
  academic: 'bg-purple-100 text-purple-700 border-purple-200',
  administrative: 'bg-green-100 text-green-700 border-green-200',
  facilities: 'bg-orange-100 text-orange-700 border-orange-200',
  services: 'bg-pink-100 text-pink-700 border-pink-200',
  recreational: 'bg-cyan-100 text-cyan-700 border-cyan-200',
};

export function LocationList({ locations, onLocationClick, searchQuery }: LocationListProps) {
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredLocations.length === 0 && searchQuery) {
    return (
      <Card className="border-slate-200 bg-slate-50 py-12 text-center">
        <MapPin className="mx-auto mb-3 h-12 w-12 text-gray-300" />
        <p className="text-gray-500">No locations found for "{searchQuery}"</p>
      </Card>
    );
  }

  return (
    <div className="space-y-2 pb-16">
      {filteredLocations.map((location) => (
        <Card
          key={location.id}
          onClick={() => onLocationClick(location)}
          className="group w-full cursor-pointer border-slate-200 bg-white text-left shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow"
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onLocationClick(location);
            }
          }}
        >
          <CardContent className="pt-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline" className={categoryColors[location.category]}>
                  {location.category.charAt(0).toUpperCase() + location.category.slice(1)}
                  </Badge>
                </div>
                <h3 className="mb-1 font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                  {location.name}
                </h3>
                <p className="line-clamp-2 text-sm text-slate-600">
                  {location.description}
                </p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-blue-600" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
