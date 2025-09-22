import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center md:text-left">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg font-headline">UG Tech Solution</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Digital Solutions for East Africa's Future.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/sme" className="text-muted-foreground hover:text-foreground">SME Solutions</Link></li>
              <li><Link href="/services/startups" className="text-muted-foreground hover:text-foreground">Startup Services</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/content-generator" className="text-muted-foreground hover:text-foreground">Content Tool</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} UG Tech Solution. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
