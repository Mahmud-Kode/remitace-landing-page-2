"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OnboardingCalculator } from "@/components/onboarding-calculator"
import { ArrowRight, Shield, Globe, Zap, Users, CheckCircle, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function RemitaceLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">Remitace</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span>English</span>
              <span>•</span>
              <span>IMTO Gateway Services</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <Link href="#" className="hover:underline">
              Blog
            </Link>
            <Link href="#" className="hover:underline">
              Help
            </Link>
            <Link href="#" className="hover:underline">
              Compliance Center
            </Link>
            <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-gray-100">
              Download App
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-red-600 to-red-700 text-white py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Fast, flexible and secure IMTO gateway services
                </h1>
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  Fast, flexible and secure international money transfer gateway across the world. Save time and money
                  when you serve customers internationally with Remitace.
                </p>

                {/* Trust Badge */}
                <div className="flex items-center space-x-2 mb-8">
                  <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 font-semibold">Trustpilot</span>
                    <div className="ml-3 text-sm">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-white/80">Great • 4.2 out of 5</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <OnboardingCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* How to Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">How to onboard your IMTO with Remitace?</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Create an account</h3>
                      <p className="text-gray-600">
                        This is simple. Just sign up using your email address on our app or website. And keep things
                        secure by choosing a strong password.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">We'll verify your business</h3>
                      <p className="text-gray-600">
                        For even better security, we'll verify who you are. But this should only take a few minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Start your integration</h3>
                      <p className="text-gray-600">
                        Select the corridors and services you want to offer. Our fees and exchange rates are shown
                        upfront.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Configure your services</h3>
                      <p className="text-gray-600">
                        Have your service details to hand. These may vary depending on how you're serving your
                        customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Go live with your integration</h3>
                      <p className="text-gray-600">
                        Choose how you'd like to integrate with our platform: bank deposit, credit or debit card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Professional using Remitace services"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integration Methods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration methods for IMTO services</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We offer you a choice of ways to integrate with our gateway services. But the choice will depend on
                where you're operating your business from. Please remember, that some integration methods may incur a
                fee from your service provider, which may affect the overall cost.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-primary text-white border-0 p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl mb-4">API Integration</CardTitle>
                  <CardDescription className="text-white/90 mb-6">
                    You can integrate with your existing systems using our comprehensive API. Quick setup, full control.
                  </CardDescription>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 mt-auto">
                    Learn more
                  </Button>
                </CardHeader>
              </Card>

              <Card className="bg-primary text-white border-0 p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl mb-4">White-label solution</CardTitle>
                  <CardDescription className="text-white/90 mb-6">
                    Integrate with our white-label platform. Quick and easy to set up with your brand.
                  </CardDescription>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 mt-auto">
                    Learn more
                  </Button>
                </CardHeader>
              </Card>

              <Card className="bg-primary text-white border-0 p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl mb-4">Custom integration</CardTitle>
                  <CardDescription className="text-white/90 mb-6">
                    Custom integrations may require an advance payment setup fee.
                  </CardDescription>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 mt-auto">
                    Learn more
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Remitace?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built specifically for IMTOs, our platform provides everything you need to serve your customers
                efficiently and securely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/20 transition-colors p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Secure & Compliant</CardTitle>
                  <CardDescription>
                    Bank-grade security with full regulatory compliance for international transfers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-colors p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Global Network</CardTitle>
                  <CardDescription>Connect to multiple corridors and payment methods worldwide</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-colors p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Fast Integration</CardTitle>
                  <CardDescription>Quick onboarding process with comprehensive API documentation</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-colors p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Customer Management</CardTitle>
                  <CardDescription>
                    Advanced tools for customer onboarding, KYC, and relationship management
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-colors p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Real-time Monitoring</CardTitle>
                  <CardDescription>
                    Track transactions, monitor performance, and get instant notifications
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-colors p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">24/7 Support</CardTitle>
                  <CardDescription>Dedicated support team available around the clock for your business</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your IMTO Business?</h2>
              <p className="text-xl text-white/90 mb-8">
                Join leading IMTOs worldwide who trust Remitace for their international money transfer needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold">Remitace</span>
              </div>
              <p className="text-gray-400">
                The trusted gateway for International Monetary Transfer Organizations worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Developer Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status Page
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Remitace. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
