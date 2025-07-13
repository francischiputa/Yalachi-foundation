import Image from "next/image"

export function Logo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image src="/black bg.png" alt="YALECHI Foundation Logo" fill className="object-contain" priority />
    </div>
  )
}
