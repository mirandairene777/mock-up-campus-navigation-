import { useState } from 'react';
import { List } from 'lucide-react';
import { MapView } from '../components/MapView';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { LocationDetails } from '../components/LocationDetails';
import { LocationList } from '../components/LocationList';
import { campusLocations, categories } from '../data/campusData';
import type { Location } from '../data/campusData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const filteredLocations = campusLocations.filter((location) => {
    const matchesCategory = activeCategory === 'all' || location.category === activeCategory;
    const matchesSearch = 
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-screen overflow-hidden bg-[#eef3f8] p-3 md:p-4">
      <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-[340px_minmax(0,1fr)]">
        <aside className="hidden min-h-0 flex-col rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 shadow-sm md:flex">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold text-slate-900">Campus Map</h1>
            <p className="mt-1 text-sm text-slate-500">Google Maps-style campus navigation</p>
          </div>

          <Card className="mb-3 border-slate-200 bg-white shadow-sm">
            <CardContent className="p-3">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">Results</div>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">
                  {filteredLocations.length} {filteredLocations.length === 1 ? 'Location' : 'Locations'}
                </h2>
                <List className="h-5 w-5 text-slate-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-3 border-slate-200 bg-white p-2 shadow-sm">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </Card>

          <Card className="min-h-0 flex flex-1 flex-col overflow-hidden border-slate-200 bg-white shadow-sm">
            <CardHeader className="border-b border-slate-200 px-4 py-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-slate-800">Nearby places</CardTitle>
                <Badge variant="outline" className="text-xs capitalize">{activeCategory === 'all' ? 'All' : activeCategory}</Badge>
              </div>
            </CardHeader>
            <CardContent className="min-h-0 flex-1 overflow-y-auto p-4">
              <LocationList
                locations={filteredLocations}
                onLocationClick={handleLocationClick}
                searchQuery={searchQuery}
              />
            </CardContent>
          </Card>
        </aside>

        <div className="relative min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="absolute left-4 right-4 top-4 z-20">
            <SearchBar onSearch={setSearchQuery} placeholder="Search campus buildings, labs, services..." />
            <div className="mt-2 rounded-xl bg-white/95 p-2 shadow-md md:hidden">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
          </div>

          <MapView
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onLocationClick={handleLocationClick}
            activeCategory={activeCategory}
          />
          <LocationDetails
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        </div>
      </div>
    </div>
  );
}
