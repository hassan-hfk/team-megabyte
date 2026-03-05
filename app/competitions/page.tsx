'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const competitions = [
  {
    year: '2024',
    event: 'RoboWars Asia Championship',
    location: 'Kuala Lumpur, Malaysia',
    result: '1st Place',
    resultType: 'winner',
    robot: 'MEGABYTE MK-IV',
    image: '/images/competition.jpeg',
    description:
      'Our most dominant performance to date. MK-IV tore through 8 opponents in the bracket, with zero losses in the group stage. The final against Team Typhoon lasted just 47 seconds.',
  },
  {
    year: '2024',
    event: 'Pakistan RoboWar Open',
    location: 'Lahore, Pakistan',
    result: '1st Place',
    resultType: 'winner',
    robot: 'BYTE FURY + NANO STING',
    image: '/images/awards.jpeg',
    description:
      'A clean sweep in both featherweight and beetleweight categories. We brought two robots and both stood atop the podium at the end of the day.',
  },
  {
    year: '2023',
    event: 'RoboWar India Invitational',
    location: 'New Delhi, India',
    result: 'Finalist',
    resultType: 'finalist',
    robot: 'MEGABYTE MK-III',
    image: '/images/robots.jpeg',
    description:
      'A hard-fought campaign ended in the final when MK-III suffered a drive system failure in the last 30 seconds while leading. The crowd still chanted our name walking off.',
  },
  {
    year: '2023',
    event: 'NUST Engineering Fest',
    location: 'Islamabad, Pakistan',
    result: '1st Place',
    resultType: 'winner',
    robot: 'BYTE FURY',
    image: '/images/competition.jpeg',
    description:
      'Dominant from start to finish. Byte Fury was untouchable in the featherweight category, winning all 5 bouts by knockout with an average fight time of under 90 seconds.',
  },
  {
    year: '2022',
    event: 'LUMS Battle Bots',
    location: 'Lahore, Pakistan',
    result: '2nd Place',
    resultType: 'finalist',
    robot: 'MEGABYTE MK-III',
    image: '/images/awards.jpeg',
    description:
      'Our first major international-class event. A learning curve that hardened the team and revealed exactly what MK-III needed to become MK-IV. Every scar had a lesson.',
  },
];

// Group by year
const grouped = competitions.reduce<Record<string, typeof competitions>>((acc, comp) => {
  if (!acc[comp.year]) acc[comp.year] = [];
  acc[comp.year].push(comp);
  return acc;
}, {});

const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

export default function CompetitionsPage() {

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen px-6 md:px-8 flex flex-col justify-center items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4 md:mb-6"
        >
          Battle Record
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight"
        >
          ARENA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]"
        >
          Every competition is a test. Every arena is our classroom.
          Here's the full record of where Team Megabyte has fought, bled, and triumphed.
        </motion.p>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 border border-gray-800 divide-x divide-y md:divide-y-0 divide-gray-800"
          >
            {[
              { label: 'Competitions', value: '12+' },
              { label: 'Countries', value: '4' },
              { label: 'Total Wins', value: '39' },
              { label: 'Championships', value: '6' },
            ].map((stat) => (
              <div key={stat.label} className="px-4 md:px-10 py-6 md:py-8 text-center">
                <p className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">{stat.value}</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 md:py-16 px-6 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[1000px] mx-auto">
          {years.map((year, yi) => (
            <div key={year} className="flex gap-0 md:gap-12">

              {/* Left: year + vertical line */}
              <div className="hidden md:flex flex-col items-center w-20 shrink-0">
                {/* Dot at top of each year group */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-col items-center mt-1"
                >
                  <div className="w-4 h-4 rounded-full bg-white shrink-0" />
                </motion.div>
                {/* Line extending down through entire year block */}
                <div
                  className="w-px mt-2 shrink-0"
                  style={{
                    flex: 1,
                    background: yi === years.length - 1
                      ? 'linear-gradient(to bottom, #4b5563, transparent)'
                      : '#374151',
                  }}
                />
              </div>

              {/* Right: year label + entries */}
              <div className="flex-1 pb-20">
                {/* Year heading */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10"
                >
                  <span className="text-4xl md:text-6xl font-bold text-white">{year}</span>
                  <div className="flex-1 h-px bg-gray-800" />
                </motion.div>

                {/* Entries */}
                <div className="space-y-5">
                  {grouped[year].map((comp, ci) => (
                    <motion.div
                      key={comp.event}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: ci * 0.1 }}
                      className="group relative border border-gray-800 hover:border-white transition-all duration-500 overflow-hidden"
                    >
                      {/* Engraved background image via CSS */}
                      <div
                        className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700"
                        style={{
                          backgroundImage: `url(${comp.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'grayscale(100%) brightness(0.15) contrast(1.3)',
                        }}
                      />
                      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
                      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

                      {/* Content */}
                      <div className="relative z-10 p-6 md:p-10">
                        <div className="flex flex-wrap items-start justify-between gap-3 md:gap-4 mb-4 md:mb-5">
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-1 md:mb-2">
                              {comp.event}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm tracking-wider">{comp.location}</p>
                          </div>
                          <span
                            className={`shrink-0 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-full ${
                              comp.resultType === 'winner'
                                ? 'bg-white text-black'
                                : 'border border-gray-600 text-gray-400'
                            }`}
                          >
                            {comp.result}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8">{comp.description}</p>
                        <div className="pt-4 md:pt-5 border-t border-white/10 flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                          </svg>
                          <span className="text-xs text-gray-500 tracking-widest uppercase">{comp.robot}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 text-center border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">The next battle is coming.</h2>
          <p className="text-gray-500 text-lg mb-10">Stay updated on our upcoming competitions.</p>
          <a
            href="/sponsors"
            className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Support the Team
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}