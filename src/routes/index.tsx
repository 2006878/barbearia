import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors,
  Crown,
  Sparkles,
  Users,
  Heart,
  Smartphone,
  CalendarClock,
  MapPin,
  Instagram,
  Menu,
  X,
} from "lucide-react";

import heroImg from "../assets/hero.jpg";
import mundoDosDadosLogo from "../assets/mundo-dos-dados-logo.png";
import { ThemeToggle } from "../components/theme-toggle";
import { FloatingScheduleButton, useCalendlyPopup } from "../components/calendly-widget";

const WHATSAPP_NUMBER = "5535999370627";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Dama%20do%20Corte.`;

const SITE_URL = "https://damadocorte.lovable.app";
const PAGE_TITLE = "Barbearia em Passos, MG | Dama do Corte — Barbearia & Estúdio";
const PAGE_DESCRIPTION =
  "Barbearia e estúdio em Passos, MG: cortes, barba, tranças, cabelo afro e sobrancelhas com técnica, respeito e estilo. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "barbearia Passos MG, tranças, cabelo afro, sobrancelhas, barba" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Dama do Corte — Barbearia & Estúdio",
          description: PAGE_DESCRIPTION,
          url: `${SITE_URL}/`,
          telephone: "+5535999370627",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Passos",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          sameAs: ["https://instagram.com/damadocorte"],
          makesOffer: [
            "Corte de cabelo",
            "Barba",
            "Tranças",
            "Cabelo afro",
            "Design de sobrancelhas",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openCalendly = useCalendlyPopup();

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Valores", href: "#valores" },
    { label: "Contato", href: "#contato" },
  ];


  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <FloatingScheduleButton />
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="font-display text-lg font-semibold tracking-wide text-foreground">
              Dama do Corte
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-gold-foreground transition-transform hover:scale-105 sm:inline-flex"
          >
            <Smartphone className="h-3.5 w-3.5" />
            WhatsApp
          </a>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-10 w-10 place-items-center rounded-md text-foreground sm:hidden"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background px-4 pb-4 pt-2 sm:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-bold text-gold-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Smartphone className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24">
          <div className="relative mx-auto max-w-3xl px-4 pb-10 pt-6 text-center sm:pb-14 sm:pt-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
              <Crown className="h-3.5 w-3.5" strokeWidth={1.5} />
              Barbearia & Estúdio
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
              Dama do Corte
            </h1>
            <p className="mt-3 font-display text-lg font-normal italic tracking-wide text-gold sm:text-xl">
              Estilo · Autenticidade · Você
            </p>

            <p className="mx-auto mt-5 max-w-md text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              Mais que um salão. Um espaço de cuidado, autoestima e expressão. Aqui,
              homens e mulheres encontram serviços de barbearia, tranças, cabelo afro e
              sobrancelhas em um ambiente moderno, acolhedor e profissional.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-105 sm:w-auto"
              >
                <Smartphone className="h-4 w-4" />
                Falar pelo WhatsApp
              </a>
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-transparent px-6 py-3.5 text-sm font-bold text-gold transition-colors hover:bg-gold/10 sm:w-auto"
              >
                <CalendarClock className="h-4 w-4" />
                Agendar horário
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto max-w-3xl px-4">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/10">
              <img
                src={heroImg}
                alt="Ambiente sofisticado da Dama do Corte com clientes e profissionais"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover sm:aspect-[16/10]"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                O que fazemos
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Serviços
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <ServiceCard
                icon={<Scissors className="h-6 w-6" strokeWidth={1.5} />}
                title="Cortes"
                description="Do clássico ao contemporâneo, com acabamento impecável."
              />
              <ServiceCard
                icon={<Sparkles className="h-6 w-6" strokeWidth={1.5} />}
                title="Barba"
                description="Hidratação, modelagem e acabamento com precisão."
              />
              <ServiceCard
                icon={<Users className="h-6 w-6" strokeWidth={1.5} />}
                title="Tranças"
                description="Estilos proteivos e expressivos feitos com cuidado."
              />
              <ServiceCard
                icon={<Heart className="h-6 w-6" strokeWidth={1.5} />}
                title="Sobrancelhas"
                description="Design que valoriza o olhar e a harmonia do rosto."
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="border-y border-border/50 bg-card py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Nossa essência
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Sobre a Dama do Corte
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              Nosso propósito é valorizar a sua melhor versão, com técnica, respeito e
              estilo. Cada detalhe do espaço foi pensado para que você se sinta
              acolhido, confiante e autêntico.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-balance text-xs leading-relaxed text-muted-foreground/80 sm:text-sm">
              Beleza real, força e confiança, diversidade, modernidade, conforto,
              profissionalismo e autenticidade. Esse é o nosso jeito de cuidar de você.
            </p>
          </div>
        </section>

        {/* Values */}
        <section id="valores" className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                O que nos move
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Nossos Valores
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <ValueCard title="Autenticidade" description="Ser quem você é." />
              <ValueCard title="Excelência" description="Em cada detalhe." />
              <ValueCard title="Inclusão" description="Todos são bem-vindos." />
              <ValueCard title="Bem-estar" description="O cuidado vai além da aparência." />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contato" className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-card to-muted px-6 py-10 text-center shadow-xl shadow-black/10 sm:px-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-wood/20 blur-3xl" />

              <div className="relative">
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Pronto para se sentir na sua melhor versão?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
                  Fale conosco pelo WhatsApp ou aguarde o agendamento online, que está
                  chegando em breve.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-105 sm:w-auto"
                  >
                    <Smartphone className="h-4 w-4" />
                    Chamar no WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={openCalendly}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-transparent px-6 py-3.5 text-sm font-bold text-gold transition-colors hover:bg-gold/10 sm:w-auto"
                  >
                    <CalendarClock className="h-4 w-4" />
                    Agendar online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card py-10">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <Crown className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="font-display text-lg font-semibold tracking-wide text-foreground">
              Dama do Corte
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold/80">
            Barbearia & Estúdio
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
            Estilo · Autenticidade · Você
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://maps.google.com/?q=Dama+do+Corte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <MapPin className="h-4 w-4" />
              <span>Passos, MG</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Smartphone className="h-4 w-4" />
              <span>(35) 99937-0627</span>
            </a>
            <a
              href="https://instagram.com/damadocorte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              <span>@damadocorte</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Dama do Corte. Todos os direitos reservados.
          </p>
          <a
            href="https://www.linkedin.com/company/mundodosdados"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground/60 transition-colors hover:text-gold"
          >
            <img
              src={mundoDosDadosLogo}
              alt="Logo Mundo dos Dados"
              width={20}
              height={20}
              className="h-5 w-5 rounded-full object-contain"
              loading="lazy"
              decoding="async"
            />
            <span>
              Desenvolvido por{" "}
              <span className="underline">Mundo dos Dados</span>
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-border/60 bg-card p-4 text-center transition-colors hover:border-gold/40 sm:p-5">
      <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-center transition-colors hover:border-gold/40 sm:p-5">
      <h3 className="font-display text-base font-semibold text-gold sm:text-lg">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{description}</p>
    </div>
  );
}
