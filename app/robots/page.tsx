'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const robots = [
  {
    name: 'MEGABYTE V-2',
    class: 'Heavyweight',
    weight: '75 kg',
    weapon: 'Vertical Spinner',
    speed: '22 km/h',
    power: '48V / 30A',
    image: '/images/robots.jpeg',
    description:
      'Our flagship heavyweight destroyer. MK-IV features a devastating 30kg titanium vertical spinner capable of launching opponents clean out of the arena. Battle-hardened through 40+ fights across Asia.',
    wins: 12,
    battles: 12,
  },
  {
    name: 'MEGABYTE V-1',
    class: 'Heavyweightt',
    weight: '65 kg',
    weapon: 'Horizontal Disc',
    speed: '28 km/h',
    power: '24V / 20A',
    image: '/images/competition.jpeg',
    description:
      'Lightning-fast and ruthless. Byte Fury uses a razor-edge horizontal disc to shred through armor plating. Its low profile makes it nearly impossible to flip, and it never stops attacking.',
    wins: 7,
    battles: 8,
  },
  {
    name: 'Papu Wehshi',
    class: 'Heavyweight',
    weight: '60 kg',
    weapon: 'Double Cutter Disc',
    speed: '32 km/h',
    power: '24V / 20A',
    image: '/images/awards.jpeg',
    description:
      'Small but absolutely lethal. Nano Stings undercutter blade sits millimeters off the ground, catching opponents before they can react. Precision-machined for maximum aggression in minimal size.',
    wins: 4,
    battles: 7,
  },
];

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function RobotsPage() {

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
          Our Machines
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight"
        >
          THE BOTS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]"
        >
          Every robot we build is a statement. Engineered for destruction, tested in battle,
          refined through fire. Meet the machines that carry our name into the arena.
        </motion.p>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* Robots List */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto space-y-24 md:space-y-40">
          {robots.map((robot, index) => (
            <motion.div
              key={robot.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center ${
                index % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? '[direction:ltr]' : ''}>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src={robot.image}
                    alt={robot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                    <span className="text-xs tracking-widest uppercase text-white">{robot.class}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-2 md:px-5 md:py-3 rounded-lg text-right">
                    <p className="text-2xl md:text-3xl font-bold">{robot.wins}<span className="text-gray-500 text-sm font-normal">/{robot.battles}</span></p>
                    <p className="text-xs text-gray-400 tracking-wider uppercase mt-0.5">Wins / Battles</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? '[direction:ltr]' : ''}>
                <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-3 md:mb-4">
                  {String(index + 1).padStart(2, '0')} / {String(robots.length).padStart(2, '0')}
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">{robot.name}</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">{robot.description}</p>

                {/* 3D Model Button */}
                <button
                  disabled
                  className="w-full flex items-center justify-between px-5 py-4 rounded-full border border-white/20 text-white/40 cursor-not-allowed mb-6 md:mb-8"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <span className="text-sm font-semibold tracking-wide">View 3D CAD Model</span>
                  </div>
                  <span className="text-xs tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full">Coming Soon</span>
                </button>

                {/* Specs List */}
                <div className="border-t border-gray-800">
                  {[
                    { label: 'Weight', value: robot.weight },
                    { label: 'Weapon', value: robot.weapon },
                    { label: 'Top Speed', value: robot.speed },
                    { label: 'Power', value: robot.power },
                  ].map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      custom={i}
                      variants={statVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex justify-between items-center py-4 md:py-5 border-b border-gray-800"
                    >
                      <span className="text-xs md:text-sm text-gray-500 tracking-widest uppercase">{spec.label}</span>
                      <span className="text-white font-semibold text-base md:text-lg">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 text-center border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-base md:text-lg mb-3 md:mb-4">Want to see them in action?</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 md:mb-10">Watch the battles unfold.</h2>
          <a
            href="/competitions"
            className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            View Competitions
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}