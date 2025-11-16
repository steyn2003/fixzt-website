"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  FloatingElement,
} from "@/components/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Deskundige Begeleiding",
      description: "Professioneel advies van ervaren vastgoedspecialisten",
      icon: "🎯",
      content:
        "Ons team van experts brengt jarenlange ervaring mee om u te helpen weloverwogen beslissingen te nemen over uw vastgoedinvesteringen.",
    },
    {
      title: "Breed Aanbod",
      description: "Toegang tot een divers portfolio van vastgoed",
      icon: "🏘️",
      content:
        "Van woonhuizen tot commerciële ruimtes, wij bieden een uitgebreid scala aan panden die aansluiten bij uw wensen.",
    },
    {
      title: "Transparant Proces",
      description: "Duidelijke communicatie en eerlijke handelswijze",
      icon: "✨",
      content:
        "Wij geloven in volledige transparantie gedurende het koop-, verkoop- of huurproces zonder verborgen kosten of verrassingen.",
    },
  ];

  const stats = [
    { value: "500+", label: "Verkochte Panden" },
    { value: "1000+", label: "Tevreden Klanten" },
    { value: "15+", label: "Jaar Ervaring" },
    { value: "98%", label: "Klanttevredenheid" },
  ];

  const properties = [
    {
      title: "Modern Gezinshuis",
      location: "Centrum",
      price: "€450.000",
      beds: 4,
      baths: 3,
      sqft: "232",
      image: "/property-1.jpg",
    },
    {
      title: "Luxe Appartement",
      location: "Stadscentrum",
      price: "€320.000",
      beds: 2,
      baths: 2,
      sqft: "111",
      image: "/property-2.jpg",
    },
    {
      title: "Ruime Villa",
      location: "Buitenwijk",
      price: "€680.000",
      beds: 5,
      baths: 4,
      sqft: "353",
      image: "/property-3.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Huiseigenaar",
      content:
        "Fixzt maakte het kopen van ons eerste huis een absolute makkie. Hun team was professioneel, deskundig en altijd beschikbaar om onze vragen te beantwoorden.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Vastgoedbelegger",
      content:
        "Ik heb met veel vastgoedbureaus gewerkt, maar Fixzt springt eruit. Hun marktinzichten hielpen mij winstgevende investeringsbeslissingen te nemen.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Verkoper",
      content:
        "Ze verkochten mijn pand in slechts 3 weken! Het hele proces verliep soepel en transparant. Ik beveel hun diensten ten zeerste aan.",
      rating: 5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultatie",
      description:
        "We beginnen met het begrijpen van uw behoeften, voorkeuren en budget om een persoonlijk plan te maken.",
    },
    {
      step: "02",
      title: "Pand Zoeken",
      description:
        "Krijg toegang tot onze uitgebreide database en wordt gekoppeld aan panden die aan uw criteria voldoen.",
    },
    {
      step: "03",
      title: "Bezichtigingen",
      description:
        "Plan gemakkelijk pandbezichtigingen en krijg deskundig inzicht over elke locatie.",
    },
    {
      step: "04",
      title: "Onderhandeling",
      description:
        "Wij onderhandelen de beste deal namens u en regelen al het papierwerk.",
    },
    {
      step: "05",
      title: "Afronding",
      description:
        "Rond de transactie soepel af met onze juridische en financiële ondersteuning.",
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

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeIn>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  Fixzt vastgoed onderhoud
                </div>
              </FadeIn>

              <SlideIn direction="right">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Vind Vandaag Uw Droompand
                </h1>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                  Uw vertrouwde partner in het vinden van het perfecte pand. Wij
                  maken vastgoed eenvoudig, transparant en stressvrij met meer
                  dan 15 jaar expertise.
                </p>
              </SlideIn>

              <SlideIn direction="right" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button size="lg" className="w-full sm:w-auto">
                      Bekijk Panden
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Meer Informatie
                    </Button>
                  </Link>
                </div>
              </SlideIn>

              <SlideIn direction="right" delay={0.6}>
                <div className="flex gap-8 pt-4">
                  {stats.slice(0, 3).map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>

            <ScaleIn delay={0.3}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/homepage.jpg"
                  alt="Modern vastgoed showcase"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </ScaleIn>
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
                  <div className="text-sm md:text-base opacity-90">
                    {stat.label}
                  </div>
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
                Waarom Kiezen voor Fixzt?
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Wij bieden uitgebreide vastgoedoplossingen op maat met
                geavanceerde technologie en persoonlijke service
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
                Uitgelichte Panden
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Ontdek onze zorgvuldig geselecteerde collectie van premium
                vastgoed
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                    <div className="relative h-48 bg-muted flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">🏡</div>
                        <p className="text-xs text-muted-foreground">
                          Afbeelding: {property.image}
                        </p>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{property.title}</CardTitle>
                      <CardDescription>{property.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary mb-4">
                        {property.price}
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>🛏️ {property.beds} slaapkamers</span>
                        <span>🚿 {property.baths} badkamers</span>
                        <span>📏 {property.sqft} m²</span>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Bekijk Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </SlideIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg">Bekijk Alle Panden</Button>
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
                Hoe Het Werkt
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Ons gestroomlijnde proces maakt het vinden van uw perfecte pand
                eenvoudig en stressvrij
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
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
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
                Wat Onze Klanten Zeggen
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Geloof ons niet zomaar - hoor het van onze tevreden klanten
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
                          <span key={i} className="text-yellow-500">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
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
                    <h3 className="text-3xl font-bold mb-4">
                      Blijf Op De Hoogte
                    </h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Abonneer u op onze nieuwsbrief en ontvang de nieuwste
                      pandbeschrijvingen, marktinzichten en exclusieve deals in
                      uw inbox.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Voer uw e-mailadres in"
                      className="flex-1 px-4 py-3 rounded-md text-foreground"
                    />
                    <Button size="lg" variant="secondary">
                      Abonneer
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
                  Klaar Om Uw Perfecte Pand Te Vinden?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Neem vandaag nog contact met ons op en laat ons deskundige
                  team u helpen de volgende stap te zetten in uw vastgoedreis
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="text-lg px-8">
                    Neem Vandaag Contact Op
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8"
                    >
                      Bekijk Diensten
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
