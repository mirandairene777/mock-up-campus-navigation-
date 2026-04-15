import { Link, useLocation } from 'react-router';
import { MapPin, Home, GraduationCap, Building2, Info, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/map', label: 'Campus Map', icon: MapPin },
    { to: '/programs', label: 'Programs', icon: GraduationCap },
    { to: '/directory', label: 'Directory', icon: Building2 },
    { to: '/about', label: 'About', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-gray-900">LSPU Santa Cruz</div>
                <Badge variant="outline" className="mt-1 text-[10px]">Campus Portal</Badge>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <Button
                  key={to}
                  asChild
                  variant={isActive(to) ? 'default' : 'ghost'}
                  className={`rounded-lg ${
                    isActive(to)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-700'
                  }`}
                >
                  <Link to={to}>
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 rounded-lg md:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="px-4 py-4 space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <Button
                  key={to}
                  asChild
                  variant={isActive(to) ? 'default' : 'ghost'}
                  className={`w-full justify-start rounded-lg ${
                    isActive(to)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-700'
                  }`}
                >
                  <Link to={to} onClick={() => setMobileMenuOpen(false)}>
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
