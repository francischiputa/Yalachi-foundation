import Image from "next/image"

export function HeroLogo() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Original Logo Image */}
      <div className="relative mb-8 w-48 h-48 md:w-64 md:h-64">
        <Image src="/black bg.png" alt="YALECHI Foundation Logo" fill className="object-contain" priority />
      </div>

      {/* Text (keeping the text separate for better responsiveness) */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-2">YALECHI</h1>
        <h2 className="text-lg md:text-2xl font-medium text-white tracking-widest">FOUNDATION</h2>
      </div>
    </div>
  )
}
