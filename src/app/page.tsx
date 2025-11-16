"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, SlideIn, ScaleIn, StaggerContainer, FloatingElement } from "@/components/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Expert Guidance",
      description: "Professional advice from experienced real estate specialists",
      icon: "🎯",
      content: "Our team of experts brings years of experience to help you make informed decisions about your property investments.",
    },
    {
      title: "Wide Selection",
      description: "Access to a diverse portfolio of properties",
      icon: "🏘️",
      content: "From residential homes to commercial spaces, we offer a comprehensive range of properties to match your requirements.",
    },
    {
      title: "Transparent Process",
      description: "Clear communication and honest dealings",
      icon: "✨",
      content: "We believe in complete transparency throughout the buying, selling, or renting process with no hidden fees or surprises.",
    },
  ];

  const stats = [
    { value: "500+", label: "Properties Sold" },
    { value: "1000+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const properties = [
    {
      title: "Modern Family Home",
      location: "Downtown District",
      price: "$450,000",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image: "/property-1.jpg",
    },
    {
      title: "Luxury Apartment",
      location: "City Center",
      price: "$320,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "/property-2.jpg",
    },
    {
      title: "Spacious Villa",
      location: "Suburban Area",
      price: "$680,000",
      beds: 5,
      baths: 4,
      sqft: "3,800",
      image: "/property-3.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Fixzt made buying our first home an absolute breeze. Their team was professional, knowledgeable, and always available to answer our questions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      content: "I've worked with many real estate agencies, but Fixzt stands out. Their market insights helped me make profitable investment decisions.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Seller",
      content: "They sold my property in just 3 weeks! The entire process was smooth and transparent. Highly recommend their services.",
      rating: 5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We start by understanding your needs, preferences, and budget to create a personalized plan.",
    },
    {
      step: "02",
      title: "Property Search",
      description: "Access our extensive database and get matched with properties that meet your criteria.",
    },
    {
      step: "03",
      title: "Site Visits",
      description: "Schedule convenient property tours and get expert insights about each location.",
    },
    {
      step: "04",
      title: "Negotiation",
      description: "We negotiate the best deal on your behalf and handle all the paperwork.",
    },
    {
      step: "05",
      title: "Closing",
      description: "Complete the transaction smoothly with our legal and financial support.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Animation */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-56 overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeIn>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  Welcome to Fixzt Real Estate
                </div>
              </FadeIn>

              <SlideIn direction="right">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Find Your Dream{" "}
                  <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Property
                  </span>{" "}
                  Today
                </h1>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                  Your trusted partner in finding the perfect property. We make real estate simple,
                  transparent, and stress-free with over 15 years of expertise.
                </p>
              </SlideIn>

              <SlideIn direction="right" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button size="lg" className="w-full sm:w-auto">
                      Explore Properties
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </SlideIn>

              <SlideIn direction="right" delay={0.6}>
                <div className="flex gap-8 pt-4">
                  {stats.slice(0, 3).map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>

            <FloatingElement>
              <ScaleIn delay={0.3}>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
                  <div className="absolute inset-4 bg-muted rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏠</div>
                      <p className="text-muted-foreground">Hero Image Placeholder</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Replace with: Modern house or building exterior
                      </p>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Why Choose Fixzt?
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                We provide comprehensive real estate solutions tailored to your needs with cutting-edge technology and personalized service
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {feature.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Featured Properties
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Discover our handpicked selection of premium properties
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                    <div className="relative h-48 bg-muted flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">🏡</div>
                        <p className="text-xs text-muted-foreground">Image: {property.image}</p>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{property.title}</CardTitle>
                      <CardDescription>{property.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary mb-4">{property.price}</div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>🛏️ {property.beds} beds</span>
                        <span>🚿 {property.baths} baths</span>
                        <span>📏 {property.sqft} sqft</span>
                      </div>
                      <Button className="w-full mt-4" variant="outline">View Details</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </SlideIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg">View All Properties</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Our streamlined process makes finding your perfect property simple and stress-free
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {process.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full relative z-10 bg-background">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                          {item.step}
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-500">⭐</span>
                        ))}
                      </div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground italic">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Subscribe to our newsletter and get the latest property listings, market insights, and exclusive deals delivered to your inbox.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-md text-foreground"
                    />
                    <Button size="lg" variant="secondary">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Ready to Find Your Perfect Property?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Get in touch with us today and let our expert team help you take the next step in your real estate journey
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8">
                    Contact Us Today
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      Browse Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
