import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Youtube, href: '#', name: 'YouTube' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Twitter, href: '#', name: 'X' },
];

export function Footer() {
  return (
    <footer className="bg-[rgb(22,63,45)] text-primary-foreground/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 rounded-t-3xl mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-emerald-200 mb-4">
            Pronto a Portare la tua Azienda nel Futuro?
          </h2>
          <p className="max-w-2xl mb-8 text-primary-foreground/70">
            Non lasciare che la concorrenza ti superi. Ogni giorno senza automazione è un'opportunità persa. Inizia oggi: un audit gratuito di 30 minuti ti mostrerà il potenziale di guadagno nascosto nei tuoi processi.
          </p>
          <Button asChild size="lg" className="bg-emerald-300 text-emerald-950 font-bold hover:bg-emerald-400">
            <a href="https://meetings-eu1.hubspot.com/automato" target="_blank" rel="noopener noreferrer">
              Prenota un Audit Gratuito
            </a>
          </Button>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-lg font-headline font-bold tracking-tight mb-4">
                <span className="text-primary">SERV</span>
                <span className="text-white">AI</span>
              </div>
              <p className="text-sm text-primary-foreground/60">
                Sistemi AI su misura per piccole e medie imprese.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2 md:justify-self-center">
              <div>
                <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-white mb-4">Explore</h4>
                <ul className="space-y-3">
                  <li><Link href="/services" className="text-sm hover:text-white transition-colors">Servizi</Link></li>
                  <li><Link href="/case-studies" className="text-sm hover:text-white transition-colors">Casi di Successo</Link></li>
                  <li><Link href="/blogs" className="text-sm hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/about-us" className="text-sm hover:text-white transition-colors">Chi Siamo</Link></li>
                  <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contatti</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><Link href="/legal/terms-and-conditions" className="text-sm hover:text-white transition-colors">Termini e Condizioni</Link></li>
                  <li><Link href="/legal/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-primary-foreground/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} SERV AI S.R.L. – P.IVA 02814790222 – Tutti i diritti riservati.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="text-primary-foreground/60 hover:text-white transition-colors">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
