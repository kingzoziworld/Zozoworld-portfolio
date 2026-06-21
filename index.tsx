import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle, Instagram, MapPin, Music2,
  ShieldCheck, Wrench, CreditCard, Sparkles, Star, Menu, X,
  ArrowRight, ArrowUpRight, Check, Award, Zap, Headphones as HeadphonesIcon,
  ShoppingBag, Smartphone, Layers,
} from "lucide-react";

import heroDevice from "@/assets/hero-device.png";
import { CATEGORIES, WA, PHONE_DISPLAY, IG, TIKTOK } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BKING Phones & Gadget Ventures — Premium Tech, Reimagined" },
      { name: "description", content: "Authentic iPhones, Samsung flagships, smart watches, audio gadgets and accessories. Buy, sell, repair and pay in flexible installments." },
      { property: "og:title", content: "BKING Phones & Gadget Ventures" },
      { property: "og:description", content: "Premium phones, gadgets & accessories with easy installment plans." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav open={open} setOpen={setOpen} />
      <Hero />
      <Marquee />
      <Categories />
      <Featured />
      <Installment />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = [
    { label: "Shop", href: "#categories" },
    { label: "Featured", href: "#featured" },
    { label: "Services", href: "#services" },
    { label: "Why BKING", href: "#why" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-dark border-b border-border">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="size-9 rounded-xl cyan-bg grid place-items-center font-display font-bold text-cyan-foreground glow-cyan">B</div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-wide">BKING</div>
            <div className="text-[9px] text-muted-foreground tracking-[0.2em]">PHONES · GADGETS</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={WA} target="_blank" rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 text-primary px-4 py-2 text-sm font-semibold hover:bg-primary hover:text-cyan-foreground transition-colors">
          <MessageCircle className="size-4" /> Chat now
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-5 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary">{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full cyan-bg text-cyan-foreground px-4 py-2 text-sm font-semibold">
            <MessageCircle className="size-4" /> Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-20 radial-bg overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-20 -left-32 size-[420px] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 size-[460px] rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6 fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11px]">
            <span className="size-2 rounded-full bg-primary pulse-cyan" />
            <span className="text-muted-foreground tracking-widest uppercase">Nigeria · Premium Gadgets</span>
          </div>
          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Experience <span className="cyan-text text-shadow-glow">Premium</span><br />
            Phones & Gadgets.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
            Buy · Sell · Repair · Installment Payments. Curated authentic tech, delivered with care.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#categories" className="inline-flex items-center gap-2 rounded-full cyan-bg text-cyan-foreground px-6 py-3.5 font-semibold glow-cyan hover:scale-[1.03] transition-transform">
              <ShoppingBag className="size-4" /> Explore Products
            </a>
            <a href={WA} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-semibold hover:border-primary/60 transition-colors">
              <MessageCircle className="size-4 text-primary" /> Chat on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
            {[["10K+", "Customers"], ["100%", "Authentic"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl px-4 py-3">
                <div className="font-display text-xl font-bold cyan-text">{n}</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          {/* rotating ring */}
          <div className="absolute inset-0 m-auto size-[300px] sm:size-[380px] rounded-full border border-primary/30 animate-spin-slow" />
          <div className="absolute inset-0 m-auto size-[420px] sm:size-[500px] rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-0 m-auto size-[260px] sm:size-[340px] rounded-full bg-primary/30 blur-[90px]" />
          <img src={heroDevice} alt="BKING premium phone" width={1024} height={1280} fetchPriority="high"
            className="relative w-full max-w-[420px] mx-auto animate-float-y" />

          {/* floating chips */}
          <div className="absolute top-6 left-0 glass-dark rounded-2xl px-3 py-2 hidden sm:flex items-center gap-2 animate-float-y" style={{ animationDelay: "1s" }}>
            <Zap className="size-4 text-primary" />
            <div className="text-xs">Fast Charging Ready</div>
          </div>
          <div className="absolute bottom-10 right-0 glass-dark rounded-2xl px-3 py-2 hidden sm:flex items-center gap-2 animate-float-y" style={{ animationDelay: "2s" }}>
            <CreditCard className="size-4 text-primary" />
            <div className="text-xs">60% upfront · Easy Installment</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Apple", "Samsung", "Xiaomi", "Sony", "JBL", "Anker", "Google", "Huawei", "Oraimo", "Bose"];
  return (
    <div className="border-y border-border py-4 overflow-hidden bg-card/30">
      <div className="flex gap-12 whitespace-nowrap animate-[shimmer_22s_linear_infinite] text-muted-foreground text-sm tracking-[0.3em] uppercase">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it} <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Shop by Category</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl">
              Pick your <span className="cyan-text">universe</span>. Tap to explore.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">
            Every collection is hand-curated, authenticity verified, and ready to ship anywhere in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              to="/category/$slug"
              params={{ slug: cat.slug }}
              className={`group relative rounded-3xl overflow-hidden glass-dark hover:border-primary/50 transition-all hover:-translate-y-1 ${
                i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 right-4 size-10 rounded-full glass grid place-items-center text-primary group-hover:cyan-bg group-hover:text-cyan-foreground transition-colors">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 text-[10px] text-primary tracking-[0.25em] uppercase mb-2">
                  <span className="text-base">{cat.emoji}</span>
                  {cat.items.length} products
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{cat.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED ---------------- */
function Featured() {
  // pick 6 best products across categories
  const featured = [
    { cat: CATEGORIES[0], item: CATEGORIES[0].items[4] },
    { cat: CATEGORIES[1], item: CATEGORIES[1].items[2] },
    { cat: CATEGORIES[0], item: CATEGORIES[0].items[3] },
    { cat: CATEGORIES[2], item: CATEGORIES[2].items[0] },
    { cat: CATEGORIES[3], item: CATEGORIES[3].items[0] },
    { cat: CATEGORIES[1], item: CATEGORIES[1].items[3] },
  ];
  return (
    <section id="featured" className="py-20 md:py-28 relative overflow-hidden navy-bg border-y border-border">
      <div className="absolute inset-0 noise-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Trending now</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="cyan-text">drops</span>
            </h2>
          </div>
          <Link to="/category/$slug" params={{ slug: "iphones" }} className="text-sm text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(({ cat, item }) => {
            const msg = encodeURIComponent(`Hi BKING, I'd like to order ${item.name}.`);
            return (
              <article key={`${cat.slug}-${item.name}`} className="group relative rounded-3xl overflow-hidden glass-dark hover:border-primary/40 transition-all hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-background">
                  <img src={item.image ?? cat.image} alt={item.name} loading="lazy"
                    className="size-full object-cover opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest glass px-2.5 py-1 rounded-full text-primary">
                    {cat.name}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-display font-bold text-lg leading-tight">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                  <div className="flex gap-2 pt-1">
                    <Link to="/category/$slug" params={{ slug: cat.slug }}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full cyan-bg text-cyan-foreground px-4 py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform">
                      Buy <ArrowRight className="size-3.5" />
                    </Link>
                    <a href={`${WA}?text=${msg}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                      className="inline-flex items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp border border-whatsapp/30 size-10 hover:bg-whatsapp/25 transition-colors">
                      <MessageCircle className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTALLMENT ---------------- */
function Installment() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 size-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11px]">
            <CreditCard className="size-3.5 text-primary" />
            <span className="text-muted-foreground tracking-widest uppercase">Easy Buy Program</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Own Your Phone Through <span className="cyan-text">Easy Installment.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Pay 60% upfront and spread the remaining over flexible terms. Zero stress, full ownership from day one.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-xl pt-2">
            {[
              "Pay 60% to take the device home",
              "Flexible monthly payment plans",
              "Available on all premium phones",
              "Quick approval via WhatsApp",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 glass rounded-2xl p-3">
                <span className="mt-0.5 size-5 rounded-full cyan-bg grid place-items-center shrink-0">
                  <Check className="size-3 text-cyan-foreground" />
                </span>
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full cyan-bg text-cyan-foreground px-6 py-3.5 font-semibold glow-cyan hover:scale-[1.03] transition-transform">
            <MessageCircle className="size-4" /> Apply via WhatsApp
          </a>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="glass-dark rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">How it works</div>
              <div className="font-display text-3xl font-bold mt-2">Premium iPhones</div>
              <div className="text-primary text-sm mt-1">Chat on WhatsApp for current price</div>
            </div>
            <div className="relative h-2 rounded-full bg-background overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-3/5 cyan-bg rounded-full" />
            </div>
            <div className="relative grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">Pay today</div>
                <div className="font-display text-xl font-bold mt-1">60%</div>
                <div className="text-xs text-primary">Upfront</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">Balance</div>
                <div className="font-display text-xl font-bold mt-1">40%</div>
                <div className="text-xs text-muted-foreground">Flexible terms</div>
              </div>
            </div>
            <div className="relative flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
              <ShieldCheck className="size-4 text-primary" />
              Approval in under 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: ShoppingBag, t: "We Buy Phones", d: "Sell us your device for the best market value." },
    { icon: Smartphone, t: "We Sell Devices", d: "Authentic phones, gadgets and accessories." },
    { icon: Wrench, t: "We Fix Devices", d: "Expert repairs: screens, batteries and more." },
    { icon: CreditCard, t: "Installment Payments", d: "Pay 60% upfront, spread the rest with ease." },
  ];
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">What we do</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Built for <span className="cyan-text">every need.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={s.t} className="group glass-dark rounded-3xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/25 transition-colors" />
              <div className="relative">
                <div className="text-xs text-muted-foreground tracking-widest">0{i + 1}</div>
                <div className="size-12 rounded-2xl glass grid place-items-center my-4 group-hover:cyan-bg transition-colors">
                  <s.icon className="size-5 text-primary group-hover:text-cyan-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "100% Authentic Devices", d: "Every product is verified original — sealed or thoroughly tested." },
    { icon: Award, t: "Warranty Available", d: "We stand behind everything we sell." },
    { icon: Sparkles, t: "Trusted Business", d: "Years of reliable service across Nigeria." },
    { icon: Layers, t: "Large Product Selection", d: "From flagships to accessories, all in one place." },
    { icon: HeadphonesIcon, t: "Excellent Support", d: "Real humans, fast responses — always." },
  ];
  return (
    <section id="why" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Why BKING</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
              The shop tech lovers <span className="cyan-text">actually trust.</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm">
              We obsess over authenticity, transparent pricing and after-sales care so you don't have to.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div key={it.t} className="glass-dark rounded-2xl p-5 flex gap-4 hover:border-primary/40 transition-colors">
                <div className="size-11 rounded-xl cyan-bg grid place-items-center shrink-0">
                  <it.icon className="size-5 text-cyan-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{it.t}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const reviews = [
    { name: "Ibrahim", text: "I got my iPhone exactly as advertised — sealed, original, and delivered fast." },
    { name: "Zainab", text: "Smooth installment process and reliable service. BKING really cares." },
    { name: "Mariam", text: "Authentic gadget store with fast response and friendly support." },
  ];
  return (
    <section className="py-20 md:py-28 navy-bg border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Customer love</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Real words. <span className="cyan-text">Real people.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="glass-dark rounded-3xl p-7 relative overflow-hidden hover:border-primary/40 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="size-10 rounded-full cyan-bg grid place-items-center text-cyan-foreground font-display font-bold">
                  {r.name[0]}
                </div>
                <div className="font-display font-bold">— {r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative rounded-[2rem] glass-dark p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-20 -right-20 size-80 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="text-xs tracking-[0.3em] uppercase text-primary">Let's talk</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
                Ready to <span className="cyan-text">level up</span> your tech?
              </h2>
              <p className="text-muted-foreground max-w-md">
                Reach out on WhatsApp for the fastest response. We're online and ready to help you find the perfect device.
              </p>
              <a href={WA} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full cyan-bg text-cyan-foreground px-6 py-3.5 font-semibold glow-cyan hover:scale-[1.03] transition-transform">
                <MessageCircle className="size-4" /> WhatsApp {PHONE_DISPLAY}
              </a>
            </div>
            <div className="space-y-3">
              <ContactRow icon={<MessageCircle className="size-5" />} label="WhatsApp / Call" value={PHONE_DISPLAY} href={WA} />
              <ContactRow icon={<Instagram className="size-5" />} label="Instagram" value="@bking.ventures" href={IG} />
              <ContactRow icon={<Music2 className="size-5" />} label="TikTok" value="bking_phones_gadgets" href={TIKTOK} />
              <ContactRow icon={<MapPin className="size-5" />} label="Location" value="Alhikmah" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/40 transition-colors">
      <div className="size-11 rounded-xl cyan-bg grid place-items-center text-cyan-foreground">{icon}</div>
      <div>
        <div className="text-[10px] tracking-widest uppercase text-muted-foreground">{label}</div>
        <div className="font-display font-bold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl cyan-bg grid place-items-center font-display font-bold text-cyan-foreground">B</div>
            <div>
              <div className="font-display font-bold">BKING</div>
              <div className="text-[9px] text-muted-foreground tracking-[0.2em]">PHONES · GADGETS</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Premium phones, gadgets and accessories. Authentic devices, flexible installment plans, and expert repair services across Nigeria.
          </p>
        </div>
        <div>
          <div className="font-display font-bold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {CATEGORIES.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="hover:text-primary transition-colors">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display font-bold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={WA} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp {PHONE_DISPLAY}</a></li>
            <li><a href={IG} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram @bking.ventures</a></li>
            <li><a href={TIKTOK} target="_blank" rel="noreferrer" className="hover:text-primary">TikTok bking_phones_gadgets</a></li>
            <li>Alhikmah</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BKING Phones & Gadget Ventures. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- FLOATING ---------------- */
function FloatingWA() {
  return (
    <a href={WA} target="_blank" rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center bg-whatsapp text-white shadow-2xl pulse-cyan">
      <MessageCircle className="size-6" />
    </a>
  );
}
