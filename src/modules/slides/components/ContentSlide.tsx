import { cn } from '@/lib/utils';
import Logo from './Logo';
import { useLogoSrc } from './SlidesViewer';

interface ContentSlideProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundBlur?: number;
}

export default function ContentSlide({ title, children, className, backgroundImage, backgroundOpacity = 50, backgroundBlur = 0 }: ContentSlideProps) {
  const logoSrc = useLogoSrc();
  return (
    <div className={cn('flex flex-col min-h-screen px-12 py-6 relative', className)}>
      <Logo className="w-[36px] absolute top-6 right-12 z-20" src={logoSrc} />
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: backgroundOpacity / 100,
            filter: backgroundBlur ? `blur(${backgroundBlur}px)` : undefined,
            transform: backgroundBlur ? 'scale(1.1)' : undefined,
            zIndex: 0,
          }}
        />
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground relative z-10">
        {title}
      </h2>
      <div className="h-px bg-primary/90 mt-2 mb-4 relative z-10" />
      <div className="flex-1 relative z-10">
        {children}
      </div>
    </div>
  );
}
