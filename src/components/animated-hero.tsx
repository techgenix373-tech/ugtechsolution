"use client";

import React, from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Code, PenTool, Briefcase, Database } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

const FloatingIcon = ({
  icon: Icon,
  className,
  delay,
  x,
  y,
}: {
  icon: React.ElementType;
  className: string;
  delay: number;
  x: number;
  y: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, x, y }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    className={`absolute text-white/50 ${className}`}
  >
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4 + delay * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Icon className="w-12 h-12 md:w-16 md:h-16" />
    </motion.div>
  </motion.div>
);

export function AnimatedHero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      className="relative w-full h-[70vh] md:h-[80vh] mb-16 md:mb-32"
      onMouseMove={handleMouseMove}
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="relative w-full h-full">
        <motion.div
            className="w-full h-full"
            style={{
                transform: useMotionTemplate`
                perspective(800px)
                rotateX(calc(${useTransform(mouseY, (y) => (y ? y - 250 : 0)) / -25}deg))
                rotateY(calc(${useTransform(mouseX, (x) => (x ? x - 450 : 0)) / 25}deg))
                `,
            }}
        >
            <FloatingIcon icon={Code} className="top-[15%] left-[10%]" delay={0.1} x={-100} y={-50} />
            <FloatingIcon icon={PenTool} className="top-[20%] right-[15%]" delay={0.3} x={100} y={-50}/>
            <FloatingIcon icon={Briefcase} className="bottom-[25%] left-[20%]" delay={0.5} x={-100} y={50}/>
            <FloatingIcon icon={Database} className="bottom-[20%] right-[25%]" delay={0.7} x={100} y={50}/>
        </motion.div>
      </div>

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
    </motion.section>
  );
}
