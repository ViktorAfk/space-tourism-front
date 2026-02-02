import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="text-muted-foreground">This page could not be found.</p>
      <Button onClick={() => navigate('/')}>Go home</Button>
    </div>
  );
}
