import React, { useState, useEffect, useCallback, Children, createContext, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const LogoSrcContext = createContext<string | undefined>(undefined);

export function useLogoSrc() {
  return useContext(LogoSrcContext);
}

interface SlidesViewerProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  aspectRatio?: string;
  onSlideChange?: (index: number) => void;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundBlur?: number;
  logoSrc?: string;
}

export default function SlidesViewer({
  children,
  className,
  showNavigation = true,
  aspectRatio = '16/9',
  onSlideChange,
  backgroundImage,
  backgroundOpacity = 50,
  backgroundBlur = 0,
  logoSrc = '/logo.svg'
}: SlidesViewerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSlide = parseInt(searchParams.get('slide') || '0', 10);
  const [currentIndex, setCurrentIndex] = useState(isNaN(initialSlide) ? 0 : initialSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenScale, setFullscreenScale] = useState(1);
  const slidesArray = Children.toArray(children);
  const totalSlides = slidesArray.length;

  useEffect(() => {
    if (!isFullscreen) {
      setFullscreenScale(1);
      return;
    }

    const calculateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const baseWidth = 1024;
      const [w, h] = aspectRatio.split('/').map(Number);
      const baseHeight = baseWidth * h / w;
      const scaleX = viewportWidth / baseWidth;
      const scaleY = viewportHeight / baseHeight;
      setFullscreenScale(Math.min(scaleX, scaleY));
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [isFullscreen, aspectRatio]);

  useEffect(() => {
    const slideParam = searchParams.get('slide');
    if (slideParam !== null) {
      const parsed = parseInt(slideParam, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < totalSlides && parsed !== currentIndex) {
        setCurrentIndex(parsed);
      }
    }
  }, [searchParams, totalSlides, currentIndex]);

  const goToSlide = useCallback((index: number) => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    setCurrentIndex(index);
    setSearchParams({ slide: index.toString() }, { replace: true });
    onSlideChange?.(index);
  }, [totalSlides, onSlideChange, setSearchParams]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  const getSlideName = (index: number): string => {
    const slide = slidesArray[index];
    if (!slide) return '';
    const slideType = slide.type as React.ComponentType<unknown>;
    return slideType?.name;
  };

  return (
    <div className={cn('relative bg-[#888888] flex flex-col h-[calc(100vh-64px)] items-center justify-center', isFullscreen && 'fixed inset-0 z-50 flex h-full')}>
      {!isFullscreen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="opacity-50 p-8 flex items-center justify-center fixed top-20 right-4 z-100"
        >
          <ArrowsPointingOutIcon className="size-10" />
        </Button>
      )}

      <div className={cn('mx-auto flex items-center justify-center relative w-[1024px] z-10')} style={isFullscreen ? { transform: `scale(${fullscreenScale})` } : undefined}>
        <div className="relative bg-background overflow-hidden shadow-lg w-full h-full" style={{ aspectRatio }}>
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
          <div className="relative z-10 w-full h-full">
            <LogoSrcContext.Provider value={logoSrc}>
              {slidesArray.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-300 flex items-center justify-center',
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  )}
                >
                  <div className="w-full h-full">{slide}</div>
                </div>
              ))}
            </LogoSrcContext.Provider>
          </div>
        </div>

        {showNavigation && totalSlides > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 bg-background/80 backdrop-blur-sm z-50"
            >
              <ChevronLeftIcon className="size-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 bg-background/80 backdrop-blur-sm z-50"
            >
              <ChevronRightIcon className="size-8" />
            </Button>
          </>
        )}
      </div>

      <div className="right-4 bottom-4 absolute text-sm text-muted-foreground bg-background/80 backdrop-blur-sm p-2 rounded-md z-0">
        {getSlideName(currentIndex)}
      </div>
    </div>
  );
}