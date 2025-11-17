import Image from "next/image";

interface SvgLogoProps {
  className?: string;
}

export function SvgLogo({ className }: SvgLogoProps) {
  return (
    <div className={`${className || ""} [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.5))_drop-shadow(0_0_0_rgba(255,255,255,0.2))_drop-shadow(0_4px_8px_rgba(255,255,255,0.1))]`}>
      <Image 
        src="/Logo.svg" 
        alt="Gapuchee Logo" 
        width={150} 
        height={30}
        className="h-full w-auto"
      />
    </div>
  );
}
