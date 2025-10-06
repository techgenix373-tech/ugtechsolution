
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Birungi Louis',
    role: 'CEO & Founder, Content Strategist',
    image: PlaceHolderImages.find(img => img.id === 'team-member-1'),
    bio: 'With a decade of experience in tech across Africa, Birungi founded UGTech to empower local businesses with world-class digital tools and content strategies.',
  },
  {
    name: 'Nazziwa Sharifah',
    role: 'Co Founder, Lead Developer',
    image: PlaceHolderImages.find(img => img.id === 'team-member-2'),
    bio: 'A full-stack expert with outstanding experience in web development, Nazziwa leads our technical team, turning complex challenges into elegant, scalable solutions.',
  },
  {
    name: 'Andrew Bisaso',
    role: 'Managing Director, UI/UX Designer',
    image: PlaceHolderImages.find(img => img.id === 'team-member-3'),
    bio: 'Andrew is passionate about creating intuitive and beautiful user experiences that drive engagement and delight users.',
  },
];

const aboutHeroImage = PlaceHolderImages.find(img => img.id === 'about-page-hero');

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {aboutHeroImage && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0"
          >
            <Image
              src={aboutHeroImage.imageUrl}
              alt={aboutHeroImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutHeroImage.imageHint}
              priority
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            We're a Team of Passionate Builders
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Our mission is to bridge the technology gap for East African businesses, providing the tools and expertise needed to thrive in the digital economy.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="text-center shadow-lg w-full">
                  <CardHeader>
                    {member.image && (
                      <div className="relative w-32 h-32 mx-auto">
                        <Image
                          src={member.image.imageUrl}
                          alt={member.image.description}
                          fill
                          className="rounded-full object-cover border-4 border-primary/50"
                          data-ai-hint={member.image.imageHint}
                        />
                      </div>
                    )}
                    <CardTitle className="pt-4">{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4">
                <h3 className="text-xl font-semibold">Local First</h3>
                <p className="mt-2 text-muted-foreground">We build solutions with a deep understanding of the local context and challenges.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Radical Ownership</h3>
                <p className="mt-2 text-muted-foreground">We take pride in our work and are accountable for the success of our clients.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Constant Innovation</h3>
                <p className="mt-2 text-muted-foreground">We are always learning and adapting to bring the best technology to our partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
