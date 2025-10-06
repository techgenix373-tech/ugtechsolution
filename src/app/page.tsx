import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BarChart, Briefcase, Lightbulb, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedHero } from '@/components/animated-hero';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

const testimonials = [
  {
    name: 'Sarah Nakyanzi',
    company: 'Director, Kampala Artisans',
    text: 'UGTech Solutions revolutionized our online presence. Their e-commerce platform with mobile money integration was a game-changer for our sales.',
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    name: 'Johnathan Kasibante',
    company: 'CEO, TechNova Startups',
    text: 'The technical SEO audit was incredibly detailed. We saw a 40% increase in organic traffic within three months. Highly recommended for any startup.',
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    name: 'Fatima Ibrahim',
    company: 'Founder, AfroChic Boutique',
    text: "I'm not tech-savvy, but their team made the process of getting my shop online so easy. The dashboard is simple and powerful.",
    rating: 4,
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  },
];


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedHero />

      {/* Services Overview */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              From local shops to high-growth startups, we provide the technology and expertise to help you succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                  <Briefcase className="w-8 h-8" />
                </div>
                <CardTitle className="pt-4">E-commerce for SMEs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom online stores integrated with local payment methods like Mobile Money to get your business selling online, fast.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                  <BarChart className="w-8 h-8" />
                </div>
                <CardTitle className="pt-4">SEO for Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Technical SEO audits and on-page optimization to boost your organic traffic and dominate search rankings.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <CardTitle className="pt-4">Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage our AI-powered tool to generate compelling blog ideas and content that attracts and converts your target audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Real stories from businesses we've helped empower.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar.imageUrl}
                      alt={testimonial.avatar.description}
                      width={48}
                      height={48}
                      className="rounded-full"
                      data-ai-hint={testimonial.avatar.imageHint}
                    />
                  )}
                  <div>
                    <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.company}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We are a passionate team of developers, designers, and strategists dedicated to helping your business thrive in the digital age.
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex -space-x-4">
                {PlaceHolderImages.filter(i => i.id.startsWith('team-member-')).slice(0, 3).map(member => (
                  <Image key={member.id} src={member.imageUrl} alt={member.description} width={64} height={64} className="rounded-full border-4 border-background" data-ai-hint={member.imageHint} />
                ))}
              </div>
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about">Learn More About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
