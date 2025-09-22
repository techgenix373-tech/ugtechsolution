import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Amina Okoro',
    role: 'CEO & Founder',
    image: PlaceHolderImages.find(img => img.id === 'team-member-1'),
    bio: 'With a decade of experience in tech across Africa, Amina founded UGTech to empower local businesses with world-class digital tools.',
  },
  {
    name: 'David Kasumba',
    role: 'Lead Developer',
    image: PlaceHolderImages.find(img => img.id === 'team-member-2'),
    bio: 'A full-stack expert, David leads our technical team, turning complex challenges into elegant, scalable solutions.',
  },
  {
    name: 'Grace Nakato',
    role: 'UI/UX Designer',
    image: PlaceHolderImages.find(img => img.id === 'team-member-3'),
    bio: 'Grace is passionate about creating intuitive and beautiful user experiences that drive engagement and delight users.',
  },
  {
    name: 'Ben Sserwanga',
    role: 'SEO & Content Strategist',
    image: PlaceHolderImages.find(img => img.id === 'team-member-4'),
    bio: 'Ben combines data-driven insights with creative content strategies to help our clients dominate search and connect with their audience.',
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            We're a Team of Passionate Builders
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to bridge the technology gap for East African businesses, providing the tools and expertise needed to thrive in the digital economy.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-lg">
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
                  <CardTitle className="font-headline pt-4">{member.name}</CardTitle>
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
            <h2 className="text-3xl font-bold font-headline">Our Values</h2>
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
