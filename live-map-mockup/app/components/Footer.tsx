import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold">LSPU</div>
                <Badge variant="outline" className="mt-1 border-blue-200/30 bg-blue-200/10 text-blue-100">Santa Cruz</Badge>
              </div>
            </div>
            <p className="text-sm text-blue-200">
              Laguna State Polytechnic University - Santa Cruz Campus. Excellence in Education since 1972.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-1.5">
              <Button asChild variant="link" className="h-auto p-0 text-sm text-blue-200">
                <Link to="/">Home</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-blue-200">
                <Link to="/map">Campus Map</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-blue-200">
                <Link to="/programs">Programs</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-blue-200">
                <Link to="/directory">Directory</Link>
              </Button>
              <Button asChild variant="link" className="h-auto p-0 text-sm text-blue-200">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-blue-200">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Santa Cruz, Laguna, Philippines</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-blue-200">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>(049) 501-0836</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-blue-200">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>info@lspu.edu.ph</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-2">
              <Button type="button" size="icon" variant="outline" className="h-9 w-9 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button type="button" size="icon" variant="outline" className="h-9 w-9 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button type="button" size="icon" variant="outline" className="h-9 w-9 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mt-8 bg-white/10" />
        <div className="pt-8 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Laguna State Polytechnic University - Santa Cruz Campus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
