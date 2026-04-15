import { useEffect, useMemo, useState } from 'react';
import { LocateFixed, MapPin, Minus, Plus } from 'lucide-react';
import { Location } from '../data/campusData';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface MapViewProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationClick: (location: Location) => void;
  activeCategory: string;
}

const categoryColors = {
  academic: 'bg-purple-500 hover:bg-purple-600',
  administrative: 'bg-green-500 hover:bg-green-600',
  facilities: 'bg-orange-500 hover:bg-orange-600',
  services: 'bg-pink-500 hover:bg-pink-600',
  recreational: 'bg-cyan-500 hover:bg-cyan-600',
};

export function MapView({ locations, selectedLocation, onLocationClick, activeCategory }: MapViewProps) {
  const filteredLocations = activeCategory === 'all' 
    ? locations 
    : locations.filter(loc => loc.category === activeCategory);
  const [zoom, setZoom] = useState(1);
  const [livePoint, setLivePoint] = useState({ x: 52, y: 54 });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLivePoint((prev) => ({
        x: Math.max(8, Math.min(92, prev.x + (Math.random() - 0.5) * 2.1)),
        y: Math.max(8, Math.min(92, prev.y + (Math.random() - 0.5) * 1.7)),
      }));
    }, 1800);
    return () => window.clearInterval(interval);
  }, []);

  const tripInfo = useMemo(() => {
    if (!selectedLocation) {
      return 'Tracking live position... pick a location for route preview.';
    }
    const dx = selectedLocation.coordinates.x - livePoint.x;
    const dy = selectedLocation.coordinates.y - livePoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const km = (distance * 0.08).toFixed(2);
    const etaMinutes = Math.max(2, Math.round(distance * 0.8));
    return `To ${selectedLocation.name}: ${km} km, ETA ~${etaMinutes} min`;
  }, [selectedLocation, livePoint]);

  const zoomScaleClass = zoom === 1 ? 'scale-100' : zoom === 2 ? 'scale-110' : 'scale-125';

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#eef3f8]">
      <div className={`absolute inset-0 transition-transform duration-300 ${zoomScaleClass}`}>
        <div
          className="absolute inset-0 bg-[#edf2f7]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #dde5ee 1px, transparent 1px),
              linear-gradient(to bottom, #dde5ee 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        <svg className="absolute inset-0 h-full w-full opacity-70">
          <path d="M 20 120 C 120 80, 220 90, 400 70 C 540 56, 700 82, 940 50" stroke="#cfd8e3" strokeWidth="30" fill="none" />
          <path d="M 100 500 C 220 440, 320 450, 490 410 C 620 380, 800 400, 980 350" stroke="#cfd8e3" strokeWidth="28" fill="none" />
          <path d="M 130 50 L 860 650" stroke="#dbe3ec" strokeWidth="20" fill="none" />
          <path d="M 870 90 L 240 660" stroke="#dbe3ec" strokeWidth="18" fill="none" />
        </svg>

        <svg className="absolute inset-0 h-full w-full opacity-90">
          <path d={`M ${livePoint.x}% ${livePoint.y}% L ${selectedLocation?.coordinates.x ?? livePoint.x}% ${selectedLocation?.coordinates.y ?? livePoint.y}%`} stroke="#1a73e8" strokeWidth="4" strokeDasharray="10,8" fill="none" />
        </svg>

      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #1a73e8 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, #7c3aed 0%, transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <button
        type="button"
        className="absolute z-10"
        style={{ left: `${livePoint.x}%`, top: `${livePoint.y}%`, transform: 'translate(-50%, -50%)' }}
      >
        <span className="absolute inset-0 rounded-full bg-blue-300/70 animate-ping" />
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[#1a73e8] shadow-lg" />
      </button>

      {filteredLocations.map((location) => {
        const isSelected = selectedLocation?.id === location.id;
        const colorClass = categoryColors[location.category];
        
        return (
          <button
            key={location.id}
            onClick={() => onLocationClick(location)}
            className="absolute group"
            style={{
              left: `${location.coordinates.x}%`,
              top: `${location.coordinates.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Pulse Animation for Selected */}
            {isSelected && (
              <div className="absolute inset-0 animate-ping">
                <div className="h-12 w-12 rounded-full bg-blue-400 opacity-75" />
              </div>
            )}
            
            {/* Main Marker */}
            <div
              className={`
                relative flex items-center justify-center
                h-12 w-12 rounded-full shadow-lg
                transition-all duration-300 transform
                ${isSelected ? 'scale-125 ring-4 ring-white' : 'group-hover:scale-110'}
                ${colorClass}
              `}
            >
              <MapPin className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>

            {/* Location Label */}
            <div
              className={`
                absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap
                px-3 py-1.5 rounded-lg shadow-md
                bg-white text-sm font-medium text-gray-900
                transition-all duration-200
                ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}
              `}
            >
              {location.name}
              <div className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
            </div>
          </button>
        );
      })}

      <div className="absolute right-4 top-24 z-20 grid gap-2">
        <Button
          type="button"
          onClick={() => setZoom(1)}
          size="icon"
          variant="outline"
          className="h-11 w-11 rounded-full bg-white text-slate-700 shadow-lg"
          title="Center"
        >
          <LocateFixed className="mx-auto h-5 w-5" />
        </Button>
        <Button
          type="button"
          onClick={() => setZoom((prev) => Math.min(prev + 1, 3))}
          size="icon"
          variant="outline"
          className="h-11 w-11 rounded-full bg-white text-slate-700 shadow-lg"
          title="Zoom in"
        >
          <Plus className="mx-auto h-5 w-5" />
        </Button>
        <Button
          type="button"
          onClick={() => setZoom((prev) => Math.max(prev - 1, 1))}
          size="icon"
          variant="outline"
          className="h-11 w-11 rounded-full bg-white text-slate-700 shadow-lg"
          title="Zoom out"
        >
          <Minus className="mx-auto h-5 w-5" />
        </Button>
      </div>

      <Card className="absolute left-4 top-24 z-20 border-slate-200 bg-white/95 md:left-auto md:right-20">
        <CardContent className="px-4 py-3">
          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Live Status</div>
          <div className="mt-1 text-sm text-slate-900">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Tracking active
            </span>
          </div>
          <div className="mt-1 text-xs text-slate-500">Speed ~{(8 + livePoint.x % 12).toFixed(1)} km/h</div>
        </CardContent>
      </Card>

      <Card className="absolute bottom-4 left-4 right-4 z-20 border-slate-200 bg-white/95 shadow-xl md:left-6 md:right-auto md:w-[360px]">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-slate-900">Trip Preview</div>
          <div className="mt-1 text-sm text-slate-600">{tripInfo}</div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <div className="h-1 w-16 rounded bg-slate-700" />
            <Badge variant="outline">100m</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
