import { useState } from 'react';
import { Building2, Phone, Mail, Clock, MapPin, Search, Users } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface Office {
  id: string;
  name: string;
  category: 'administrative' | 'academic' | 'services' | 'support';
  head?: string;
  contact?: string;
  email?: string;
  location: string;
  hours: string;
  description: string;
}

const offices: Office[] = [
  {
    id: '1',
    name: 'Office of the Campus Director',
    category: 'administrative',
    head: 'Dr. Maria Elena Santos',
    contact: '(049) 501-0836 loc. 101',
    email: 'director.scc@lspu.edu.ph',
    location: 'Main Building, 2nd Floor',
    hours: 'Mon-Fri 8:00 AM - 5:00 PM',
    description: 'Overall campus administration and management',
  },
  {
    id: '2',
    name: 'Registrar Office',
    category: 'administrative',
    head: 'Ms. Ana Reyes',
    contact: '(049) 501-0836 loc. 102',
    email: 'registrar.scc@lspu.edu.ph',
    location: 'Main Building, 1st Floor',
    hours: 'Mon-Fri 8:00 AM - 5:00 PM',
    description: 'Student records, enrollment, and academic credentials',
  },
  {
    id: '3',
    name: 'Cashier Office',
    category: 'services',
    contact: '(049) 501-0836 loc. 103',
    email: 'cashier.scc@lspu.edu.ph',
    location: 'Main Building, 1st Floor',
    hours: 'Mon-Fri 8:00 AM - 5:00 PM',
    description: 'Payment of tuition fees and other school charges',
  },
  {
    id: '4',
    name: 'College of Engineering',
    category: 'academic',
    head: 'Engr. Maria Santos',
    contact: '(049) 501-0836 loc. 201',
    email: 'coe.scc@lspu.edu.ph',
    location: 'Engineering Building',
    hours: 'Mon-Sat 7:00 AM - 7:00 PM',
    description: 'Engineering programs and laboratories',
  },
  {
    id: '5',
    name: 'College of Arts and Sciences',
    category: 'academic',
    head: 'Dr. Juan Dela Cruz',
    contact: '(049) 501-0836 loc. 202',
    email: 'cas.scc@lspu.edu.ph',
    location: 'CAS Building',
    hours: 'Mon-Sat 7:00 AM - 7:00 PM',
    description: 'Liberal arts and sciences programs',
  },
  {
    id: '6',
    name: 'College of Teacher Education',
    category: 'academic',
    head: 'Dr. Ana Reyes',
    contact: '(049) 501-0836 loc. 203',
    email: 'cted.scc@lspu.edu.ph',
    location: 'CTED Building',
    hours: 'Mon-Sat 7:00 AM - 7:00 PM',
    description: 'Teacher education programs',
  },
  {
    id: '7',
    name: 'Library',
    category: 'services',
    head: 'Ms. Sofia Cruz',
    contact: '(049) 501-0836 loc. 301',
    email: 'library.scc@lspu.edu.ph',
    location: 'Library Building',
    hours: 'Mon-Sat 8:00 AM - 8:00 PM',
    description: 'Academic resources and study areas',
  },
  {
    id: '8',
    name: 'Student Affairs Office',
    category: 'services',
    head: 'Mr. Roberto Garcia',
    contact: '(049) 501-0836 loc. 104',
    email: 'osa.scc@lspu.edu.ph',
    location: 'Student Center',
    hours: 'Mon-Fri 8:00 AM - 5:00 PM',
    description: 'Student activities, organizations, and welfare',
  },
  {
    id: '9',
    name: 'Guidance and Counseling',
    category: 'support',
    head: 'Ms. Patricia Lopez',
    contact: '(049) 501-0836 loc. 105',
    email: 'guidance.scc@lspu.edu.ph',
    location: 'Main Building, 1st Floor',
    hours: 'Mon-Fri 8:00 AM - 5:00 PM',
    description: 'Student counseling and guidance services',
  },
  {
    id: '10',
    name: 'IT Services',
    category: 'support',
    head: 'Engr. Mark Reyes',
    contact: '(049) 501-0836 loc. 401',
    email: 'it.scc@lspu.edu.ph',
    location: 'Computer Laboratory Building',
    hours: 'Mon-Sat 7:00 AM - 7:00 PM',
    description: 'Computer services and technical support',
  },
];

const categoryColors = {
  administrative: 'from-green-500 to-green-600',
  academic: 'from-purple-500 to-purple-600',
  services: 'from-blue-500 to-blue-600',
  support: 'from-orange-500 to-orange-600',
};

const categoryLabels = {
  administrative: 'Administrative',
  academic: 'Academic',
  services: 'Services',
  support: 'Support',
};

export function Directory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredOffices = offices.filter(office => {
    const matchesSearch = 
      office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || office.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-12 text-white md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm md:h-14 md:w-14">
              <Building2 className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Campus Directory</h1>
              <p className="mt-2 text-sm text-blue-100 md:text-base">Find offices, departments, and services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search offices, departments, or services..."
              className="h-12 rounded-xl border-gray-200 bg-white pl-12 pr-4 shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className={`h-10 rounded-xl ${selectedCategory === 'all' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : ''}`}
            >
              All Offices
            </Button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Button
                key={key}
                onClick={() => setSelectedCategory(key)}
                variant={selectedCategory === key ? 'default' : 'outline'}
                className={`h-10 rounded-xl ${selectedCategory === key ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : ''}`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredOffices.length}</span> {filteredOffices.length === 1 ? 'office' : 'offices'}
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredOffices.map(office => (
            <Card
              key={office.id}
              className="overflow-hidden border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${categoryColors[office.category]} p-4 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge className="border-white/20 bg-white/20 text-white hover:bg-white/20">
                      {categoryLabels[office.category]}
                    </Badge>
                    <CardTitle className="mt-2 text-lg font-bold text-white">{office.name}</CardTitle>
                  </div>
                  <Building2 className="w-6 h-6 opacity-80" />
                </div>
              </div>

              {/* Content */}
              <CardContent className="space-y-4 p-6">
                <CardDescription className="text-sm text-gray-600">{office.description}</CardDescription>

                <div className="space-y-3">
                  {office.head && (
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Head</div>
                        <div className="text-sm font-medium text-gray-900">{office.head}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                      <div className="text-sm font-medium text-gray-900">{office.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Hours</div>
                      <div className="text-sm font-medium text-gray-900">{office.hours}</div>
                    </div>
                  </div>

                  {office.contact && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Contact</div>
                        <div className="text-sm font-medium text-gray-900">{office.contact}</div>
                      </div>
                    </div>
                  )}

                  {office.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                        <div className="text-sm font-medium text-blue-600">{office.email}</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredOffices.length === 0 && (
          <Card className="py-12 text-center">
            <CardContent className="p-0">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No offices found matching your criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
