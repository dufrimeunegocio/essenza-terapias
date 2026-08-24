import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

const TITLE = "Essenza Terapias | Terapia, Psicanálise e ABA em Toledo – PR";
const DESCRIPTION =
  "Essenza Terapias em Toledo – PR. Atendimento terapêutico, psicanalítico e ABA para crianças, adolescentes e adultos, com acolhimento e acompanhamento individualizado.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Essenza Terapias",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toledo",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          telephone: "+5545998154203",
          email: "essenzaeterapias89@gmail.com",
          sameAs: ["https://www.instagram.com/elianaalves_psi.oficial"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <About />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
