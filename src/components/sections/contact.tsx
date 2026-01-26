'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Il nome deve essere di almeno 2 caratteri.' }),
  company: z.string().min(2, { message: 'La ragione sociale deve essere di almeno 2 caratteri.' }),
  email: z.string().email({ message: 'Inserisci un indirizzo email valido.' }),
  message: z.string().min(10, { message: 'Il messaggio deve essere di almeno 10 caratteri.' }),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
    form.reset();
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Mail',
      value: 'Servai@pec.servai.it',
      href: 'mailto:Servai@pec.servai.it',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Telefono',
      value: '+39 3936 960038',
      href: 'tel:+393936960038',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Sede Operativa',
      value: 'Via IV Novembre, 2638121 Trento TN',
      href: 'https://www.google.com/maps?q=Via%20IV%20Novembre,%202638121%20Trento%20TN',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-8">
            <div>
              <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Teniamoci in contatto</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold">Contatti</h2>
            </div>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Link href={item.href} key={item.title} target="_blank" rel="noopener noreferrer" className="block group">
                   <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors">
                      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <div className="bg-primary/10 p-3 rounded-lg">{item.icon}</div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                          <p className="text-base font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </CardHeader>
                    </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
             <Card className="bg-background/50 border-border/50 p-6 sm:p-8 rounded-2xl">
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome e Cognome</FormLabel>
                          <FormControl>
                            <Input placeholder="Antonio Conte" {...field} className="bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ragione Sociale</FormLabel>
                          <FormControl>
                            <Input placeholder="AI Innovations S.r.l." {...field} className="bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="elconte@aiagency.com" {...field} className="bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Messaggio</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Ciao! Vorrei sapere di più su..." {...field} className="min-h-[120px] bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Invia</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
