'use client';

import { useActionState, useFormStatus } from 'react';
import { generateIdeasAction, FormState } from '@/lib/actions';
import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Lightbulb, AlertCircle } from 'lucide-react';

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
        <CardTitle>Generate Blog Ideas</CardTitle>
        <CardDescription>
          Select your target audience and provide optional keywords to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
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
                <h3 className="text-lg font-semibold">Generated Ideas:</h3>
                <ul className="space-y-3">
                    {state.ideas.map((idea, index) => (
                        <li key={index} className="flex items-start p-3 rounded-md border bg-muted/50">
                            <Lightbulb className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                            <span>{idea}</span>
                        </li>
                    ))}
                </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
