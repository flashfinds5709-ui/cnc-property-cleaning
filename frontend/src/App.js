import "@/App.css";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_cc-property-clean/artifacts/utyc0ag3_dd8e7278b9ac6826b0e473f36cf59955860af15dafc9b631ac8baecbcf2014b4.png";

const PHONE_DISPLAY = "(631) 401-7026";
const PHONE_LINK = "tel:6314017026";
const CONSULTATION_LINK = "https://forms.gle/11TXTAgdrrRsnP749";
const PLACEHOLDER_EMAIL = "propertycare.cnc@gmail.com";
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${PLACEHOLDER_EMAIL}&su=C%26C%20Property%20Care%20Consultation&body=Hi%20Carlo%20%26%20Collin%2C%0A%0AI%27d%20like%20a%20quote%20for%20power%20washing%20on%20Long%20Island.%0A%0AService%20needed%3A%20%0AAddress%3A%20%0APreferred%20date%2Ftime%3A%20%0A%0AThanks%21`;

const heroImage =
  "https://images.pexels.com/photos/30958770/pexels-photo-30958770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200";

const serviceItems = [
  {
    value: "garbage-cans",
    title: "Garbage cans",
    testId: "service-garbage-cans-accordion",
    image:
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1100&q=85",
    alt: "Clean residential garbage cans ready for service",
    copy:
      "First time customers get $10 per garbage can, after its $15 per garbage can.",
  },
  {
    value: "fences",
    title: "Fences",
    testId: "service-fences-accordion",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1100&q=85",
    alt: "Fresh clean wooden fence beside a green lawn",
    copy:
      "Bring back curb appeal by lifting dirt, algae, and weather stains from fence panels.",
  },
  {
    value: "driveways",
    title: "Driveways",
    testId: "service-driveways-accordion",
    image:
      "https://images.pexels.com/photos/14115533/pexels-photo-14115533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    alt: "Clean concrete driveway pavers after exterior cleaning",
    copy:
      "Refresh concrete, pavers, and walkways so the first thing people see looks cared for.",
  },
  {
    value: "wooden-decks",
    title: "Wooden decks",
    testId: "service-wooden-decks-accordion",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85",
    alt: "Clean backyard wooden deck connected to a home",
    copy:
      "Make outdoor spaces feel ready for family, friends, and summer weekends again.",
  },
  {
    value: "custom-inquiries",
    title: "Custom inquiries",
    testId: "service-custom-inquiries-accordion",
    image:
      "https://images.pexels.com/photos/7587470/pexels-photo-7587470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    alt: "Long Island style home exterior and driveway",
    copy:
      "Have something else around the property that needs attention? Reach out and we will take a look.",
  },
];

const proofCards = [
  {
    label: "Before",
    title: "Weathered surfaces",
    image:
      "https://images.unsplash.com/photo-1636616409963-a3db0a1fc594?auto=format&fit=crop&w=1100&q=85",
    alt: "Outdoor walkway before detailed exterior cleaning",
  },
  {
    label: "After",
    title: "Clean first impression",
    image:
      "https://images.pexels.com/photos/7587856/pexels-photo-7587856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    alt: "Clean home exterior and lawn after property care",
  },
  {
    label: "Before",
    title: "Dull patio pavers",
    image:
      "https://images.pexels.com/photos/14115533/pexels-photo-14115533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    alt: "Concrete pavers needing a refresh",
  },
  {
    label: "After",
    title: "Bright outdoor space",
    image:
      "https://images.pexels.com/photos/8143669/pexels-photo-8143669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    alt: "Bright clean backyard patio and pool area",
  },
];

const trustItems = ["Free estimates", "Local Long Island", "Fast scheduling"];

function CtaButtons({ compact = false, location = "hero" }) {
  return (
    <div className={compact ? "cta-row compact" : "cta-row"}>
      <Button asChild className="btn-primary" size="lg">
        <a
          data-testid={`${location}-call-button`}
          href={PHONE_LINK}
          aria-label={`Call C&C Property Care at ${PHONE_DISPLAY}`}
        >
          <Phone className="h-4 w-4" />
          <span className="cta-full">Call {PHONE_DISPLAY}</span>
          <span className="cta-short">Call</span>
        </a>
      </Button>
      <Button asChild className="btn-green" size="lg">
        <a
          data-testid={`${location}-book-consultation-button`}
          href={CONSULTATION_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <span className="cta-full">Book a Consultation</span>
          <span className="cta-short">Book</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
      {!compact && (
        <Button asChild className="btn-outline" variant="outline" size="lg">
          <a
            data-testid={`${location}-email-button`}
            href={GMAIL_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Gmail to email C&C Property Care"
          >
            <Mail className="h-4 w-4" />
            <span className="cta-full">Email Us</span>
            <span className="cta-short">Email</span>
          </a>
        </Button>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" data-testid="brand-home-link">
          <span className="brand-mark" aria-hidden="true">
            <img src={LOGO_URL} alt="" />
          </span>
          <span>
            <strong>C&C Property Care</strong>
            <small>Long Island, NY</small>
          </span>
        </a>
        <div className="nav-links" aria-label="Page sections">
          <a data-testid="nav-services-link" href="#services">
            Services
          </a>
          <a data-testid="nav-about-link" href="#about">
            About Me
          </a>
        </div>
        <div className="header-actions">
          <Button asChild className="header-call-btn">
            <a data-testid="header-call-button" href={PHONE_LINK}>
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </Button>
          <Button asChild className="header-book-btn">
            <a
              data-testid="header-book-consultation-button"
              href={CONSULTATION_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Book
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Badge className="local-badge" data-testid="service-area-notice">
            <MapPin className="h-3.5 w-3.5" /> Operated only on Long Island, New York
          </Badge>
          <h1>Power washing that makes Long Island properties look clean again.</h1>
          <p className="hero-subtitle">
            Fences, driveways, garbage cans, wooden decks, and custom exterior cleaning handled by Carlo and Collin from Holtsville.
          </p>
          <CtaButtons location="hero" />
          <div className="trust-strip" aria-label="Service highlights">
            {trustItems.map((item) => (
              <span key={item}>
                <CheckCircle2 className="h-4 w-4" /> {item}
              </span>
            ))}
          </div>
        </div>
        <Card className="hero-card">
          <CardContent className="hero-card-content">
            <AspectRatio ratio={4 / 3}>
              <img src={heroImage} alt="Worker power washing an exterior surface" />
            </AspectRatio>
            <div className="image-note">
              <Droplets className="h-4 w-4" />
              Fast curb appeal refreshes
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section proof-section" aria-labelledby="proof-heading">
      <div className="container">
        <div className="section-heading compact-heading">
          <span className="eyebrow">Before & after style proof</span>
          <h2 id="proof-heading">Simple, visible property cleanups.</h2>
          <p>
            Real project photos can be added later. For now, these stock images show the kind of fresh, clean finish C&C is built around.
          </p>
        </div>
        <div className="proof-grid" data-testid="before-after-gallery">
          {proofCards.map((card, index) => (
            <Card className="photo-card" key={`${card.label}-${card.title}`}>
              <CardContent className="photo-card-content">
                <AspectRatio ratio={4 / 3}>
                  <img src={card.image} alt={card.alt} />
                </AspectRatio>
                <div className="photo-caption">
                  <span className={card.label === "After" ? "after-chip" : "before-chip"}>
                    {card.label}
                  </span>
                  <strong>{card.title}</strong>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-heading">
      <div className="container two-column">
        <div className="section-heading sticky-heading">
          <span className="eyebrow">Services</span>
          <h2 id="services-heading">Pick what needs cleaning.</h2>
          <p>
            Expand a service to see what C&C Property Care can help with. Every visit is focused on simple scheduling, careful work, and clean results.
          </p>
          <div className="notice-box" data-testid="water-supply-notice">
            <strong>*Customer must provide access to water supply if required.</strong>
          </div>
        </div>
        <Accordion type="single" collapsible className="service-accordion">
          {serviceItems.map((service) => (
            <AccordionItem value={service.value} key={service.value} className="service-item">
              <AccordionTrigger className="service-trigger" data-testid={service.testId}>
                <span>{service.title}</span>
              </AccordionTrigger>
              <AccordionContent className="service-content">
                <div className="service-detail-grid">
                  <div>
                    <p
                      className="service-copy"
                      data-testid={
                        service.value === "garbage-cans" ? "garbage-cans-pricing-text" : undefined
                      }
                    >
                      {service.copy}
                    </p>
                  </div>
                  <AspectRatio ratio={16 / 10} className="service-image-wrap">
                    <img src={service.image} alt={service.alt} />
                  </AspectRatio>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-card">
          <span className="eyebrow">About Me</span>
          <h2 id="about-heading">Local cousins ready to earn your business.</h2>
          <p data-testid="about-me-text">
            Carlo and Collin, cousins from Holtsville, wanting to make your property as clean as theirs.
          </p>
          <div className="about-mini-grid">
            <span>
              <MapPin className="h-4 w-4" /> Long Island only
            </span>
            <span>
              <Sparkles className="h-4 w-4" /> Clean, simple service
            </span>
          </div>
        </div>
        <Card className="why-card">
          <CardContent className="why-card-content">
            <div className="why-static" data-testid="why-choose-us-section">
              <h3>Why choose us?</h3>
              <p>
                Young and ready to earn your business however necessary. We&apos;ve helped maintain our parents property since we were young, and are ready to put the same effort into your property as if it were our own.
              </p>
            </div>
            <div className="why-image-row">
              <img
                src="https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=85"
                alt="Clean house exterior after property cleaning"
              />
              <img
                src="https://images.pexels.com/photos/7587470/pexels-photo-7587470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Well maintained home and driveway on a sunny day"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container final-cta-shell">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2 id="final-cta-heading">Get your property cleaned without overcomplicating it.</h2>
          <p>Call now, book the placeholder consultation form, or open Gmail to start a quick quote request.</p>
        </div>
        <CtaButtons location="footer" />
      </div>
    </section>
  );
}

function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar" aria-label="Quick contact buttons">
      <a data-testid="mobile-call-button" href={PHONE_LINK}>
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        data-testid="mobile-book-consultation-button"
        href={CONSULTATION_LINK}
        target="_blank"
        rel="noreferrer"
      >
        Book
      </a>
      <a
        data-testid="mobile-email-button"
        href={GMAIL_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <Mail className="h-4 w-4" /> Email
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProofSection />
        <ServicesSection />
        <AboutSection />
        <FinalCta />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 C&C Property Care. Serving Long Island, New York.</p>
          <a data-testid="footer-email-link" href={GMAIL_LINK} target="_blank" rel="noreferrer">
            {PLACEHOLDER_EMAIL}
          </a>
        </div>
      </footer>
      <MobileCtaBar />
    </div>
  );
}

export default App;
