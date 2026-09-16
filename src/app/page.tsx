"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-500 tracking-widest">
            THE CRESCENT
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-amber-400 transition-colors text-sm tracking-wide uppercase">
              About
            </a>
            <a href="#menu" className="text-white/80 hover:text-amber-400 transition-colors text-sm tracking-wide uppercase">
              Menu
            </a>
            <a href="#experience" className="text-white/80 hover:text-amber-400 transition-colors text-sm tracking-wide uppercase">
              Experience
            </a>
            <a href="#reviews" className="text-white/80 hover:text-amber-400 transition-colors text-sm tracking-wide uppercase">
              Reviews
            </a>
            <a href="#reserve" className="bg-amber-500 text-black px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors text-sm tracking-wide">
              Reserve a Table
            </a>
          </div>
          <button className="md:hidden text-amber-400">
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
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="40" r="35" fill="none" stroke="#f59e0b" strokeWidth="0.2" />
            <circle cx="50" cy="40" r="25" fill="none" stroke="#f59e0b" strokeWidth="0.15" />
            <circle cx="50" cy="40" r="15" fill="none" stroke="#f59e0b" strokeWidth="0.1" />
          </svg>
        </div>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-40">
        <p className="text-amber-500 font-light tracking-[0.4em] uppercase text-sm mb-8">
          Est. 1998 &middot; Fine Dining
        </p>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
          The Art of
          <br />
          <span className="text-amber-500 italic">Culinary Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          An unforgettable dining experience crafted with passion. From our kitchen to your table,
          every dish tells a story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#reserve" className="bg-amber-500 text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/25">
            Reserve Your Table
          </a>
          <a href="#menu" className="bg-white/10 text-white px-10 py-4 rounded-full text-lg font-medium border border-white/30 hover:bg-white/20 transition-colors backdrop-blur">
            Explore Our Menu
          </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">&#9733;</span>
            4.9/5 &middot; 2,400+ Reviews
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">&#9733;</span>
            &ldquo;Best Fine Dining 2025&rdquo;
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">&#9733;</span>
            Michelin Guide
          </div>
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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Where Tradition Meets Modern Gastronomy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since 1998, THE CRESCENT has been a sanctuary for food lovers. Nestled in the heart of the city,
              our restaurant combines classic culinary traditions with bold, contemporary flavors.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Every element — from the hand-crafted menu to the warm, intimate ambiance — is designed to create
              moments worth savoring.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-4xl font-serif text-amber-500 mb-2">27+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-amber-500 mb-2">45+</p>
                <p className="text-sm text-gray-600">Signature Dishes</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-amber-500 mb-2">150k+</p>
                <p className="text-sm text-gray-600">Guests Served</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center text-7xl">
              🍝
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-stone-800 to-stone-950 flex items-center justify-center text-7xl mt-8">
              🥂
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-rose-200 to-rose-400 flex items-center justify-center text-7xl -mt-4">
              🥩
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-7xl mt-4">
              🍰
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.map((h, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg hover:bg-white transition-all">
              <div className="text-4xl mb-4">{h.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{h.title}</h3>
              <p className="text-gray-600 leading-relaxed">{h.text}</p>
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
        { name: "Quiche Lorraine", desc: "Savory egg, cream and bacon tart", price: "₹2,550" },
        { name: "Croque Monsieur", desc: "Grilled ham and cheese sandwich", price: "₹2,600" },
        { name: "Escargots de Bourgogne", desc: "Snails with garlic-herb butter", price: "₹2,900" },
        { name: "Soupe à l'Oignon", desc: "French onion soup", price: "₹2,500" },
        { name: "Galette Bretonne", desc: "Savory buckwheat crêpe", price: "₹2,650" },
        { name: "Salade Niçoise", desc: "Niçoise salad with vegetables, tuna and egg", price: "₹2,750" },
      ],
    },
    {
      name: "Main Courses",
      icon: "🥩",
      items: [
        { name: "Coq au Vin", desc: "Chicken braised in wine", price: "₹2,850" },
        { name: "Bœuf Bourguignon", desc: "Beef stew cooked with red wine", price: "₹2,950" },
        { name: "Ratatouille", desc: "Stewed Mediterranean vegetables", price: "₹2,500" },
        { name: "Bouillabaisse", desc: "Traditional Provençal fish stew", price: "₹3,000" },
        { name: "Cassoulet", desc: "White beans with meat and sausage", price: "₹2,750" },
        { name: "Confit de Canard", desc: "Slow-cooked duck leg", price: "₹2,900" },
        { name: "Duck à l'Orange", desc: "Duck with orange sauce", price: "₹2,900" },
        { name: "Gratin Dauphinois", desc: "Creamy baked potatoes", price: "₹2,500" },
        { name: "Steak Frites", desc: "Steak served with French fries", price: "₹2,850" },
      ],
    },
    {
      name: "Desserts",
      icon: "🍰",
      items: [
        { name: "Crêpes", desc: "Thin French pancakes", price: "₹2,600" },
        { name: "Tarte Tatin", desc: "Upside-down caramelized apple tart", price: "₹2,700" },
        { name: "Croissant", desc: "Buttery, flaky pastry", price: "₹2,500" },
        { name: "Crème Brûlée", desc: "Baked custard with caramelized sugar", price: "₹2,800" },
        { name: "Chocolate Mousse", desc: "Light, rich chocolate dessert", price: "₹2,650" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Classic French Cuisine</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Authentic Provençal recipes and French classics, crafted with the finest ingredients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-2xl bg-white/[0.05] border border-white/10 p-8">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-serif text-amber-400 mb-6">{cat.name}</h3>
              <div className="space-y-6">
                {cat.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="font-medium text-white">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-white/20 mx-2"></div>
                      <span className="text-amber-400 font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-sm text-white/60 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#reserve" className="inline-block border-2 border-amber-500 text-amber-400 px-8 py-3 rounded-full hover:bg-amber-500 hover:text-black transition-colors">
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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase text-sm mb-4">The Experience</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">More Than a Meal</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every visit at THE CRESCENT is a journey worth remembering.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-amber-300 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
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
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-medium tracking-[0.3em] uppercase text-sm mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">What Our Guests Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex gap-1 text-amber-400 mb-6">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} className="text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 italic">&ldquo;{r.content}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-amber-400 flex items-center justify-center font-bold font-serif text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-600">{r.role}</p>
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
    <section id="reserve" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-4">Reservations</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Table</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Join us for an evening of unforgettable dining. We recommend booking in advance
              to secure your preferred table and time.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-xl">📞</div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <p className="text-lg font-medium text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-xl">📧</div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-lg font-medium text-white">reserve@thecrescent.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-lg font-medium text-white">128 Crescent Avenue, Downtown</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-xl">🕐</div>
                <div>
                  <p className="text-white/60 text-sm">Hours</p>
                  <p className="text-lg font-medium text-white">Tue - Sun: 5:30 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-amber-400 mb-8 text-center">Make a Reservation</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white/70 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Guests</label>
                  <select className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white focus:border-amber-400 focus:outline-none transition-colors">
                    <option className="bg-gray-900">1 Guest</option>
                    <option className="bg-gray-900">2 Guests</option>
                    <option className="bg-gray-900">3 Guests</option>
                    <option className="bg-gray-900">4 Guests</option>
                    <option className="bg-gray-900">5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-black py-4 rounded-full font-medium hover:bg-amber-400 transition-colors">
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
    <footer className="py-14 px-4 sm:px-6 lg:px-8 bg-black border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-4 tracking-widest">THE CRESCENT</h3>
            <p className="text-white/60">
              Fine dining at its finest since 1998. Crafting unforgettable experiences, one dish at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-sm">Hours</h4>
            <ul className="space-y-2 text-white/60">
              <li>Mon: Closed</li>
              <li>Tue - Fri: 5:30 PM - 11:00 PM</li>
              <li>Sat - Sun: 12:00 PM - 11:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-2 text-white/60">
              <li>128 Crescent Avenue, Downtown</li>
              <li>+1 (555) 123-4567</li>
              <li>reserve@thecrescent.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors">
                <span className="font-medium">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors">
                <span className="font-medium">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors">
                <span className="font-medium">ig</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; 2026 THE CRESCENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}