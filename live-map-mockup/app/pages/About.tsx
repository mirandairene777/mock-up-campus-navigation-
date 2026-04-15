import { Award, Target, Eye, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-12 text-white md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm md:h-14 md:w-14">
              <Award className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">About LSPU Santa Cruz</h1>
              <p className="mt-2 text-sm text-blue-100 md:text-base">Excellence in Education since 1972</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        {/* Introduction */}
        <Card className="mb-12 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none space-y-4 text-gray-600">
              <p>
                Laguna State Polytechnic University - Santa Cruz Campus has been a beacon of quality education in Laguna for over 50 years.
                Established with the mission to provide accessible and excellent education to the people of Laguna and neighboring provinces,
                LSPU Santa Cruz has grown into one of the leading state universities in the CALABARZON region.
              </p>
              <p>
                Our campus is home to thousands of students pursuing various programs in engineering, arts and sciences, teacher education,
                business, and criminal justice. We take pride in our modern facilities, dedicated faculty, and comprehensive academic programs
                that prepare our students for successful careers and meaningful contributions to society.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Vision, Mission, Goals */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent className="p-8">
              <Eye className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-blue-50">
                LSPU as the leading innovation and sustainable university in CALABARZON by 2030.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
            <CardContent className="p-8">
              <Target className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-purple-50">
                To provide quality and relevant education through holistic approach and sustainable development.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
            <CardContent className="p-8">
              <TrendingUp className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Goals</h3>
              <p className="text-green-50">
                To develop competitive graduates equipped with knowledge, skills, and values for global competitiveness.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <Card className="mb-12 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">I</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  Upholding honesty, ethics, and moral principles in all our endeavors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">N</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Nationalism</h3>
                <p className="text-gray-600 text-sm">
                  Promoting love for country and commitment to national development.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">S</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Spirituality</h3>
                <p className="text-gray-600 text-sm">
                  Nurturing faith and spiritual growth alongside academic excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-orange-600">P</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Professionalism</h3>
                <p className="text-gray-600 text-sm">
                  Maintaining high standards of excellence in teaching, research, and service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-pink-600">I</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Embracing creativity and new ideas to drive progress and development.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-cyan-600">R</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Responsiveness</h3>
                <p className="text-gray-600 text-sm">
                  Being attentive and adaptive to the needs of students and community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-indigo-600">E</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Pursuing the highest quality in all aspects of university life.
                </p>
              </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <Card className="bg-white p-6 text-center shadow-lg">
            <CardContent className="p-0">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">8,000+</div>
              <div className="text-sm text-gray-600">Students Enrolled</div>
            </CardContent>
          </Card>

          <Card className="bg-white p-6 text-center shadow-lg">
            <CardContent className="p-0">
              <BookOpen className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
              <div className="text-sm text-gray-600">Degree Programs</div>
            </CardContent>
          </Card>

          <Card className="bg-white p-6 text-center shadow-lg">
            <CardContent className="p-0">
              <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
              <div className="text-sm text-gray-600">Faculty Members</div>
            </CardContent>
          </Card>

          <Card className="bg-white p-6 text-center shadow-lg">
            <CardContent className="p-0">
              <Target className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Years of Service</div>
            </CardContent>
          </Card>
        </div>

        {/* Accreditation */}
        <Card className="rounded-2xl border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Award className="w-12 h-12 flex-shrink-0 text-yellow-600" />
              <div>
                <Badge variant="outline" className="mb-3 border-yellow-300 text-yellow-800">Recognition</Badge>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Accreditation & Recognition</h2>
                <p className="text-gray-600 mb-4">
                  LSPU Santa Cruz is accredited by the Commission on Higher Education (CHED) and recognized as a Center of Excellence
                  in Teacher Education. Our engineering programs are accredited by the Accrediting Agency of Chartered Colleges and
                  Universities in the Philippines (AACCUP).
                </p>
                <Separator className="my-4 bg-yellow-200" />
                <p className="text-gray-600">
                  We maintain partnerships with various industries, government agencies, and international universities to provide
                  our students with quality education and global opportunities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
