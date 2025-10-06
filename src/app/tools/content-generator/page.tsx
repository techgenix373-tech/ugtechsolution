
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContentGeneratorForm } from '@/components/content-generator-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'content-tool-hero');

export default function ContentGeneratorPage() {
  return (
    <div>
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
            AI Content Idea Generator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Stuck on what to write? Generate engaging blog post ideas tailored to your audience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContentGeneratorForm />
          </div>
        </div>
      </section>
    </div>
  );
}
