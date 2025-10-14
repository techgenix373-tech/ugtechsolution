'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is UGTechsolution?',
    answer:
      'UGTechsolution is a technology company focused on providing digital solutions for East African businesses. We specialize in building powerful e-commerce platforms for Small and Medium Enterprises (SMEs) and offering expert technical SEO services for startups.',
  },
  {
    question: 'Who are your services for?',
    answer:
      'Our services are tailored for two main groups: local East African SMEs looking to establish an online presence and sell their products online, and high-growth startups that need to improve their search engine visibility and website performance.',
  },
  {
    question: 'How does the e-commerce setup for SMEs work?',
    answer:
      'We build custom online stores with features tailored for the local market, including integration with popular mobile money payment gateways. Our process involves understanding your business needs, designing a user-friendly storefront, setting up your products, and providing you with a dashboard to manage your sales and inventory.',
  },
  {
    question: 'What is included in the SEO services for startups?',
    answer:
      'Our SEO services focus on the technical aspects of your website. This includes performance audits to identify speed bottlenecks, on-page SEO to optimize content and structure, security monitoring to protect your site, and Core Web Vitals monitoring to ensure a great user experience that search engines love.',
  },
  {
    question: 'How does the AI Content Idea Generator work?',
    answer:
      'Our AI-powered tool helps you overcome writer\'s block by generating a list of relevant and engaging content ideas. You simply input your target audience, desired content length, tone of voice, and optional keywords, and the tool provides you with a list of titles and outlines for blog posts, emails, and more.',
  },
  {
    question: 'How can I get started with UGTechsolution?',
    answer:
      'The best way to start is by visiting our contact page and sending us a message. Whether you\'re interested in an e-commerce solution or our startup services, we\'d love to hear from you and discuss how we can help your business grow.',
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions? We have answers. Here are some of the most common questions we get.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
