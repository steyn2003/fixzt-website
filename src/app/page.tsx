import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to <span className="text-primary">Fixzt</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted partner in finding the perfect property. We make real estate simple,
                transparent, and stress-free.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/services">
                <Button size="lg">Our Services</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Fixzt?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We provide comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>
                  Professional advice from experienced real estate specialists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our team of experts brings years of experience to help you make informed
                  decisions about your property investments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wide Selection</CardTitle>
                <CardDescription>
                  Access to a diverse portfolio of properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From residential homes to commercial spaces, we offer a comprehensive
                  range of properties to match your requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transparent Process</CardTitle>
                <CardDescription>
                  Clear communication and honest dealings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in complete transparency throughout the buying, selling,
                  or renting process with no hidden fees or surprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Get in touch with us today and let us help you take the next step
              </p>
            </div>
            <Button size="lg">Contact Us Today</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
