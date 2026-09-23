"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Coq au Vin",
    accent: "Braise • Vino • Funghi",
    desc: "Chicken braised slowly in red wine, mushrooms and pearl onions.",
    price: "₹2,850",
    tags: ["Chef's Special", "Slow-Cooked"],
  },
  {
    title: "Bœuf Bourguignon",
    accent: "Stufato • Carote • Erbe",
    desc: "Beef stew cooked with red wine, carrots and fresh herbs.",
    price: "₹2,950",
    tags: ["Hearty", "Gluten-Free"],
  },
  {
    title: "Bouillabaisse",
    accent: "Pesce • Zafferano • Rouille",
    desc: "Traditional Provençal fish stew with saffron and rouille.",
    price: "₹3,000",
    tags: ["Fresh Fish", "Seafood"],
  },
  {
    title: "Crème Brûlée",
    accent: "Vaniglia • Zucchero Bruciato",
    desc: "Baked custard with caramelized sugar crust and vanilla.",
    price: "₹2,800",
    tags: ["Vegetarian", "Signature Dessert"],
  },
];

const marqueeWords = [
  "Traditional Recipes",
  "Fresh Pasta",
  "Vintage Spirit",
  "Handmade Desserts",
  "Since 1998",
  "Fine Dining",
  "La Dolce Vita",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-wine">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Experience />
      <Testimonials />
      <Reservation />
      <CTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-wine/90 backdrop-blur-md z-50 border-b-2 border-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-heading text-gold tracking-wide">
            THE CRESCENT
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase font-semibold">
              About
            </a>
            <a href="#menu" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase font-semibold">
              Menu
            </a>
            <a href="#experience" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase font-semibold">
              Experience
            </a>
            <a href="#reviews" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase font-semibold">
              Reviews
            </a>
            <a href="#reserve" className="bg-burgundy text-cream px-6 py-3 rounded-full font-medium hover:bg-terracotta transition-colors text-sm tracking-wide border-2 border-gold/50">
              Reserve a Table
            </a>
          </div>
          <button className="md:hidden text-gold">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-wine overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src="https://res.cloudinary.com/dasvdqums/video/upload/v1790156648/crescent_video_delszq.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine/80 via-wine/60 to-wine/90 pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-gold/[0.06] text-[24rem] md:text-[34rem] leading-none whitespace-nowrap">
          Buon Appetito
        </span>
      </div>
      <div className="absolute left-8 top-32 hidden lg:block">
        <span className="font-script text-gold text-6xl rotate-[-8deg] inline-block">Mangia</span>
      </div>
      <div className="absolute right-10 top-40 hidden lg:block">
        <span className="font-heading text-gold text-4xl rotate-[6deg] inline-block">&ldquo;Salute!&rdquo;</span>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-40 w-full min-h-screen">
        <p className="uppercase tracking-[0.55em] text-gold font-semibold text-xs sm:text-sm mb-5">
          Ristorante &middot; Trattoria &middot; Degustazione
        </p>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gold/50"></div>
          <span className="font-script text-gold text-2xl">La Dolce Vita</span>
          <div className="h-px w-16 bg-gold/50"></div>
        </div>

        {slides.map((slide, i) => (
          <div
            key={i}
            className={
              i === current
                ? "transition-opacity duration-700"
                : "transition-opacity duration-700 absolute inset-x-0 top-1/3 flex flex-col items-center pointer-events-none opacity-0"
            }
          >
            <p className="font-script text-gold text-2xl md:text-3xl mb-4">{slide.accent}</p>
            <h2 className="text-6xl md:text-8xl font-heading text-cream mb-5 leading-none tracking-wide">
              {slide.title}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 rounded-full bg-gold/40"></div>
              <span className="font-heading text-gold text-xl">&starf;</span>
              <div className="h-1 w-12 rounded-full bg-gold/40"></div>
            </div>
            <p className="text-xl md:text-2xl text-cream/75 max-w-xl mx-auto mb-8 leading-relaxed">
              {slide.desc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {slide.tags.map((tag, j) => (
                <span key={j} className="bg-sage text-cream px-4 py-1.5 rounded-full text-sm border-2 border-gold/40">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#reserve" className="bg-burgundy text-cream px-10 py-4 rounded-full text-lg font-semibold hover:bg-terracotta transition-colors shadow-lg border-2 border-gold/50">
                Reserve Your Table
              </a>
              <a href="#menu" className="bg-transparent text-gold px-10 py-4 rounded-full text-lg font-semibold border-2 border-gold hover:bg-gold/10 transition-colors">
                Order This Dish
              </a>
            </div>
            <p className="mt-8 text-4xl font-heading text-gold">{slide.price}</p>
          </div>
        ))}

        <div className="relative mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(current - 1)}
            className="w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={
                  i === current
                    ? "w-10 h-3 rounded-full bg-gold transition-all"
                    : "w-3 h-3 rounded-full bg-cream/30 hover:bg-gold/60 transition-all"
                }
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(current + 1)}
            className="w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="bg-burgundy overflow-hidden py-4 border-y-2 border-gold/60">
      <div className="marquee-track whitespace-nowrap flex">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {marqueeWords.map((word, j) => (
              <span key={j} className="text-cream font-heading text-2xl mx-8 tracking-wide">
                {word} <span className="text-gold mx-4">&star;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  const specials = [
    { name: "Coq au Vin", price: "₹2,850" },
    { name: "Bœuf Bourguignon", price: "₹2,950" },
    { name: "Bouillabaisse", price: "₹3,000" },
    { name: "Crème Brûlée", price: "₹2,800" },
    { name: "Tarte Tatin", price: "₹2,700" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-gold font-semibold text-sm mb-4">
              La Nostra Storia
            </p>
            <h2 className="text-4xl md:text-6xl font-heading text-cream mb-6 leading-snug">
              Where Tradition Meets Modern Gastronomy
            </h2>
            <p className="text-lg text-cream/75 leading-relaxed mb-8">
              Since 1998, THE CRESCENT has been a sanctuary for food lovers. Nestled in the heart of the city,
              our restaurant combines classic culinary traditions with bold, contemporary flavors.
            </p>
            <p className="text-lg text-cream/75 leading-relaxed mb-10">
              Every element — from the hand-crafted menu to the warm, intimate ambiance — is designed to create
              moments worth savoring.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-cream border-2 border-gold rounded-2xl p-6 text-center shadow-lg">
                <p className="text-3xl font-heading text-burgundy mb-1">27+</p>
                <p className="text-sm text-cocoa/70">Years of Excellence</p>
              </div>
              <div className="bg-cream border-2 border-gold rounded-2xl p-6 text-center shadow-lg">
                <p className="text-3xl font-heading text-burgundy mb-1">45+</p>
                <p className="text-sm text-cocoa/70">Signature Dishes</p>
              </div>
              <div className="bg-cream border-2 border-gold rounded-2xl p-6 text-center shadow-lg">
                <p className="text-3xl font-heading text-burgundy mb-1">150k+</p>
                <p className="text-sm text-cocoa/70">Guests Served</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-burgundy border-4 border-gold p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
              <span className="font-heading text-cream text-[10rem] leading-none absolute -bottom-6 -right-4">
                Bellissimo
              </span>
            </div>
            <p className="font-script text-gold text-3xl mb-6 text-center">Carta del Giorno</p>
            <h3 className="text-center font-heading text-cream text-3xl mb-10 border-b-2 border-gold/40 pb-6">
              Today&apos;s Specials
            </h3>
            <div className="space-y-6">
              {specials.map((s, i) => (
                <div key={i} className="flex justify-between items-baseline gap-4">
                  <span className="font-heading text-cream text-xl">{s.name}</span>
                  <div className="flex-1 border-b-2 border-dotted border-gold/50 mx-2"></div>
                  <span className="font-heading text-gold text-xl whitespace-nowrap">{s.price}</span>
                </div>
              ))}
            </div>
            <p className="font-script text-cream/80 text-2xl text-center mt-10">&ldquo;Mangiare bene è vivere bene.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const categories = [
    {
      name: "Starters & Soups",
      script: "Antipasti e Zuppe",
      items: [
        { name: "Quiche Lorraine", desc: "Savory egg, cream and bacon tart", price: "₹2,550", tag: "Classic" },
        { name: "Croque Monsieur", desc: "Grilled ham and cheese sandwich", price: "₹2,600", tag: "Signature" },
        { name: "Escargots de Bourgogne", desc: "Snails with garlic-herb butter", price: "₹2,900", tag: "Chef's Pick" },
        { name: "Soupe à l'Oignon", desc: "French onion soup", price: "₹2,500", tag: "Vegetarian" },
        { name: "Galette Bretonne", desc: "Savory buckwheat crêpe", price: "₹2,650", tag: "Fresh" },
        { name: "Salade Niçoise", desc: "Niçoise salad with vegetables, tuna and egg", price: "₹2,750", tag: "Fresh" },
      ],
    },
    {
      name: "Main Courses",
      script: "Secondi Piatti",
      items: [
        { name: "Coq au Vin", desc: "Chicken braised in wine", price: "₹2,850", tag: "Chef's Special" },
        { name: "Bœuf Bourguignon", desc: "Beef stew cooked with red wine", price: "₹2,950", tag: "Slow-Cooked" },
        { name: "Ratatouille", desc: "Stewed Mediterranean vegetables", price: "₹2,500", tag: "Vegetarian" },
        { name: "Bouillabaisse", desc: "Traditional Provençal fish stew", price: "₹3,000", tag: "Fresh Fish" },
        { name: "Cassoulet", desc: "White beans with meat and sausage", price: "₹2,750", tag: "Hearty" },
        { name: "Confit de Canard", desc: "Slow-cooked duck leg", price: "₹2,900", tag: "Signature" },
        { name: "Duck à l'Orange", desc: "Duck with orange sauce", price: "₹2,900", tag: "Signature" },
        { name: "Gratin Dauphinois", desc: "Creamy baked potatoes", price: "₹2,500", tag: "Vegetarian" },
        { name: "Steak Frites", desc: "Steak served with French fries", price: "₹2,850", tag: "Classic" },
      ],
    },
    {
      name: "Desserts",
      script: "Dolci",
      items: [
        { name: "Crêpes", desc: "Thin French pancakes", price: "₹2,600", tag: "Classic" },
        { name: "Tarte Tatin", desc: "Upside-down caramelized apple tart", price: "₹2,700", tag: "Signature" },
        { name: "Croissant", desc: "Buttery, flaky pastry", price: "₹2,500", tag: "Fresh" },
        { name: "Crème Brûlée", desc: "Baked custard with caramelized sugar", price: "₹2,800", tag: "Signature Dessert" },
        { name: "Chocolate Mousse", desc: "Light, rich chocolate dessert", price: "₹2,650", tag: "Vegetarian" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-gold font-semibold text-sm mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-6xl font-heading text-cream mb-4">Classic French Cuisine</h2>
          <p className="font-script text-gold text-3xl mb-4">le carte &mdash; made with love</p>
          <p className="text-xl text-cream/75 max-w-2xl mx-auto">
            Authentic Provençal recipes and French classics, crafted with the finest ingredients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-2xl bg-cream border-2 border-gold shadow-lg p-8">
              <p className="font-script text-gold text-2xl mb-1 text-center">{cat.script}</p>
              <h3 className="text-2xl font-heading text-burgundy mb-8 text-center pb-4 border-b-2 border-gold/40">
                {cat.name}
              </h3>
              <div className="space-y-6">
                {cat.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-baseline gap-3">
                      <h4 className="font-heading text-cocoa">{item.name}</h4>
                      <div className="flex-1 border-b-2 border-dotted border-gold/60 mx-2"></div>
                      <span className="text-burgundy font-bold whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="bg-sage text-cream px-2.5 py-0.5 rounded-full text-xs border border-gold/40">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-cocoa/70 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#reserve" className="inline-block bg-burgundy text-cream border-2 border-gold px-10 py-3.5 rounded-full font-semibold hover:bg-terracotta transition-colors">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    { number: "01", title: "Intimate Ambiance", text: "Candlelit dining room with a warm, sophisticated atmosphere for every occasion." },
    { number: "02", title: "Live Music", text: "Enjoy elegant live piano and violin performances every Friday and Saturday evening." },
    { number: "03", title: "Private Dining", text: "Exclusive private rooms for celebrations, business dinners, and special events." },
    { number: "04", title: "White Glove Service", text: "Impeccable, personalized service from our dedicated team from the moment you arrive." },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-gold font-semibold text-sm mb-4">The Experience</p>
          <h2 className="text-4xl md:text-6xl font-heading text-cream mb-4">More Than a Meal</h2>
          <p className="font-script text-gold text-3xl mb-4">un viaggio di sapori</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center group border-2 border-transparent hover:border-gold rounded-2xl p-8 transition-all">
              <p className="font-heading text-gold text-6xl mb-4 group-hover:text-terracotta transition-colors">
                {item.number}
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40"></div>
                <span className="font-script text-gold text-2xl">&starf;</span>
                <div className="h-px w-8 bg-gold/40"></div>
              </div>
              <h3 className="text-xl font-heading text-cream mb-3">{item.title}</h3>
              <p className="text-cream/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Isabella Romano",
      role: "Food Critic",
      content: "An exceptional culinary experience. The tasting menu is a masterpiece — every course more stunning than the last.",
      stars: 5,
    },
    {
      name: "James Whitfield",
      role: "Regular Guest",
      content: "We celebrated our anniversary here and were treated like royalty. The service and food were beyond perfection.",
      stars: 5,
    },
    {
      name: "Amara Okafor",
      role: "Travel Blogger",
      content: "The best fine dining in the city, hands down. THE CRESCENT is a must-visit for anyone who loves exceptional cuisine.",
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-gold font-semibold text-sm mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-6xl font-heading text-cream mb-4">What Our Guests Say</h2>
          <p className="font-script text-gold text-3xl">parole dei nostri ospiti</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl bg-cream border-2 border-gold shadow-lg border-t-8">
              <div className="flex gap-1 text-gold mb-6">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} className="text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-cocoa leading-relaxed mb-8 italic">&ldquo;{r.content}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-burgundy text-gold flex items-center justify-center font-bold font-heading text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-cocoa text-lg">{r.name}</p>
                  <p className="text-sm text-cocoa/70">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section id="reserve" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-gold font-semibold text-sm mb-4">Reservations</p>
            <h2 className="text-4xl md:text-6xl font-heading text-cream mb-4">Book Your Table</h2>
            <p className="font-script text-gold text-3xl mb-6">prenota il tuo tavolo</p>
            <p className="text-xl text-cream/75 leading-relaxed mb-10">
              Join us for an evening of unforgettable dining. We recommend booking in advance
              to secure your preferred table and time.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-burgundy border-2 border-gold rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine text-gold flex items-center justify-center text-lg font-heading border border-gold/60">F</div>
                <div>
                  <p className="text-cream/60 text-sm">Phone</p>
                  <p className="text-lg font-semibold text-cream">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-burgundy border-2 border-gold rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine text-gold flex items-center justify-center text-lg font-heading border border-gold/60">E</div>
                <div>
                  <p className="text-cream/60 text-sm">Email</p>
                  <p className="text-lg font-semibold text-cream">reserve@thecrescent.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-burgundy border-2 border-gold rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine text-gold flex items-center justify-center text-lg font-heading border border-gold/60">A</div>
                <div>
                  <p className="text-cream/60 text-sm">Location</p>
                  <p className="text-lg font-semibold text-cream">128 Crescent Avenue, Downtown</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-burgundy border-2 border-gold rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine text-gold flex items-center justify-center text-lg font-heading border border-gold/60">H</div>
                <div>
                  <p className="text-cream/60 text-sm">Hours</p>
                  <p className="text-lg font-semibold text-cream">Tue - Sun: 5:30 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cream border-2 border-gold rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <p className="font-script text-terracotta text-2xl">La Tua Tavola</p>
              <h3 className="text-3xl font-heading text-burgundy">Make a Reservation</h3>
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-cocoa/70 text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-full bg-cream border-2 border-gold text-cocoa placeholder-cocoa/40 focus:border-burgundy focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-cocoa/70 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-full bg-cream border-2 border-gold text-cocoa placeholder-cocoa/40 focus:border-burgundy focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-cocoa/70 text-sm font-semibold mb-2">Guests</label>
                  <select className="w-full px-5 py-3 rounded-full bg-cream border-2 border-gold text-cocoa focus:border-burgundy focus:outline-none transition-colors">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-cocoa/70 text-sm font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-5 py-3 rounded-full bg-cream border-2 border-gold text-cocoa focus:border-burgundy focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-burgundy text-cream py-4 rounded-full font-semibold hover:bg-terracotta transition-colors border-2 border-gold/50">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-burgundy py-20 px-4 sm:px-6 lg:px-8 border-y-2 border-gold/60">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-script text-gold text-3xl mb-4">Benvenuti a Casa</p>
        <h2 className="text-4xl md:text-6xl font-heading text-cream mb-6">
          Ready to dine with us tonight?
        </h2>
        <p className="text-xl text-cream/85 max-w-xl mx-auto mb-10">
          Join us for an unforgettable evening of fine dining, fine wine, and fine company.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#reserve" className="bg-cream text-burgundy px-10 py-4 rounded-full text-lg font-bold hover:bg-terracotta hover:text-cream transition-colors border-2 border-cream">
            Reserve a Table
          </a>
          <a href="#menu" className="bg-transparent text-cream px-10 py-4 rounded-full text-lg font-semibold border-2 border-cream hover:bg-wine transition-colors">
            Explore the Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8 bg-wine-dark border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-3xl font-heading text-cream mb-4">THE CRESCENT</h3>
            <p className="font-script text-gold text-xl mb-3">La Dolce Vita</p>
            <p className="text-cream/60">
              Fine dining at its finest since 1998. Crafting unforgettable experiences, one dish at a time.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-gold mb-4 text-xl">Hours</h4>
            <ul className="space-y-2 text-cream/60">
              <li>Mon: Closed</li>
              <li>Tue - Fri: 5:30 PM - 11:00 PM</li>
              <li>Sat - Sun: 12:00 PM - 11:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-gold mb-4 text-xl">Contact</h4>
            <ul className="space-y-2 text-cream/60">
              <li>128 Crescent Avenue, Downtown</li>
              <li>+1 (555) 123-4567</li>
              <li>reserve@thecrescent.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-gold mb-4 text-xl">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gold/60 flex items-center justify-center text-cream/70 hover:bg-burgundy hover:text-cream hover:border-burgundy transition-colors">
                <span className="font-medium">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gold/60 flex items-center justify-center text-cream/70 hover:bg-burgundy hover:text-cream hover:border-burgundy transition-colors">
                <span className="font-medium">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gold/60 flex items-center justify-center text-cream/70 hover:bg-burgundy hover:text-cream hover:border-burgundy transition-colors">
                <span className="font-medium">ig</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gold/20 pt-8 text-center text-cream/50">
          <p>&copy; 2026 THE CRESCENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}