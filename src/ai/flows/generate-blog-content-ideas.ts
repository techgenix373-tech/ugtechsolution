// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating blog content ideas tailored to SMEs or startups.
 *
 * The flow takes a target audience (SME or startup) as input and returns a list of blog content ideas based on current trends and SEO best practices.
 * It exports:
 * - `generateBlogContentIdeas`: The main function to trigger the flow.
 * - `GenerateBlogContentIdeasInput`: The input type for the `generateBlogContentIdeas` function.
 * - `GenerateBlogContentIdeasOutput`: The output type for the `generateBlogContentIdeas` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogContentIdeasInputSchema = z.object({
  targetAudience: z
    .enum(['SME', 'startup'])
    .describe('The target audience for the blog content ideas.'),
  keywords: z
    .string()
    .describe("Keywords to focus on for generating blog content ideas. If left blank, focus on generating ideas based on current trends and SEO best practices. If non-blank, use the keywords to narrow the idea generation.")
    .optional(),
  contentLength: z.enum(['short', 'standard', 'long']).describe('The desired length of the content.'),
  toneOfVoice: z.enum(['professional', 'casual', 'technical', 'inspirational']).describe('The desired tone of voice for the content.'),
  numberOfSuggestions: z.coerce.number().min(1).max(10).describe('The number of blog content ideas to generate.'),
  contentFormat: z.enum(['blog', 'listicle', 'how-to', 'comparison', 'case-study', 'review', 'faq', 'press-release']).describe('The desired format of the content.'),
});
export type GenerateBlogContentIdeasInput = z.infer<
  typeof GenerateBlogContentIdeasInputSchema
>;

const IdeaWithOutlineSchema = z.object({
  title: z.string().describe('The title of the blog post idea.'),
  outline: z.array(z.string()).describe('A list of sections or key points for the blog post outline.'),
});

const GenerateBlogContentIdeasOutputSchema = z.object({
  blogContentIdeas: z.array(IdeaWithOutlineSchema).describe('A list of blog content ideas, each with a title and an outline.'),
});
export type GenerateBlogContentIdeasOutput = z.infer<
  typeof GenerateBlogContentIdeasOutputSchema
>;

export async function generateBlogContentIdeas(
  input: GenerateBlogContentIdeasInput
): Promise<GenerateBlogContentIdeasOutput> {
  return generateBlogContentIdeasFlow(input);
}

const generateBlogContentIdeasPrompt = ai.definePrompt({
  name: 'generateBlogContentIdeasPrompt',
  input: {schema: GenerateBlogContentIdeasInputSchema},
  output: {schema: GenerateBlogContentIdeasOutputSchema},
  prompt: `You are a marketing expert specializing in content creation for {{targetAudience}}s.

  Generate a list of {{numberOfSuggestions}} content ideas based on current trends and SEO best practices. For each idea, provide a catchy title and a brief outline appropriate for the selected format.

  The ideas should be engaging and relevant to the target audience.
  
  The tone of the content should be: {{toneOfVoice}}.
  The desired content length is: {{contentLength}}.
  - short: 300-500 words, with a 2-3 point outline.
  - standard: 800-1200 words, with a 3-5 point outline.
  - long: 1500+ words, with a 5-7 point detailed outline.
  
  The desired content format is: {{contentFormat}}.
  - blog: A standard article format.
  - listicle: A list-based article (e.g., "5 Ways to..."). Title and outline should reflect this.
  - how-to: A step-by-step guide. Title and outline should be structured as steps.
  - comparison: A post comparing two or more things. Title and outline should clearly show the comparison.
  - case-study: Structure the outline with sections like "The Challenge," "Our Solution," and "The Results."
  - review: An outline for a product or service review including "Key Features," "Pros & Cons," and a "Final Verdict."
  - faq: Generate a list of relevant questions on the topic and structure them as a Q&A.
  - press-release: A standard press release format including headline, dateline, introduction, body, and boilerplate.

  Here are some keywords to guide your idea generation, if provided: {{{keywords}}}

  Here are some example ideas, depending on the target audience:

  SME:
  Title: "How to Get Your Shop Online in Uganda"
  Outline:
  - Choosing the right e-commerce platform
  - Integrating Mobile Money for local payments
  - Simple marketing strategies for your new online store
  - Navigating logistics and delivery in Uganda

  Startup:
  Title: "5 Common Technical SEO Mistakes to Avoid"
  Outline:
  - Ignoring mobile-first indexing
  - Poor site structure and internal linking
  - Not optimizing for Core Web Vitals
  - Missing or unoptimized structured data (Schema)
  - Forgetting about international SEO for scaling
  `,
});

const generateBlogContentIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogContentIdeasFlow',
    inputSchema: GenerateBlogContentIdeasInputSchema,
    outputSchema: GenerateBlogContentIdeasOutputSchema,
  },
  async input => {
    const {output} = await generateBlogContentIdeasPrompt(input);
    return output!;
  }
);

