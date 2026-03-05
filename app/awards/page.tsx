'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredAwards = [
  {
    title: 'RoboWars Asia Champion',
    year: '2024',
    event: 'RoboWars Asia Championship',
    location: 'Kuala Lumpur, Malaysia',
    category: 'Heavyweight',
    description:
      'The biggest title in Asian combat robotics. MK-IV went undefeated through the entire bracket, defeating 8 opponents in 4 days to claim the championship.',
  },
  {
    title: 'Best Engineering Design',
    year: '2024',
    event: 'RoboWars Asia Championship',
    location: 'Kuala Lumpur, Malaysia',
    category: 'Innovation Award',
    description:
      'Awarded to the most technically sophisticated machine at the event. MK-IV\'s modular weapon system and active cooling impressed the judging panel.',
  },
  {
    title: 'Pakistan Open Champion',
    year: '2024',
    event: 'Pakistan RoboWar Open',
    location: 'Lahore, Pakistan',
    category: 'Featherweight + Beetleweight',
    description:
      'A double-category sweep. Byte Fury and Nano Sting both won their respective weight classes on the same day — a first in Team Megabyte history.',
  },
];

const otherAwards = [
  { title: 'Crowd Favorite Award',          year: '2024', event: 'Pakistan RoboWar Open'       },
  { title: 'India Invitational Finalist',   year: '2023', event: 'RoboWar India Invitational'  },
  { title: 'NUST Champion — Featherweight', year: '2023', event: 'NUST Engineering Fest'        },
  { title: 'Most Aggressive Bot',           year: '2023', event: 'NUST Engineering Fest'        },
  { title: 'LUMS Runner-Up',                year: '2022', event: 'LUMS Battle Bots'             },
  { title: 'Best Newcomer Team',            year: '2022', event: 'LUMS Battle Bots'             },
];

export default function AwardsPage() {

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
          Legacy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight"
        >
          HONOURS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]"
        >
          Every trophy, every title, every piece of recognition earned the hard way —
          through engineering, sacrifice, and performance under pressure.
        </motion.p>
      </section>

      {/* ── MAJOR CHAMPIONSHIPS ── */}
      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[1100px] mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-12"
          >
            Major Championships
          </motion.p>

          <div className="space-y-px">
            {featuredAwards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative border border-gray-800 hover:border-white transition-colors duration-500 p-6 md:p-12 overflow-hidden"
              >
                {/* Large faded index number — decorative background text */}
                <span
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-[10rem] font-bold leading-none select-none pointer-events-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
                  {/* Left content */}
                  <div>
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="text-xs tracking-widest uppercase bg-white text-black px-3 py-1 rounded-full font-semibold">
                        {award.year}
                      </span>
                      <span className="text-xs text-gray-500 tracking-wider">{award.category}</span>
                      <span className="text-gray-700">·</span>
                      <span className="text-xs text-gray-500 tracking-wider">{award.location}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3 leading-tight">
                      {award.title}
                    </h2>

                    {/* Event name */}
                    <p className="text-gray-500 text-sm tracking-wider mb-6">{award.event}</p>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed max-w-[620px]">{award.description}</p>
                  </div>

                  {/* Right: trophy icon */}
                  <div className="hidden md:flex items-center justify-center w-20 h-20 border border-gray-800 group-hover:border-white transition-colors duration-500 rounded-full shrink-0">
                    <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 01-8 0M12 11v5m-4 2h8M7 7H4a1 1 0 00-1 1v1a4 4 0 004 4h1M17 7h3a1 1 0 011 1v1a4 4 0 01-4 4h-1" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* ── ALL RECOGNITION ── */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-[1100px] mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-12"
          >
            All Recognition
          </motion.p>

          {/* Table-style rows */}
          <div className="border-t border-gray-800">
            {otherAwards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_auto_6rem] items-center gap-6 py-7 border-b border-gray-800 hover:border-white transition-colors duration-300 cursor-default"
              >
                {/* Index */}
                <span className="text-2xl font-bold text-gray-800 group-hover:text-gray-500 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title + event */}
                <div>
                  <p className="text-lg font-semibold group-hover:text-white transition-colors leading-snug">
                    {award.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{award.event}</p>
                </div>

                {/* Year — visible on md+ */}
                <span className="hidden md:block text-sm text-gray-600 tracking-widest group-hover:text-gray-400 transition-colors">
                  {award.year}
                </span>

                {/* Arrow — appears on hover */}
                <div className="flex justify-end">
                  <svg
                    className="w-4 h-4 text-gray-800 group-hover:text-white -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNT CALLOUT ── */}
      <section className="py-20 md:py-32 px-6 md:px-8 text-center border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-6">And counting</p>
          <h2 className="text-8xl sm:text-9xl md:text-[12rem] font-bold tracking-tight leading-none mb-6 text-white">
            {featuredAwards.length + otherAwards.length}
          </h2>
          <p className="text-gray-500 text-xl">Total honours earned since 2022.</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}