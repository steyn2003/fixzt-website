import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Property Sales",
      description: "Buy or sell residential and commercial properties",
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
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive real estate solutions designed to meet all your property needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Interested in Our Services?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Contact us today to discuss how we can help with your real estate needs
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Link href="/about">
                <Button variant="outline" size="lg">Learn About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
