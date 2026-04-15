import { useEffect, useMemo, useState } from 'react';
import { GraduationCap, Clock, BookOpen, Users, ChevronRight } from 'lucide-react';
import type { College, Course } from '../data/coursesData';
import { colleges as fallbackColleges, courses as fallbackCourses } from '../data/coursesData';
import { loadLiveProgramsData } from '../data/liveCourses';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export function Programs() {
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);
  const [colleges, setColleges] = useState<College[]>(fallbackColleges);
  const [courses, setCourses] = useState<Course[]>(fallbackCourses);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [source, setSource] = useState('local fallback');

  useEffect(() => {
    let alive = true;

    async function loadData() {
      setIsLoading(true);
      const liveData = await loadLiveProgramsData();
      if (!alive) {
        return;
      }

      setColleges(liveData.colleges);
      setCourses(liveData.courses);
      setIsFallback(liveData.isFallback);
      setSource(liveData.source);
      setIsLoading(false);
    }

    loadData();
    return () => {
      alive = false;
    };
  }, []);

  const filteredCourses = useMemo(
    () => (selectedCollege ? courses.filter(course => course.college === selectedCollege) : courses),
    [courses, selectedCollege],
  );

  const getCollegeById = (id: string) => colleges.find(c => c.id === id);
  const selectedCollegeName = selectedCollege ? getCollegeById(selectedCollege)?.name ?? 'Selected College' : 'All Programs';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-12 text-white md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm md:h-14 md:w-14">
              <GraduationCap className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Academic Programs</h1>
              <p className="mt-2 text-sm text-purple-100 md:text-base">Explore our wide range of degree programs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <Card className="mb-6 border-blue-200 bg-blue-50/70">
          <CardContent className="pt-6 text-sm text-blue-900">
            <span className="font-semibold">Data source:</span> {source}
            {isLoading ? (
              <span className="ml-2">Loading live programs...</span>
            ) : isFallback ? (
              <span className="ml-2">Live page not fully reachable, showing fallback data.</span>
            ) : (
              <span className="ml-2">Loaded from live SCC programs page.</span>
            )}
          </CardContent>
        </Card>

        <Tabs value={selectedCollege ?? 'all'} onValueChange={value => setSelectedCollege(value === 'all' ? null : value)}>
          <TabsList className="mb-6 h-auto w-full flex-wrap justify-start gap-2 rounded-xl bg-transparent p-0">
            <TabsTrigger value="all" className="h-10 flex-none">
              All Programs
            </TabsTrigger>
            {colleges.map(college => (
              <TabsTrigger key={college.id} value={college.id} className="h-10 flex-none">
                {college.shortName}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCollege ?? 'all'}>
            {!selectedCollege && (
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Our Colleges</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {colleges.map(college => (
                    <Card
                      key={college.id}
                      className="group cursor-pointer border-gray-200 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      onClick={() => setSelectedCollege(college.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setSelectedCollege(college.id);
                        }
                      }}
                    >
                      <CardHeader>
                        <div className="mb-2 flex items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 transition-transform group-hover:scale-110">
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
                        </div>
                        <CardTitle className="text-base font-bold transition-colors group-hover:text-blue-600">{college.name}</CardTitle>
                        <CardDescription>{college.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Dean: {college.dean}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t text-sm font-medium text-blue-700">
                        {college.courses.length} Programs Available
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">{selectedCollegeName}</h2>
              <div className="grid gap-6">
                {filteredCourses.map(course => {
                  const college = getCollegeById(course.college);
                  return (
                    <Card key={course.id} className="group border-gray-200 shadow-sm transition-all hover:shadow-lg">
                      <CardHeader className="gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge className="rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-blue-700" variant="secondary">
                            {course.code}
                          </Badge>
                          <Badge variant="outline" className="rounded-lg px-3 py-1">
                            {college?.shortName ?? 'N/A'}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                          {course.degree} {course.name}
                        </CardTitle>
                        <CardDescription className="text-sm leading-6 text-gray-600">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value={`details-${course.id}`}>
                            <AccordionTrigger className="py-2 text-sm">Program details</AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  <span>{college?.name ?? 'College not tagged'}</span>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                      <CardFooter className="justify-end">
                        <Button>Learn More</Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
