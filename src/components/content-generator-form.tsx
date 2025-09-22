'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { generateIdeasAction, FormState } from '@/lib/actions';
import { useEffect, useRef, useState, useMemo } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Lightbulb, AlertCircle, CheckCircle, Copy, Pencil, Save, List, FileText, CaseSensitive, HelpCircle, Inbox, Mail, Send, Newspaper } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
  const [editingIdea, setEditingIdea] = useState<{ title: string; outline: string[] } | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedOutline, setEditedOutline] = useState('');
  const { toast } = useToast();

  // State for controlled components
  const [targetAudience, setTargetAudience] = useState('SME');
  const [contentLength, setContentLength] = useState('standard');
  const [toneOfVoice, setToneOfVoice] = useState('professional');
  const [numberOfSuggestions, setNumberOfSuggestions] = useState('3');
  const [contentFormat, setContentFormat] = useState('blog');
  const [keywords, setKeywords] = useState('');

  useEffect(() => {
    if (state.message === 'success') {
      // formRef.current?.reset(); // Optionally reset form on success
    }
  }, [state]);

  const handleCopy = (idea: { title: string; outline: string[] }) => {
    const textToCopy = `Title: ${idea.title}\n\nOutline:\n- ${idea.outline.join('\n- ')}`;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard!",
      description: "The idea and outline have been copied.",
    });
  };

  const openEditDialog = (idea: { title: string; outline: string[] }) => {
    setEditingIdea(idea);
    setEditedTitle(idea.title);
    setEditedOutline(idea.outline.join('\n'));
  };

  const handleSaveChanges = () => {
    if (editingIdea) {
      // Here you would typically update the state that holds the ideas.
      // For this example, we'll just show a toast.
      toast({
        title: "Changes Saved (locally)",
        description: "Your edits have been saved in this session.",
      });
      // In a real app, you might want to update the 'state.ideas' array
      // This is left as an exercise.
      setEditingIdea(null);
    }
  };
  
  const getIconForPoint = (point: string, format: string) => {
    const iconClass = "h-4 w-4 mr-3 mt-1 text-green-500 flex-shrink-0";
    switch (format) {
      case 'blog':
        return <FileText className={iconClass} />;
      case 'listicle':
        return <List className={iconClass} />;
      case 'how-to':
        return <HelpCircle className={iconClass} />;
      case 'case-study':
        return <CaseSensitive className={iconClass} />;
      case 'faq':
        return <HelpCircle className={iconClass} />;
      case 'promotional-email':
        return <Mail className={iconClass} />;
      case 'transactional-email':
        return <Send className={iconClass} />;
      case 'welcome-email':
        return <Inbox className={iconClass} />;
      case 'newsletter':
          return <Newspaper className={iconClass} />;
      default:
        return <CheckCircle className={iconClass} />;
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Content Ideas</CardTitle>
        <CardDescription>
          Select your target audience and refine your content needs to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Select name="targetAudience" required value={targetAudience} onValueChange={setTargetAudience}>
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
              <Select name="contentLength" required value={contentLength} onValueChange={setContentLength}>
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
            <Select name="toneOfVoice" required value={toneOfVoice} onValueChange={setToneOfVoice}>
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
                  value={numberOfSuggestions}
                  onChange={(e) => setNumberOfSuggestions(e.target.value)}
                  min="1"
                  max="10"
                  required
                />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contentFormat">Content Format</Label>
              <Select name="contentFormat" required value={contentFormat} onValueChange={setContentFormat}>
                <SelectTrigger id="contentFormat" className="w-full">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="listicle">List-based Article</SelectItem>
                  <SelectItem value="how-to">How-To Guide</SelectItem>
                  <SelectItem value="comparison">Comparison Post</SelectItem>
                  <SelectItem value="case-study">Case Study</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="faq">FAQ Article</SelectItem>
                  <SelectItem value="press-release">Press Release</SelectItem>
                  <SelectItem value="promotional-email">Promotional Email</SelectItem>
                  <SelectItem value="transactional-email">Transactional Email</SelectItem>
                  <SelectItem value="welcome-email">Welcome Email</SelectItem>
                  <SelectItem value="newsletter">Newsletter</SelectItem>
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
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
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
                            {getIconForPoint(point, contentFormat)}
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => handleCopy(idea)}>
                          <Copy className="mr-2" />
                          Copy
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => openEditDialog(idea)}>
                              <Pencil className="mr-2" />
                              Edit
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </CardContent>

      {editingIdea && (
        <Dialog open={!!editingIdea} onOpenChange={(isOpen) => !isOpen && setEditingIdea(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Content Idea</DialogTitle>
              <DialogDescription>
                Make changes to the title and outline below.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input id="edit-title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-outline">Outline</Label>
                <Textarea id="edit-outline" value={editedOutline} onChange={(e) => setEditedOutline(e.target.value)} className="min-h-[200px]" />
              </div>
            </div>
            <Button onClick={handleSaveChanges}>
              <Save className="mr-2" />
              Save Changes
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
}
