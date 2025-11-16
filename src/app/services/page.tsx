"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, SlideIn, ScaleIn } from "@/components/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Property Sales",
      description: "Buy or sell residential and commercial properties",
      icon: "🏠",
      image: "/service-sales.jpg",
      features: [
        "Market analysis and pricing strategy",
        "Professional photography and listings",
        "Negotiation and closing assistance",
        "Legal documentation support",
      ],
    },
    {
      title: "Property Rentals",
      description: "Find the perfect rental or lease your property",
      icon: "🔑",
      image: "/service-rentals.jpg",
      features: [
        "Tenant screening and verification",
        "Lease agreement preparation",
        "Property maintenance coordination",
        "Rent collection and management",
      ],
    },
    {
      title: "Property Management",
      description: "Comprehensive property management solutions",
      icon: "🏢",
      image: "/service-management.jpg",
      features: [
        "24/7 emergency maintenance",
        "Regular property inspections",
        "Financial reporting and accounting",
        "Tenant relations management",
      ],
    },
    {
      title: "Investment Consulting",
      description: "Expert guidance for property investments",
      icon: "📈",
      image: "/service-investment.jpg",
      features: [
        "Market trend analysis",
        "ROI calculations and projections",
        "Portfolio diversification strategies",
        "Tax optimization advice",
      ],
    },
    {
      title: "Property Valuation",
      description: "Accurate property assessment and appraisal",
      icon: "💰",
      image: "/service-valuation.jpg",
      features: [
        "Comparative market analysis",
        "Professional appraisal services",
        "Development potential assessment",
        "Detailed valuation reports",
      ],
    },
    {
      title: "Legal Assistance",
      description: "Comprehensive legal support for transactions",
      icon: "⚖️",
      image: "/service-legal.jpg",
      features: [
        "Contract review and drafting",
        "Title search and verification",
        "Regulatory compliance guidance",
        "Dispute resolution support",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section with Animation */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <FadeIn>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                What We Offer
              </div>
            </FadeIn>

            <SlideIn direction="down">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Our <span className="text-primary">Services</span>
              </h1>
            </SlideIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl">
                Comprehensive real estate solutions designed to meet all your property needs with expert guidance and personalized service
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid with Animations */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-primary/50 transition-colors hover:shadow-xl">
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="text-6xl"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                        {service.image}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="mr-3 text-primary font-bold text-lg">✓</span>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className="mt-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full" variant="outline">
                          Learn More
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Experience the difference of working with true professionals
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🎯", title: "Personalized Service", desc: "Tailored solutions for your unique needs" },
              { icon: "⚡", title: "Fast Response", desc: "Quick turnaround on all inquiries" },
              { icon: "🏆", title: "Proven Results", desc: "Track record of successful transactions" },
              { icon: "💼", title: "Professional Team", desc: "Expert agents at your service" },
            ].map((benefit, index) => (
              <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <motion.div
                        className="text-5xl mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription>{benefit.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                A streamlined approach to achieving your real estate goals
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "1", title: "Initial Consultation", desc: "We meet to understand your needs and goals" },
              { step: "2", title: "Strategy Development", desc: "Create a customized plan tailored to your situation" },
              { step: "3", title: "Implementation", desc: "Execute the plan with precision and expertise" },
              { step: "4", title: "Ongoing Support", desc: "Provide continuous assistance until completion" },
            ].map((item, index) => (
              <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <motion.div
                  className="flex gap-6 mb-12 last:mb-0"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.step}
                    </motion.div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4 max-w-[700px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="text-primary-foreground/90 text-lg md:text-xl">
                  Contact us today to discuss how we can help with your real estate needs
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Get Started
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      Learn About Us
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
