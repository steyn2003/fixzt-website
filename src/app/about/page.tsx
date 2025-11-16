import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  const values = [
    {
      title: "Integrity",
      description:
        "We believe in honest, transparent dealings with all our clients. Trust is the foundation of every relationship we build.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every transaction, ensuring our clients receive the highest quality service and results.",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern technology and innovative solutions to make real estate transactions seamless and efficient.",
    },
    {
      title: "Client-Focused",
      description:
        "Your goals are our goals. We tailor our services to meet your unique needs and deliver personalized solutions.",
    },
  ];

  const team = [
    {
      role: "Real Estate Experts",
      description: "Licensed professionals with extensive market knowledge",
    },
    {
      role: "Legal Advisors",
      description: "Ensuring compliance and protecting your interests",
    },
    {
      role: "Property Managers",
      description: "Dedicated to maintaining and maximizing property value",
    },
    {
      role: "Financial Consultants",
      description: "Helping you make informed investment decisions",
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
                About Fixzt
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted partner in real estate, committed to making property transactions
                simple, transparent, and successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="text-muted-foreground md:text-lg">
                At Fixzt, we are dedicated to revolutionizing the real estate experience. We
                understand that buying, selling, or renting property is one of life&apos;s most
                significant decisions, and we&apos;re here to make that journey as smooth and
                rewarding as possible.
              </p>
              <p className="text-muted-foreground md:text-lg">
                With years of experience in the industry, we combine market expertise with
                cutting-edge technology to deliver exceptional results. Our team is passionate
                about helping you achieve your real estate goals, whether you&apos;re a first-time
                buyer, seasoned investor, or property owner.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-lg p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">10+</div>
                <p className="text-xl text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{member.role}</CardTitle>
                  <CardDescription>{member.description}</CardDescription>
                </CardHeader>
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
                Ready to Work With Us?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Let&apos;s discuss how we can help you achieve your real estate goals
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg">Contact Us</Button>
              <Link href="/services">
                <Button variant="outline" size="lg">View Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
