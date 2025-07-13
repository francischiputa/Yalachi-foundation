import { Header } from "@/components/header"
import { HeroLogo } from "@/components/hero-logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Utensils, Shirt, GraduationCap, Home } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="bg-black min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <HeroLogo />
          <p className="text-xl md:text-2xl text-gray-300 mt-8 mb-8 leading-relaxed">
            Bringing hope and care to orphaned children through love, support, and essential resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About YALECHI Foundation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are dedicated to transforming the lives of orphaned children by providing them with essential care,
                education, and the love they deserve to build a brighter future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/our-mission.jpg?height=400&width=600"
                  alt="Children at YALECHI Foundation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  YALECHI Foundation was established with a simple yet powerful mission: to ensure that every orphaned
                  child has access to basic necessities, quality education, and most importantly, a loving environment
                  where they can thrive and reach their full potential.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-3xl font-bold text-cyan-600">500+</div>
                    <div className="text-sm text-gray-600">Children Helped</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600">50+</div>
                    <div className="text-sm text-gray-600">Communities Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive support through various programs designed to meet the diverse needs of orphaned
                children.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Utensils className="w-8 h-8 text-red-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Food & Nutrition</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Providing nutritious meals and food packages to ensure children have access to healthy, balanced
                    nutrition for proper growth and development.
                  </p>
                  <Image
                    src="/african-kid-eating.avif?height=200&width=300"
                    alt="Food distribution program"
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shirt className="w-8 h-8 text-cyan-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Clothing & Essentials</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Distributing clothing, shoes, and essential items to ensure children are properly dressed and have
                    access to basic necessities.
                  </p>
                  <Image
                    src="/clothes_donation.jpeg?height=200&width=300"
                    alt="Clothing distribution"
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Education Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Providing school supplies, educational materials, and scholarship opportunities to ensure every
                    child has access to quality education.
                  </p>
                  <Image
                    src="/education_support.jpg?height=200&width=300"
                    alt="Education support program"
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Home className="w-8 h-8 text-amber-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Safe Housing</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Creating safe, nurturing environments where children can live with dignity and feel secure while
                    building their future.
                  </p>
                  <Image
                    src="/safe-housing.jpeg?height=200&width=300"
                    alt="Safe housing program"
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-purple-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Ensuring access to medical care, regular health checkups, and mental health support for the overall
                    well-being of children.
                  </p>
                  <Image
                    src="/health-care.jpg?height=200&width=300"
                    alt="Healthcare program"
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Community Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Building strong community networks and mentorship programs to provide ongoing support and guidance
                    for children's development.
                  </p>
                  <Image
                    src="/community-support.jpg?height=200&width=300"
                    alt="Community support program"
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
              Together, we're making a real difference in the lives of orphaned children across communities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-cyan-100">Children Supported</div>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                <div className="text-red-100">Meals Provided</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">200+</div>
                <div className="text-green-100">Children in School</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-amber-100">Communities Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Make a Difference Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Your donation can provide food, clothing, education, and hope to a child in need. Every contribution, no
              matter the size, creates a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                Donate k50
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                Donate k100
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                Donate k200
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                Custom Amount
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-60"></div>
                    <div className="absolute inset-1 rounded-full border-2 border-cyan-400 opacity-40"></div>
                    <div className="flex items-center justify-center w-full h-full">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">YALECHI FOUNDATION</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Dedicated to transforming the lives of orphaned children through love, care, and essential support
                  services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#programs" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      Programs
                    </a>
                  </li>
                  <li>
                    <a href="#impact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      Impact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      Volunteer
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Email: info@yalechifoundation.org</p>
                  <p>Phone: +260979955125</p>
                  <p>Address: Luanshya, Zambia</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 YALECHI Foundation.  | A 501(c)(3) nonprofit organization. Powerd By Francis Mwamba Chiputa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
