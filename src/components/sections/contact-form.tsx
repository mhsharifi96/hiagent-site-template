'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input, Textarea} from '@/components/ui/input';
import {useToast} from '@/components/ui/toast';

type Messages = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  submit: string;
  success: string;
  error: string;
};

export function ContactForm({messages}: {messages: Messages}) {
  const [loading, setLoading] = useState(false);
  const {showToast} = useToast();

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      projectType: String(formData.get('projectType') || '').trim(),
      budget: String(formData.get('budget') || '').trim(),
      message: String(formData.get('message') || '').trim()
    };

    if (!payload.name || !payload.email || !payload.message) {
      showToast(messages.error, 'error');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Request failed');

      const form = document.getElementById('contact-form') as HTMLFormElement | null;
      form?.reset();
      showToast(messages.success, 'success');
    } catch {
      showToast(messages.error, 'error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="contact-form"
      action={handleSubmit}
      className="glass-card space-y-4 p-6"
      aria-label="Lead form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          {messages.name}
          <Input name="name" required aria-label={messages.name} />
        </label>
        <label className="text-sm font-medium">
          {messages.email}
          <Input name="email" type="email" required aria-label={messages.email} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          {messages.company}
          <Input name="company" aria-label={messages.company} />
        </label>
        <label className="text-sm font-medium">
          {messages.projectType}
          <Input name="projectType" aria-label={messages.projectType} />
        </label>
      </div>
      <label className="text-sm font-medium">
        {messages.budget}
        <Input name="budget" aria-label={messages.budget} />
      </label>
      <label className="text-sm font-medium">
        {messages.message}
        <Textarea name="message" required aria-label={messages.message} />
      </label>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? '...' : messages.submit}
      </Button>
    </form>
  );
}
