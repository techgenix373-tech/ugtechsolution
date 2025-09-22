import { ContentGeneratorForm } from '@/components/content-generator-form';

export default function ContentGeneratorPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            AI Content Idea Generator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
