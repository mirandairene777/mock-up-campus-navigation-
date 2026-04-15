import { Link } from 'react-router';
import { MapPin, BookOpen, Users, Building2, ArrowRight, GraduationCap, Phone, Mail, MapPinned } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                📍 Santa Cruz, Laguna, Philippines
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to <span className="text-yellow-300">LSPU</span> Santa Cruz Campus
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                Laguna State Polytechnic University - Your Gateway to Quality Education and Innovation
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/map"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Explore Campus Map
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  View Programs
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613687414234-67a456c71a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBwaGlsaXBwaW5lc3xlbnwxfHx8fDE3NzYyNDEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="LSPU Campus"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 p-6 rounded-2xl shadow-xl transform rotate-3">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          <Link
            to="/map"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPinned className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Campus Map</h3>
            <p className="text-sm text-gray-600">Interactive navigation</p>
          </Link>

          <Link
            to="/programs"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Programs</h3>
            <p className="text-sm text-gray-600">Academic offerings</p>
          </Link>

          <Link
            to="/directory"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Directory</h3>
            <p className="text-sm text-gray-600">Find offices & services</p>
          </Link>

          <Link
            to="/about"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">About Us</h3>
            <p className="text-sm text-gray-600">Our story & mission</p>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LSPU Santa Cruz?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience quality education with modern facilities and dedicated faculty
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NjI0MTI3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Classrooms"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art classrooms and laboratories equipped with the latest technology.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767102060241-130cb9260718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMG1vZGVybnxlbnwxfHx8fDE3NzYyNDEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dedicated Faculty"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">Comprehensive programs taught by experienced and dedicated faculty members.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1775623914556-ea360b3a5bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGVzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc2MTk0MzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student Success"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Success</h3>
              <p className="text-gray-600">Proven track record of producing successful graduates and professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Campus Address</div>
                    <div className="text-blue-200">Santa Cruz, Laguna, Philippines</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Contact Number</div>
                    <div className="text-blue-200">(049) 501-0836</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email Address</div>
                    <div className="text-blue-200">info@lspu.edu.ph</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/map" className="text-blue-200 hover:text-white transition-colors">Campus Map</Link>
                <Link to="/programs" className="text-blue-200 hover:text-white transition-colors">Programs Offered</Link>
                <Link to="/directory" className="text-blue-200 hover:text-white transition-colors">Campus Directory</Link>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">About LSPU</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
