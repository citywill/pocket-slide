import { cn } from '@/lib/utils';
import Logo from './Logo';
import { useLogoSrc } from './SlidesViewer';

interface CoverSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  className?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundBlur?: number;
}

export default function CoverSlide({ title, subtitle, author, date, className, backgroundImage, backgroundOpacity = 50, backgroundBlur = 0 }: CoverSlideProps) {
  const logoSrc = useLogoSrc();
  return (
    <div className={cn('flex flex-col h-full items-center justify-center p-6 text-center relative', className)}>
      <Logo className="w-[48px] absolute top-6 left-6 z-2" src={logoSrc} />
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: backgroundOpacity / 100,
            filter: backgroundBlur ? `blur(${backgroundBlur}px)` : undefined,
            zIndex: 0,
          }}
        />
      )}
      <div className="relative z-10 space-y-6 max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-2xl text-muted-foreground font-light">
            {subtitle}
          </p>
        )}
        <div className="pt-12 space-y-2">
          {author && (
            <p className="text-lg font-medium text-foreground">{author}</p>
          )}
          {date && (
            <p className="text-sm text-muted-foreground">{date}</p>
          )}
        </div>
      </div>
    </div>
  );
}
