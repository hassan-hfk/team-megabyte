'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sponsors = {
  platinum: [
    {
      name: 'TradeLink Industries',
      type: 'Manufacturing Partner',
      contribution: 'Precision CNC machining, raw materials supply, and in-kind fabrication support for all robot builds.',
      initials: 'TF',
      logo: '/images/sponsors/soul.png',
    },
  ],
  gold: [
    {
      name: 'Soul Industries',
      type: 'Electronics Sponsor',
      contribution: 'Motor controllers, LiPo battery packs, and drive electronics for every competition season.',
      initials: 'VE',
      logo: '/images/sponsors/soul.png',
    },
    {
      name: 'OGDCL',
      type: 'Materials Sponsor',
      contribution: 'HARDOX wear plate, titanium sheet stock, and specialty alloys used across all robot classes.',
      initials: 'SS',
      logo: '/images/sponsors/soul.png',
    },
  ],
  silver: [
    {
      name: 'RAPIDEV',
      type: 'Event Sponsor',
      contribution: 'Competition entry fees and travel support for RoboWars Asia events.',
      initials: 'AT',
      logo: '/images/sponsors/soul.png',
    },
    {
      name: 'Karachi Makers Hub',
      type: 'Workshop Sponsor',
      contribution: 'Workshop space, laser cutting access, and community support.',
      initials: 'KM',
      logo: '/images/sponsors/soul.png',
    },
    {
      name: 'BotBridge Foundation',
      type: 'Community Sponsor',
      contribution: 'Promoting STEM and robotics education across Pakistan — we proudly represent them.',
      initials: 'BB',
      logo: '/images/sponsors/soul.png',
    },
  ],
};

const perks = [
  {
    tier: 'Platinum',
    price: 'Custom',
    color: 'border-white text-white',
    bg: 'bg-white/5',
    benefits: [
      'Logo on all robots',
      'Full website feature',
      'Social media campaign',
      'Event photoshoots',
      'Video documentary feature',
      'Dedicated press release',
      'Priority contact & reports',
    ],
  },
  {
    tier: 'Gold',
    price: 'PKR 200,000+',
    color: 'border-yellow-500/60 text-yellow-500/80',
    bg: 'bg-yellow-500/5',
    benefits: [
      'Logo on robot chassis',
      'Website sponsor page',
      'Social media mentions',
      'Event photography',
      'Quarterly reports',
    ],
  },
  {
    tier: 'Silver',
    price: 'PKR 75,000+',
    color: 'border-gray-400/60 text-gray-400',
    bg: '',
    benefits: [
      'Logo on team banner',
      'Website listing',
      'Social media shoutout',
      'Event recognition',
    ],
  },
];

function SponsorLogo({ logo, initials, size = 'md' }: { logo: string; initials: string; size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'lg' ? 112 : size === 'md' ? 72 : 52;
  return (
    <div style={{
      width: dim, height: dim,
      borderRadius: 8,
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <img
        src={logo}
        alt={initials}
        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 8 }}
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = 'none';
          const p = t.parentElement!;
          p.innerHTML = `<span style="font-size:${size === 'lg' ? 28 : size === 'md' ? 20 : 14}px;font-weight:700;color:rgba(255,255,255,0.3);letter-spacing:0.05em">${initials}</span>`;
          p.style.alignItems = 'center';
          p.style.justifyContent = 'center';
        }}
      />
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: 'calc(100vh - 64px)', marginTop: '64px' }} className="px-6 md:px-8 flex flex-col justify-center items-center text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4 md:mb-6">
          Partners
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight">
          SPONSORS
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]">
          The machines don't build themselves and the fights don't fund themselves.
          These are the partners who make Team Megabyte possible.
        </motion.p>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Platinum */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 md:mb-24">
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-8 md:mb-12">Platinum Partners</p>
            {sponsors.platinum.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-white/20 p-6 md:p-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center hover:border-white/40 transition-colors duration-300">
                <SponsorLogo logo={s.logo} initials={s.initials} size="lg" />
                <div>
                  <div className="flex flex-wrap gap-4 items-center mb-3">
                    <h3 className="text-3xl font-bold">{s.name}</h3>
                    <span className="text-xs border border-white px-3 py-1 tracking-widest uppercase">Platinum</span>
                  </div>
                  <p className="text-gray-500 text-sm tracking-wider mb-4">{s.type}</p>
                  <p className="text-gray-300 leading-relaxed text-lg">{s.contribution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gold */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 md:mb-24">
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-8 md:mb-12">Gold Partners</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sponsors.gold.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="border border-yellow-500/20 p-8 hover:border-yellow-500/40 transition-colors duration-300 flex gap-6 items-start">
                  <SponsorLogo logo={s.logo} initials={s.initials} size="md" />
                  <div>
                    <div className="flex flex-wrap gap-3 items-center mb-2">
                      <h3 className="text-xl font-bold">{s.name}</h3>
                      <span className="text-xs border border-yellow-500/40 text-yellow-500/60 px-3 py-0.5 tracking-widest uppercase">Gold</span>
                    </div>
                    <p className="text-gray-500 text-xs tracking-wider mb-3">{s.type}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">{s.contribution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Silver */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-8 md:mb-12">Silver Partners</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sponsors.silver.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="border border-gray-700 p-6 hover:border-gray-500 transition-colors duration-300">
                  <div className="mb-5">
                    <SponsorLogo logo={s.logo} initials={s.initials} size="sm" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{s.name}</h3>
                  <p className="text-gray-600 text-xs tracking-wider mb-3">{s.type}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.contribution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* Sponsorship Tiers */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12 md:mb-20">
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4">Become a Partner</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">Support the mission.</h2>
            <p className="text-base md:text-xl text-gray-400 max-w-[700px] mx-auto leading-relaxed">
              Your brand on the machines that compete internationally. Your logo in arenas across Asia.
              Your name associated with Pakistan's best combat robotics team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {perks.map((tier, i) => (
              <motion.div key={tier.tier} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`border ${tier.color} p-8 ${tier.bg}`}>
                <p className="text-xs tracking-widest uppercase mb-2 opacity-60">{tier.tier}</p>
                <p className="text-2xl font-bold mb-8">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-gray-600 mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
            Ready to back a champion?
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-10">Let's talk about what partnership looks like for you.</p>
          <a href="mailto:sponsors@megabyte.pk"
            className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300">
            Contact Us
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}