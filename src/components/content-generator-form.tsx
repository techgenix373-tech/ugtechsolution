'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { generateIdeasAction, FormState } from '@/lib/actions';
import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';

const initialState: FormState = {
  message: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Generate Ideas'
      )}
    </Button>
  );
}

export function ContentGeneratorForm() {
  const [state, formAction] = useActionState(generateIdeasAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === 'success') {
      // formRef.current?.reset(); // Optionally reset form on success
    }
  }, [state]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Blog Ideas & Outlines</CardTitle>
        <CardDescription>
          Select your target audience and provide optional keywords to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Select name="targetAudience" required defaultValue="SME">
                <SelectTrigger id="targetAudience" className="w-full">
                  <SelectValue placeholder="Select an audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SME">Small & Medium Enterprises (SMEs)</SelectItem>
                  <SelectItem value="startup">Startups</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contentLength">Content Length</Label>
              <Select name="contentLength" required defaultValue="standard">
                <SelectTrigger id="contentLength" className="w-full">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short Form (~400 words)</SelectItem>
                  <SelectItem value="standard">Standard (~1000 words)</SelectItem>
                  <SelectItem value="long">Long Form (1500+ words)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="toneOfVoice">Tone of Voice</Label>
            <Select name="toneOfVoice" required defaultValue="professional">
              <SelectTrigger id="toneOfVoice" className="w-full">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual & Friendly</SelectItem>
                <SelectItem value="technical">Technical & Data-Driven</SelectItem>
                <SelectItem value="inspirational">Inspirational</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="numberOfSuggestions">Number of Suggestions</Label>
                <Input
                  id="numberOfSuggestions"
                  name="numberOfSuggestions"
                  type="number"
                  defaultValue="3"
                  min="1"
                  max="10"
                  required
                />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contentFormat">Content Format</Label>
              <Select name="contentFormat" required defaultValue="blog">
                <SelectTrigger id="contentFormat" className="w-full">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="listicle">Listicle</SelectItem>
                  <SelectItem value="how-to">How-To Guide</SelectItem>
                  <SelectItem value="comparison">Comparison Post</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords (Optional)</Label>
            <Input
              id="keywords"
              name="keywords"
              placeholder="e.g., e-commerce, mobile payments, SEO"
            />
          </div>

          <SubmitButton />
        </form>

        <div className="mt-6">
          {state.message === 'error' && state.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          {state.message === 'success' && state.ideas && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Generated Ideas
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {state.ideas.map((idea, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {idea.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pl-4 pt-2">
                        {idea.outline.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-3 mt-1 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
