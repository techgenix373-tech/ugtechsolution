"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  motion,
} from 'framer-motion';
import { Button } from '@/components/ui/button';


export function AnimatedHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
    >
      <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 -z-10"
      >
          <source src="https://videos.pexels.com/video-files/853875/853875-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white p-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md"
          >
            Digital Solutions for East Africa's Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow"
          >
            We build powerful e-commerce platforms for local businesses and
            provide expert SEO services for startups.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/solutions/sme">Solutions for Local Businesses</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services/startups">Services for Startups</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
