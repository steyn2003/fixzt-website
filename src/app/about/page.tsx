"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, SlideIn, ScaleIn, FloatingElement } from "@/components/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const values = [
    {
      title: "Integrity",
      icon: "🤝",
      description:
        "We believe in honest, transparent dealings with all our clients. Trust is the foundation of every relationship we build.",
    },
    {
      title: "Excellence",
      icon: "⭐",
      description:
        "We strive for excellence in every transaction, ensuring our clients receive the highest quality service and results.",
    },
    {
      title: "Innovation",
      icon: "💡",
      description:
        "We embrace modern technology and innovative solutions to make real estate transactions seamless and efficient.",
    },
    {
      title: "Client-Focused",
      icon: "❤️",
      description:
        "Your goals are our goals. We tailor our services to meet your unique needs and deliver personalized solutions.",
    },
  ];

  const team = [
    {
      role: "Real Estate Experts",
      icon: "👔",
      description: "Licensed professionals with extensive market knowledge",
      image: "/team-experts.jpg",
    },
    {
      role: "Legal Advisors",
      icon: "⚖️",
      description: "Ensuring compliance and protecting your interests",
      image: "/team-legal.jpg",
    },
    {
      role: "Property Managers",
      icon: "🏢",
      description: "Dedicated to maintaining and maximizing property value",
      image: "/team-managers.jpg",
    },
    {
      role: "Financial Consultants",
      icon: "💼",
      description: "Helping you make informed investment decisions",
      image: "/team-financial.jpg",
    },
  ];

  const achievements = [
    { number: "500+", label: "Properties Sold", icon: "🏠" },
    { number: "1000+", label: "Happy Clients", icon: "😊" },
    { number: "15+", label: "Years in Business", icon: "📅" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
  ];

  const timeline = [
    { year: "2008", title: "Founded", desc: "Fixzt was established with a vision to transform real estate" },
    { year: "2012", title: "Expansion", desc: "Opened multiple offices across the region" },
    { year: "2018", title: "Digital Transformation", desc: "Launched cutting-edge digital platform" },
    { year: "2023", title: "Industry Leader", desc: "Recognized as top real estate service provider" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
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
          <div className="flex flex-col items-center space-y-6 text-center">
            <FadeIn>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                About Us
              </div>
            </FadeIn>

            <SlideIn direction="down">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Meet <span className="text-primary">Fixzt</span>
              </h1>
            </SlideIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl">
                Your trusted partner in real estate, committed to making property transactions
                simple, transparent, and successful since 2008.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <SlideIn direction="left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforming Real Estate Experiences
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground md:text-lg">
                    At Fixzt, we are dedicated to revolutionizing the real estate experience. We
                    understand that buying, selling, or renting property is one of life's most
                    significant decisions, and we're here to make that journey as smooth and
                    rewarding as possible.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    With years of experience in the industry, we combine market expertise with
                    cutting-edge technology to deliver exceptional results. Our team is passionate
                    about helping you achieve your real estate goals, whether you're a first-time
                    buyer, seasoned investor, or property owner.
                  </p>
                </div>
                <Button size="lg">Learn About Our Services</Button>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <FloatingElement>
                <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-muted-foreground font-medium">About Us Image</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Suggested: Office building or team photo
                      </p>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Achievements Counter */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-sm md:text-base opacity-90">{achievement.label}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                The principles that guide everything we do and define who we are
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardHeader className="text-center">
                      <motion.div
                        className="text-5xl mb-4"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {value.icon}
                      </motion.div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                A legacy of excellence and growth
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                    <div className={`flex gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <Card>
                          <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.desc}</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                      <motion.div
                        className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold z-10 relative"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.year}
                      </motion.div>
                      <div className="flex-1 hidden md:block"></div>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <motion.div
                        className="text-6xl"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.icon}
                      </motion.div>
                      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                        {member.image}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{member.role}</CardTitle>
                      <CardDescription>{member.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4 max-w-[700px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Work With Us?
                </h2>
                <p className="text-primary-foreground/90 text-lg md:text-xl">
                  Let's discuss how we can help you achieve your real estate goals
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Contact Us
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      View Our Services
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
