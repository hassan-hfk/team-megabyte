'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation - INCREASED */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-8 !py-8 flex justify-between items-center">
          <div className="text-base font-semibold tracking-wider">TEAM MEGABYTE</div>
          <div className="flex gap-12 text-base">
            <a href="#robots" className="hover:text-gray-300 transition-colors tracking-tight">Our Robots</a>
            <a href="#team" className="hover:text-gray-300 transition-colors tracking-tight">Meet the Team</a>
            <a href="#team" className="hover:text-gray-300 transition-colors tracking-tight">Gallery</a>
            <a href="#team" className="hover:text-gray-300 transition-colors tracking-tight">Sponsers</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - DRAMATICALLY INCREASED */}
      <section className="!pt-48 !pb-32 px-8 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bold !mb-10 tracking-tight">
            TEAM MEGABYTE
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 !mt-8">
            Pakistan's RoboWar Combat Team
          </p>
        </motion.div>
      </section>

      {/* Introduction Text - GREATLY INCREASED */}
      <section className="!py-32 !px-8 flex justify-center">
        <div className="max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-normal leading-relaxed !mb-16">
              We are Pakistan's elite RoboWar combat robotics team – expert engineers, 
              fearless builders, and fierce competitors. Our bots are the toughest and 
              most innovative on the field.
            </h2>
            <p className="text-2xl md:text-3xl text-gray-400 font-light !mt-12">
              Forged in battle, driven by passion, united as Team Megabyte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Cards Section - MAJORLY INCREASED */}
      <section id="robots" className="!py-40 !px-8 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 !gap-20">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="w-full aspect-square relative overflow-hidden rounded-lg !mb-10">
                <Image
                  src="/images/competition.jpeg"
                  alt="International competitions"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold !mb-6">International competitions.</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Battle-tested at RoboWars in Asia and beyond, facing the world's 
                best teams and winning respect.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="w-full aspect-square relative overflow-hidden rounded-lg !mb-10">
                <Image
                  src="/images/awards.jpeg"
                  alt="Awards & achievements"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold !mb-6">Awards & achievements.</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Champion trophies, innovation awards, crowd favorite picks. Team 
                Megabyte's legacy grows with every battle.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="w-full aspect-square relative overflow-hidden rounded-lg !mb-10">
                <Image
                  src="/images/robots.jpeg"
                  alt="Robots built"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold !mb-6">Robots built.</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Multiple classes: heavyweight, featherweight, and beetleweight 
                machines, each engineered for maximum impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Gallery - SIGNIFICANTLY INCREASED */}
      <section className="!py-40 !px-8 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 !gap-12">
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
                <video
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src={`/videos/video${i}.mp4`} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section - MASSIVELY INCREASED */}
      <section id="team" className="!py-48 !px-8 flex justify-center">
        <div className="max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight !mb-12">
              Meet Megabyte: More Than Just Metal
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed !mt-10">
              Megabyte isn't just a machine, it's a relentless force, blending 
              cutting-edge engineering and unstoppable determination. Every circuit, 
              every gear, and every hit in the arena tells our story of innovation 
              and fearless competition. Watch the legend come alive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer - INCREASED */}
      <footer className="border-t border-gray-800 !py-12 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Team Megabyte. All rights reserved.
        </p>
      </footer>
    </div>
  );
}