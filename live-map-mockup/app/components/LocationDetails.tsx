import { X, Clock, Phone, Building, MapPin, Navigation } from 'lucide-react';
import { Location } from '../data/campusData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface LocationDetailsProps {
  location: Location | null;
  onClose: () => void;
}

const categoryInfo = {
  academic: { label: 'Academic Building', gradient: 'from-purple-500 to-purple-600', icon: 'text-purple-600' },
  administrative: { label: 'Administrative', gradient: 'from-green-500 to-green-600', icon: 'text-green-600' },
  facilities: { label: 'Facility', gradient: 'from-orange-500 to-orange-600', icon: 'text-orange-600' },
  services: { label: 'Service', gradient: 'from-pink-500 to-pink-600', icon: 'text-pink-600' },
  recreational: { label: 'Recreational', gradient: 'from-cyan-500 to-cyan-600', icon: 'text-cyan-600' },
};

export function LocationDetails({ location, onClose }: LocationDetailsProps) {
  if (!location) return null;

  const categoryData = categoryInfo[location.category];

  return (
    <Card className="absolute bottom-4 left-4 right-4 z-30 max-h-[70vh] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-sm animate-in slide-in-from-bottom duration-300 md:bottom-6 md:left-auto md:right-6 md:w-96">
      {/* Header with Gradient */}
      <div className={`bg-gradient-to-r ${categoryData.gradient} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-2 -right-2 rounded-full bg-white/20 text-white hover:bg-white/30 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" />
            <Badge className="bg-white/20 text-white border-white/20 hover:bg-white/20">{categoryData.label}</Badge>
          </div>
          
          <h2 className="text-2xl font-bold mb-1">{location.name}</h2>
          <p className="text-white/90 text-sm">{location.description}</p>
        </div>
      </div>

      {/* Details Section */}
      <CardContent className="max-h-[44vh] space-y-4 overflow-y-auto p-6">
        {location.details.hours && (
          <div className="flex items-start gap-3">
            <div className={`rounded-lg bg-gradient-to-br p-2 ${categoryData.gradient} bg-opacity-10`}>
              <Clock className={`h-5 w-5 ${categoryData.icon}`} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900 mb-1">Operating Hours</div>
              <div className="text-sm text-gray-600">{location.details.hours}</div>
            </div>
          </div>
        )}

        {location.details.contact && (
          <div className="flex items-start gap-3">
            <div className={`rounded-lg bg-gradient-to-br p-2 ${categoryData.gradient} bg-opacity-10`}>
              <Phone className={`h-5 w-5 ${categoryData.icon}`} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900 mb-1">Contact</div>
              <div className="text-sm text-gray-600">{location.details.contact}</div>
            </div>
          </div>
        )}

        {location.details.floor && (
          <div className="flex items-start gap-3">
            <div className={`rounded-lg bg-gradient-to-br p-2 ${categoryData.gradient} bg-opacity-10`}>
              <Building className={`h-5 w-5 ${categoryData.icon}`} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900 mb-1">Building Info</div>
              <div className="text-sm text-gray-600">{location.details.floor}</div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button className={`w-full rounded-xl bg-gradient-to-r ${categoryData.gradient} text-white shadow-lg hover:shadow-xl`}>
          <Navigation className="w-5 h-5" />
          Get Directions
        </Button>
      </CardContent>
    </Card>
  );
}
