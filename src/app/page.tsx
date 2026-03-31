"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Experience",
          id: "about",
        },
        {
          name: "Amenities",
          id: "features",
        },
        {
          name: "Rooms",
          id: "rooms",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Courtyard UES"
      button={{
        text: "Book Now",
        href: "#",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Modern Manhattan Luxury, Upper East Side Soul"
      description="Discover sleek rooms with East River views, 11 minutes to the subway, and steps from Central Park. Your perfect NYC base awaits."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#",
        },
        {
          text: "View Rooms",
          href: "#rooms",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118953.jpg"
      imageAlt="Luxurious Manhattan hotel room"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/businessman-using-digital-tablet-waiting-area_107420-95825.jpg",
          alt: "Sarah Miller",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-beautiful-girl-her-handsome-boyfriend-walking-street_158538-142.jpg",
          alt: "David & Emma Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-smiling-brunette-model-dressed-summer-hipster-jacket-clothes_158538-1606.jpg",
          alt: "Jordan P.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/chair-front-businesswoman-sitting-caf_23-2147876643.jpg",
          alt: "Marcus V.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businessman-using-digital-tablet-waiting-area_107420-95825.jpg",
          alt: "Professional guest",
        },
      ]}
      avatarText="Join 5,000+ satisfied guests"
      marqueeItems={[
        {
          type: "text",
          text: "Central Park Proximity",
        },
        {
          type: "text",
          text: "East River Views",
        },
        {
          type: "text",
          text: "High-Speed Wi-Fi",
        },
        {
          type: "text",
          text: "24/7 Concierge",
        },
        {
          type: "text",
          text: "Modern Fitness Suite",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Essence"
      title="Polished Urban Comfort"
      description="Located in the heart of Manhattan’s Upper East Side, our hotel seamlessly blends the energy of the city with the serenity of a luxury retreat."
      subdescription="Whether you are here for business, cultural exploration, or simply to recharge, we provide the infrastructure and inclusive hospitality you deserve."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-defocused-luxury-hotel-interior_1203-9517.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "State-of-the-Art Fitness",
          description: "Keep your routine on track with our high-end fitness center equipment.",
          tag: "Wellbeing",
          imageSrc: "http://img.b2bpic.net/free-photo/women-running-together-long-shot_23-2149041648.jpg",
        },
        {
          id: "f2",
          title: "Productive Workspace",
          description: "Reliable high-speed connectivity and quiet zones for focused work.",
          tag: "Workspace",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-working-with-laptop_23-2149429342.jpg",
        },
        {
          id: "f3",
          title: "Expert Concierge",
          description: "Personalized assistance to ensure your NYC stay is seamless and memorable.",
          tag: "Service",
          imageSrc: "http://img.b2bpic.net/free-photo/receptionist-elegant-suit-work-with-customer_23-2149714431.jpg",
        },
      ]}
      title="Amenities for Modern Living"
      description="Designed for professionals and leisure seekers alike."
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Standard King Room",
          price: "From $299",
          imageSrc: "http://img.b2bpic.net/free-photo/bed-with-pillows_1203-15.jpg",
        },
        {
          id: "p2",
          name: "Deluxe Bath Suite",
          price: "From $389",
          imageSrc: "http://img.b2bpic.net/free-photo/tidy-bathroom-with-shiny-tiles_1203-1501.jpg",
        },
        {
          id: "p3",
          name: "Upper East View Suite",
          price: "From $549",
          imageSrc: "http://img.b2bpic.net/free-photo/decorated-interior-christmas-beautiful-christmas-tree-near-modern-expensive-couch-big-clock-with-roman-numbers_132075-6150.jpg",
        },
      ]}
      title="Refined Stays"
      description="Choose the perfect room for your Manhattan visit."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-digital-tablet-waiting-area_107420-95825.jpg",
        },
        {
          id: "2",
          name: "David & Emma Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-girl-her-handsome-boyfriend-walking-street_158538-142.jpg",
        },
        {
          id: "3",
          name: "Jordan P.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-smiling-brunette-model-dressed-summer-hipster-jacket-clothes_158538-1606.jpg",
        },
        {
          id: "4",
          name: "Marcus V.",
          imageSrc: "http://img.b2bpic.net/free-photo/chair-front-businesswoman-sitting-caf_23-2147876643.jpg",
        },
        {
          id: "5",
          name: "Elena R.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-digital-tablet-waiting-area_107420-95825.jpg",
        },
      ]}
      cardTitle="Guest Experiences"
      cardTag="Social Proof"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Inquire"
      title="Visit Us on the UES"
      description="Have questions? Our front desk team is ready to assist you in planning your perfect Manhattan getaway."
      imageSrc="http://img.b2bpic.net/free-photo/view-famous-building-lyon-city_268835-4073.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Courtyard UES"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
