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
    .describe("Keywords to focus on for generating blog content ideas.  If left blank, focus on generating ideas based on current trends and SEO best practices.  If non-blank, use the keywords to narrow the idea generation.")
    .optional(),
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

  Generate a list of blog content ideas based on current trends and SEO best practices. For each idea, provide a catchy title and a brief outline with 3-5 key sections or talking points.

  The ideas should be engaging and relevant to the target audience.
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
