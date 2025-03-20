import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">{title}</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">{subtitle}</p>
        <Button asChild size="lg" className=" mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-orange-600 transition">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>

        
        

      </div>
    </div>
  )
}

