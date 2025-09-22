'use server';

import { z } from 'zod';
import { generateBlogContentIdeas, GenerateBlogContentIdeasInput, GenerateBlogContentIdeasOutput } from '@/ai/flows/generate-blog-content-ideas';

const FormSchema = z.object({
  targetAudience: z.enum(['SME', 'startup']),
  keywords: z.string().optional(),
  contentLength: z.enum(['short', 'standard', 'long']),
  toneOfVoice: z.enum(['professional', 'casual', 'technical', 'inspirational']),
  numberOfSuggestions: z.coerce.number().min(1).max(10),
  contentFormat: z.enum(['blog', 'listicle', 'how-to', 'comparison']),
});

export type FormState = {
  message: 'success' | 'error' | 'idle';
  ideas?: GenerateBlogContentIdeasOutput['blogContentIdeas'];
  error?: string;
};

export async function generateIdeasAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    targetAudience: formData.get('targetAudience'),
    keywords: formData.get('keywords'),
    contentLength: formData.get('contentLength'),
    toneOfVoice: formData.get('toneOfVoice'),
    numberOfSuggestions: formData.get('numberOfSuggestions'),
    contentFormat: formData.get('contentFormat'),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: 'error',
      error: 'Invalid form data. Please check your inputs.',
    };
  }

  try {
    const result = await generateBlogContentIdeas(validatedFields.data as GenerateBlogContentIdeasInput);
    
    if (result.blogContentIdeas && result.blogContentIdeas.length > 0) {
      return {
        message: 'success',
        ideas: result.blogContentIdeas,
      };
    } else {
      return {
        message: 'error',
        error: 'No ideas were generated. Try different keywords or try again later.',
      };
    }
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    return {
      message: 'error',
      error: 'An error occurred while generating ideas. Please try again.',
    };
  }
}
