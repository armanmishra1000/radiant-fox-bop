import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col items-center text-center">
        <AlertTriangle className="h-16 w-16 text-primary mb-4" />
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase">
          404 - Page Not Found
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
        </p>
        <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground">
          <Link href="/">
            Go Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}