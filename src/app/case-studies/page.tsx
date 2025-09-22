import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const caseStudies = [
  {
    client: 'Kampala Fresh',
    title: 'Local Grocer Achieves 300% Sales Growth with New E-commerce Platform',
    image: PlaceHolderImages.find(img => img.id === 'case-study-sme'),
    tags: ['SME', 'E-commerce', 'Mobile Money'],
    results: [
      { value: '+300%', label: 'Online Sales' },
      { value: '5,000+', label: 'New Customers' },
      { value: '60%', label: 'Mobile Transactions' },
    ],
    testimonial: '"UGTech Solutions helped us reach customers we never could have before. Their understanding of the local market was key."',
    clientInfo: 'Sarah Nabunnya, Owner',
  },
  {
    client: 'PaySwift',
    title: 'Fintech Startup Dominates Search Rankings for Key Terms',
    image: PlaceHolderImages.find(img => img.id === 'case-study-startup'),
    tags: ['Startup', 'Technical SEO', 'Content Strategy'],
    results: [
      { value: '+150%', label: 'Organic Traffic' },
      { value: 'Top 3', label: 'Ranking for "uganda fintech"' },
      { value: '-40%', label: 'Bounce Rate' },
    ],
    testimonial: '"The technical SEO audit was a game-changer. We saw immediate improvements in our search performance and user engagement."',
    clientInfo: 'Alex Mwangi, CTO',
  },
  {
    client: 'Safari bookings uganda',
    title: 'Tourism Company Increases Bookings by 70% with an Optimized Website',
    image: PlaceHolderImages.find(img => img.id === 'case-study-tourism'),
    tags: ['SME', 'Website Redesign', 'On-Page SEO'],
    results: [
      { value: '+70%', label: 'Online Bookings' },
      { value: '+90%', label: 'Site Traffic' },
      { value: '2x', label: 'Time on Site' },
    ],
    testimonial: '"Our new website is not only beautiful but also functional. It has transformed how we attract and convert international clients."',
    clientInfo: 'James Okello, Director',
  },
   {
    client: 'BodaGo',
    title: 'Logistics Startup Gains Competitive Edge with Performance Optimization',
    image: PlaceHolderImages.find(img => img.id === 'case-study-logistics'),
    tags: ['Startup', 'Performance Audit', 'Maintenance'],
    results: [
      { value: '-1.5s', label: 'Page Load Time' },
      { value: '99.9%', label: 'Uptime' },
      { value: '+25%', label: 'User Retention' },
    ],
    testimonial: '"Keeping our platform fast and reliable is critical. UGTech\'s maintenance plan gives us peace of mind and a faster app."',
    clientInfo: 'Fatuma Hassan, Head of Engineering',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Proven Success Stories
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with businesses to deliver real, measurable results. Explore our impact.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[300px]">
                    {study.image && (
                      <Image
                        src={study.image.imageUrl}
                        alt={study.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={study.image.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-8 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant={tag === 'SME' ? 'default' : 'secondary'}>{tag}</Badge>
                      ))}
                    </div>
                    <CardHeader className="p-0">
                      <CardDescription>{study.client}</CardDescription>
                      <CardTitle className="text-2xl font-headline mt-1">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-6 flex-grow">
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        <p>{study.testimonial}</p>
                        <cite className="block mt-2 not-italic font-semibold">{study.clientInfo}</cite>
                      </blockquote>
                    </CardContent>
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-semibold mb-4">Key Results:</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {study.results.map(result => (
                          <div key={result.label}>
                            <p className="text-3xl font-bold text-primary">{result.value}</p>
                            <p className="text-sm text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
