interface LogoProps {
  className?: string;
  src?: string;
}

export default function Logo({ className, src = '/logo.svg' }: LogoProps) {
  return (
    <img src={src} alt="Logo" className={className} />
  );
}