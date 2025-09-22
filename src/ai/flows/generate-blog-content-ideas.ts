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

const GenerateBlogContentIdeasOutputSchema = z.object({
  blogContentIdeas: z
    .array(z.string())
    .describe('A list of blog content ideas.'),
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

  Generate a list of blog content ideas based on current trends and SEO best practices.

  The ideas should be engaging and relevant to the target audience.
  Here are some keywords to guide your idea generation, if provided: {{{keywords}}}

  Here are some example ideas, depending on the target audience:

  SME: "How to Get Your Shop Online in Uganda", "Leveraging Mobile Money for E-commerce in East Africa"
  Startup: "5 Common Technical SEO Mistakes", "Building a Scalable Tech Infrastructure"
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
