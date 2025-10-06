
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactHeroImage = PlaceHolderImages.find(img => img.id === 'contact-page-hero');

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const recipientEmail = 'techgenix373@gmail.com';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom:%20${encodeURIComponent(
      name
    )}%0D%0AEmail:%20${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <section className="relative py-16 md:py-24 text-white">
        {contactHeroImage && (
            <Image 
                src={contactHeroImage.imageUrl} 
                alt={contactHeroImage.description}
                data-ai-hint={contactHeroImage.imageHint}
                fill
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            We're here to help. Whether you have a question about our services or want to start a project, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of the channels below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Our Office</h3>
                      <p className="text-muted-foreground">Nakawa, Old Portbell Road</p>
                      <p className="text-muted-foreground">Kampala, Uganda</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a href="mailto:techgenix373@gmail.com" className="text-primary hover:underline break-all">
                        techgenix373@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <a href="tel:+256700690945" className="text-primary hover:underline block">
                        +256 700 690 945
                      </a>
                      <a href="tel:+256781903525" className="text-primary hover:underline block">
                        +256 781 903 525
                      </a>
                      <a href="tel:+256765947877" className="text-primary hover:underline block">
                        +256 765 947 877
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What can we help you with?" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
