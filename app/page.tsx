'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen px-6 md:px-8 flex flex-col justify-center items-center text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight"
        >
          TEAM MEGABYTE
        </motion.h1>

        {/* Subtitle + buttons — appear on load with delay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10"
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-10 md:mb-12">
            Pakistan's RoboWar Combat Team
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="/robots"
              className="bg-white text-black px-7 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Our Robots
            </Link>
            <Link
              href="/team"
              className="bg-white/10 text-white px-7 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro Text */}
      <section className="py-16 md:py-32 px-6 md:px-8 flex justify-center">
        <div className="max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-normal leading-relaxed mb-8 md:mb-16">
              We are Pakistan's elite RoboWar combat robotics team – expert engineers,
              fearless builders, and fierce competitors. Our bots are the toughest and
              most innovative on the field.
            </h2>
            <p className="text-lg sm:text-xl md:text-3xl text-gray-400 font-light">
              Forged in battle, driven by passion, united as Team Megabyte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Cards */}
      <section id="robots" className="py-16 md:py-40 px-6 md:px-8 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            {[
              { href: '/competitions', src: '/images/competition.jpeg', title: 'International competitions.', desc: "Battle-tested at RoboWars in Asia and beyond, facing the world's best teams and winning respect." },
              { href: '/awards', src: '/images/awards.jpeg', title: 'Awards & achievements.', desc: "Champion trophies, innovation awards, crowd favorite picks. Team Megabyte's legacy grows with every battle." },
              { href: '/robots', src: '/images/robots.jpeg', title: 'Robots built.', desc: 'Multiple classes: heavyweight, featherweight, and beetleweight machines, each engineered for maximum impact.' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <Link href={card.href}>
                  <div className="w-full aspect-square relative overflow-hidden rounded-lg mb-6 md:mb-10">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6">{card.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 md:py-40 px-6 md:px-8 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '310/540' }}
              >
                <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                  <source src={`/videos/video${i}.mp4`} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section id="team" className="py-24 md:py-48 px-6 md:px-8 flex justify-center">
        <div className="max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
              Meet Megabyte: More Than Just Metal
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed">
              Megabyte isn't just a machine, it's a relentless force, blending
              cutting-edge engineering and unstoppable determination. Every circuit,
              every gear, and every hit in the arena tells our story of innovation
              and fearless competition. Watch the legend come alive.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}