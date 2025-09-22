import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Activity, FileSearch, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Activity className="h-8 w-8 text-muted-foreground" />,
    title: 'Performance Audits',
    description: 'We identify technical bottlenecks that slow down your site and harm user experience, providing a clear roadmap for improvement.',
  },
  {
    icon: <FileSearch className="h-8 w-8 text-muted-foreground" />,
    title: 'On-Page SEO',
    description: 'Comprehensive optimization of your content, meta tags, and site structure to improve search engine rankings.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-muted-foreground" />,
    title: 'Security Monitoring',
    description: 'Proactive monitoring and regular updates to protect your website from threats and ensure it stays online.',
  },
];

const pricingTiers = [
  {
    name: 'Growth',
    price: '$500',
    period: 'per month',
    description: 'Essential maintenance and SEO for early-stage startups.',
    features: [
      'Monthly Performance Report',
      'On-Page SEO for 5 pages',
      'Core Web Vitals Monitoring',
      'Weekly Security Scans',
    ],
    cta: 'Start Growing',
  },
  {
    name: 'Scale',
    price: '$1,200',
    period: 'per month',
    description: 'Comprehensive support for scaling startups.',
    features: [
      'Everything in Growth',
      'On-Page SEO for 15 pages',
      'Technical SEO Audit/Quarter',
      'Uptime Monitoring',
      'Priority Support',
    ],
    cta: 'Choose Scale',
    popular: true,
  },
  {
    name: 'Custom Retainer',
    price: 'Let\'s Talk',
    period: 'flexible terms',
    description: 'A dedicated partnership for your unique needs.',
    features: [
      'Everything in Scale',
      'Full Site SEO Management',
      'Content Strategy',
      'Backlink Analysis',
      'Dedicated Slack Channel',
    ],
    cta: 'Contact Sales',
  },
];

const heroImage = PlaceHolderImages.find(img => img.id === 'startup-service-bg');

export default function StartupsServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-secondary">
        {heroImage && (
            <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover opacity-10"
            />
        )}
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Technical SEO & Maintenance for Startups
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Focus on your product while we handle the technical details. We keep your site fast, secure, and climbing the search rankings.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Technical Co-Pilot</h2>
            <p className="mt-2 text-muted-foreground">Core services to ensure your startup's website is a growth engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold font-headline">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Monthly Retainer Plans</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Predictable pricing for ongoing technical excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={tier.popular ? 'border-primary' : ''}>
                <CardHeader className="text-center">
                  {tier.popular && (
                    <div className="text-sm font-semibold text-primary mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <p className="text-sm text-muted-foreground">{tier.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
