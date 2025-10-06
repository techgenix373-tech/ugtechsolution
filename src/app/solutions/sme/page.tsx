
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Smartphone, LayoutDashboard, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile Money Integration',
    description: 'Seamlessly accept payments from MTN Mobile Money, Airtel Money, and more, directly on your website.',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Custom Dashboards',
    description: 'Track your sales, inventory, and customer data with an easy-to-use dashboard tailored to your business needs.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Local Customer Support',
    description: 'Get help when you need it from our Uganda-based support team that understands the local market.',
  },
];

const pricingTiers = [
  {
    name: 'Starter Shop',
    price: 'UGX 800,000',
    period: 'one-time setup',
    description: 'Perfect for small businesses getting started online.',
    features: [
      'Customizable Storefront',
      'Up to 50 Products',
      'Mobile Money & Card Payments',
      'Basic Sales Dashboard',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Business Pro',
    price: 'UGX 2,500,000',
    period: 'one-time setup',
    description: 'Advanced features for growing businesses.',
    features: [
      'Everything in Starter',
      'Up to 500 Products',
      'Advanced Analytics',
      'Inventory Management',
      'Priority Email Support',
    ],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: 'for custom quote',
    description: 'Tailored solutions for large-scale operations.',
    features: [
      'Everything in Pro',
      'Unlimited Products',
      'Multi-vendor Marketplace',
      'API Access & Integrations',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Sales',
  },
];

const heroImage = PlaceHolderImages.find(img => img.id === 'sme-solution-bg');

export default function SmeSolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-white overflow-hidden">
        {heroImage && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
              className="absolute inset-0"
            >
              <Image 
                  src={heroImage.imageUrl} 
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="object-cover"
              />
            </motion.div>
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold">
            E-commerce Solutions for East African Businesses
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Go digital with a powerful online store built for the local market. Accept mobile money, manage your inventory, and grow your sales.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Built for Your Success</h2>
            <p className="mt-2 text-muted-foreground max-w-prose mx-auto">Key features designed for businesses in East Africa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 flex flex-col items-center">
                <div className="bg-primary/20 rounded-full p-3 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Transparent Pricing</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Choose the plan that's right for you. No hidden fees. One-time setup costs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary' : ''}`}>
                <CardHeader className="text-center">
                  {tier.popular && (
                    <div className="text-sm font-semibold text-primary mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold break-words">{tier.price}</span>
                    <p className="text-sm text-muted-foreground">{tier.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
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
