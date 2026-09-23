"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    emoji: "🍷",
    title: "Coq au Vin",
    desc: "Chicken braised slowly in red wine, mushrooms and pearl onions.",
    price: "₹2,850",
    tags: ["Chef's Special", "Slow-Cooked"],
  },
  {
    emoji: "🥘",
    title: "Bœuf Bourguignon",
    desc: "Beef stew cooked with red wine, carrots and fresh herbs.",
    price: "₹2,950",
    tags: ["Hearty", "Gluten-Free"],
  },
  {
    emoji: "🐟",
    title: "Bouillabaisse",
    desc: "Traditional Provençal fish stew with saffron and rouille.",
    price: "₹3,000",
    tags: ["Fresh Fish", "Seafood"],
  },
  {
    emoji: "🍮",
    title: "Crème Brûlée",
    desc: "Baked custard with caramelized sugar crust and vanilla.",
    price: "₹2,800",
    tags: ["Vegetarian", "Signature Dessert"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-wine">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-wine/90 backdrop-blur-md z-50 border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-lobster text-gold tracking-wide">
            THE CRESCENT
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase">
              About
            </a>
            <a href="#menu" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase">
              Menu
            </a>
            <a href="#experience" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase">
              Experience
            </a>
            <a href="#reviews" className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wide uppercase">
              Reviews
            </a>
            <a href="#reserve" className="bg-burgundy text-cream px-6 py-3 rounded-full font-medium hover:bg-terracotta transition-colors text-sm tracking-wide border border-gold/50">
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-wine">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-wine/60 via-wine/70 to-wine"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="40" r="35" fill="none" stroke="#d6b878" strokeWidth="0.2" />
            <circle cx="50" cy="40" r="25" fill="none" stroke="#d6b878" strokeWidth="0.15" />
            <circle cx="50" cy="40" r="15" fill="none" stroke="#d6b878" strokeWidth="0.1" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-40 w-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={
              i === current
                ? "transition-opacity duration-700"
                : "transition-opacity duration-700 absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0"
            }
          >
            <div className="text-8xl mb-8 drop-shadow-lg">{slide.emoji}</div>
            <p className="text-gold font-light tracking-[0.4em] uppercase text-sm mb-6">
              Signature Dish {i + 1} of {slides.length}
            </p>
            <h2 className="text-6xl md:text-8xl font-lobster text-cream mb-6 leading-tight">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-cream/80 max-w-xl mx-auto mb-8 leading-relaxed font-light">
              {slide.desc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {slide.tags.map((tag, j) => (
                <span key={j} className="bg-sage text-cream px-4 py-1.5 rounded-full text-sm border border-gold/30">
                  🌿 {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#reserve" className="bg-burgundy text-cream px-10 py-4 rounded-full text-lg font-medium hover:bg-terracotta transition-colors shadow-lg border border-gold/50">
                Reserve Your Table
              </a>
              <a href="#menu" className="bg-cream text-burgundy px-10 py-4 rounded-full text-lg font-medium hover:bg-gold transition-colors border border-gold/50">
                Order This Dish
              </a>
            </div>
            <p className="mt-8 text-3xl font-lobster text-gold">{slide.price}</p>
          </div>
        ))}

        <div className="relative mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(current - 1)}
            className="w-12 h-12 rounded-full border border-gold/60 text-gold flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
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
                    ? "w-10 h-2.5 rounded-full bg-gold transition-all"
                    : "w-2.5 h-2.5 rounded-full bg-cream/40 hover:bg-gold transition-all"
                }
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(current + 1)}
            className="w-12 h-12 rounded-full border border-gold/60 text-gold flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
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

function About() {
  const highlights = [
    { emoji: "🍽️", title: "Seasonal Cuisine", text: "Hand-picked ingredients from local farms, crafted into exceptional dishes." },
    { emoji: "🍷", title: "Curated Wine Cellar", text: "Over 300 bottles from the world's finest vineyards, perfectly paired." },
    { emoji: "👨‍🍳", title: "Award-Winning Chefs", text: "Our culinary team has been recognized for excellence for over two decades." },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-lobster text-cream mb-6">
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
              <div className="bg-burgundy border border-gold/40 rounded-2xl p-6 text-center">
                <p className="text-3xl font-lobster text-gold mb-1">27+</p>
                <p className="text-sm text-cream/80">Years of Excellence</p>
              </div>
              <div className="bg-burgundy border border-gold/40 rounded-2xl p-6 text-center">
                <p className="text-3xl font-lobster text-gold mb-1">45+</p>
                <p className="text-sm text-cream/80">Signature Dishes</p>
              </div>
              <div className="bg-burgundy border border-gold/40 rounded-2xl p-6 text-center">
                <p className="text-3xl font-lobster text-gold mb-1">150k+</p>
                <p className="text-sm text-cream/80">Guests Served</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl bg-cream text-7xl flex items-center justify-center border border-gold">
              🍝
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-burgundy text-7xl flex items-center justify-center mt-8 border border-gold">
              🥂
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gold text-7xl flex items-center justify-center -mt-4">
              🥩
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-terracotta text-7xl flex items-center justify-center mt-4">
              🍰
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.map((h, i) => (
            <div key={i} className="p-8 rounded-2xl bg-burgundy border border-gold/40 hover:shadow-xl hover:border-gold transition-all">
              <div className="text-4xl mb-4">{h.emoji}</div>
              <h3 className="text-xl font-lobster text-gold mb-3">{h.title}</h3>
              <p className="text-cream/75 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const categories = [
    {
      name: "Starters & Soups",
      icon: "🦪",
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
      icon: "🥩",
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
      icon: "🍰",
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
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-lobster text-cream mb-6">Classic French Cuisine</h2>
          <p className="text-xl text-cream/75 max-w-2xl mx-auto">
            Authentic Provençal recipes and French classics, crafted with the finest ingredients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-2xl bg-burgundy border border-gold/40 p-8">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-lobster text-gold mb-6">{cat.name}</h3>
              <div className="space-y-6">
                {cat.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="font-semibold text-cream">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-gold/40 mx-2"></div>
                      <span className="text-gold font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="bg-sage text-cream px-2.5 py-0.5 rounded-full text-xs border border-gold/30">
                        🌿 {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-cream/65 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#reserve" className="inline-block bg-burgundy border-2 border-gold text-cream px-8 py-3 rounded-full hover:bg-terracotta transition-colors">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    { emoji: "🕯️", title: "Intimate Ambiance", text: "Candlelit dining room with a warm, sophisticated atmosphere for every occasion." },
    { emoji: "🎻", title: "Live Music", text: "Enjoy elegant live piano and violin performances every Friday and Saturday evening." },
    { emoji: "🍾", title: "Private Dining", text: "Exclusive private rooms for celebrations, business dinners, and special events." },
    { emoji: "👑", title: "White Glove Service", text: "Impeccable, personalized service from our dedicated team from the moment you arrive." },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-wine">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">The Experience</p>
          <h2 className="text-4xl md:text-5xl font-lobster text-cream mb-6">More Than a Meal</h2>
          <p className="text-xl text-cream/75 max-w-2xl mx-auto">
            Every visit at THE CRESCENT is a journey worth remembering.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 mx-auto rounded-full bg-burgundy border-2 border-gold flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <h3 className="text-xl font-lobster text-gold mb-3">{item.title}</h3>
              <p className="text-cream/75 leading-relaxed">{item.text}</p>
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
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-5xl font-lobster text-cream mb-6">What Our Guests Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl bg-cream shadow-lg">
              <div className="flex gap-1 text-gold mb-6">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} className="text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-cocoa leading-relaxed mb-8 italic">&ldquo;{r.content}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-burgundy text-gold flex items-center justify-center font-bold font-lobster text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-cocoa">{r.name}</p>
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
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Reservations</p>
            <h2 className="text-4xl md:text-5xl font-lobster text-cream mb-6">Book Your Table</h2>
            <p className="text-xl text-cream/75 leading-relaxed mb-10">
              Join us for an evening of unforgettable dining. We recommend booking in advance
              to secure your preferred table and time.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-burgundy border border-gold/40 rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center text-xl border border-gold/50">📞</div>
                <div>
                  <p className="text-cream/60 text-sm">Phone</p>
                  <p className="text-lg font-medium text-cream">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-burgundy border border-gold/40 rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center text-xl border border-gold/50">📧</div>
                <div>
                  <p className="text-cream/60 text-sm">Email</p>
                  <p className="text-lg font-medium text-cream">reserve@thecrescent.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-burgundy border border-gold/40 rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center text-xl border border-gold/50">📍</div>
                <div>
                  <p className="text-cream/60 text-sm">Location</p>
                  <p className="text-lg font-medium text-cream">128 Crescent Avenue, Downtown</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-burgundy border border-gold/40 rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center text-xl border border-gold/50">🕐</div>
                <div>
                  <p className="text-cream/60 text-sm">Hours</p>
                  <p className="text-lg font-medium text-cream">Tue - Sun: 5:30 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-lobster text-burgundy mb-8 text-center">Make a Reservation</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-cocoa/70 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-full bg-cream border border-gold text-cocoa placeholder-cocoa/40 focus:border-burgundy focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-cocoa/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-full bg-cream border border-gold text-cocoa placeholder-cocoa/40 focus:border-burgundy focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-cocoa/70 text-sm mb-2">Guests</label>
                  <select className="w-full px-5 py-3 rounded-full bg-cream border border-gold text-cocoa focus:border-burgundy focus:outline-none transition-colors">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-cocoa/70 text-sm mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-5 py-3 rounded-full bg-cream border border-gold text-cocoa focus:border-burgundy focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-burgundy text-cream py-4 rounded-full font-medium hover:bg-terracotta transition-colors border border-gold/50">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8 bg-wine border-t border-gold/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-lobster text-gold mb-4 tracking-wide">THE CRESCENT</h3>
            <p className="text-cream/60">
              Fine dining at its finest since 1998. Crafting unforgettable experiences, one dish at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-4 tracking-wide uppercase text-sm">Hours</h4>
            <ul className="space-y-2 text-cream/60">
              <li>Mon: Closed</li>
              <li>Tue - Fri: 5:30 PM - 11:00 PM</li>
              <li>Sat - Sun: 12:00 PM - 11:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-2 text-cream/60">
              <li>128 Crescent Avenue, Downtown</li>
              <li>+1 (555) 123-4567</li>
              <li>reserve@thecrescent.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-4 tracking-wide uppercase text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-cream/70 hover:bg-burgundy hover:text-cream hover:border-gold transition-colors">
                <span className="font-medium">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-cream/70 hover:bg-burgundy hover:text-cream hover:border-gold transition-colors">
                <span className="font-medium">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-cream/70 hover:bg-burgundy hover:text-cream hover:border-gold transition-colors">
                <span className="font-medium">ig</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 text-center text-cream/50">
          <p>&copy; 2026 THE CRESCENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}