'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Hassan Farooq',
    role: 'Team Captain & Lead Engineer',
    speciality: 'Mechanical Systems',
    bio: 'The brain behind the bots. Hassan leads design, fabrication, and strategy. Three years building combat robots, zero tolerance for losing.',
    initials: 'HF',
  },
  {
    name: 'Ali Raza',
    role: 'Electronics & Controls Lead',
    speciality: 'Embedded Systems',
    bio: 'Ali makes the bots think fast and react faster. From ESCs to failsafes, every circuit on the machine has Alis fingerprints on it.',
    initials: 'AR',
  },
  {
    name: 'Zainab Malik',
    role: 'Structural Design',
    speciality: 'Materials & Fabrication',
    bio: 'Zainab chooses what the bots are made of. HARDOX, UHMWPE, titanium — she knows when to use each and exactly how to machine it.',
    initials: 'ZM',
  },
  {
    name: 'Usman Khan',
    role: 'Drive System Engineer',
    speciality: 'Motors & Gearboxes',
    bio: 'If the robot moves, Usman designed how. He obsesses over power curves, gear ratios, and torque vectors so opponents cant escape.',
    initials: 'UK',
  },
  {
    name: 'Fatima Siddiqui',
    role: 'Strategy & Operations',
    speciality: 'Arena Strategy',
    bio: 'Fatima reads opponents. She watches fights before they happen, identifies weaknesses, and dictates the game plan for every match.',
    initials: 'FS',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Weapon Systems Engineer',
    speciality: 'Spinners & Actuators',
    bio: 'Responsible for everything that destroys. Bilal engineers the weapons that have launched opponents out of arenas across Asia.',
    initials: 'BA',
  },
  {
    name: 'Mariam Tariq',
    role: 'CAD & Simulation',
    speciality: 'SolidWorks / FEA',
    bio: 'Before a single piece of metal is cut, Mariam has stress-tested it a hundred times in simulation. Shes why MK-IV never breaks.',
    initials: 'MT',
  },
  {
    name: 'Omar Riaz',
    role: 'Software & Telemetry',
    speciality: 'Firmware / Data',
    bio: 'Omar writes the firmware and collects fight data. He turns battle recordings into actionable engineering improvements between rounds.',
    initials: 'OR',
  },
];

const values = [
  {
    number: '01',
    title: 'Build Better',
    desc: 'Every iteration teaches us something. We never stop improving the machines — or ourselves.',
  },
  {
    number: '02',
    title: 'Fight Smarter',
    desc: 'Brute force is nothing without strategy. We study, plan, and adapt in real-time.',
  },
  {
    number: '03',
    title: 'Represent Pakistan',
    desc: 'We carry the flag into every arena. Everything we do reflects our country on the world stage.',
  },
];

export default function TeamPage() {

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
          The People
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight"
        >
          THE TEAM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]"
        >
          Robots don't build themselves. Behind every machine is a team of engineers,
          designers, and competitors who refuse to settle for second place.
        </motion.p>
      </section>

      {/* Values */}
      <section className="py-8 md:py-16 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-6 md:px-10 py-8 md:py-10"
            >
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-5">{v.number}</p>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{v.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* Team Grid */}
      <section className="pb-20 md:pb-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-10 md:mb-16"
          >
            Members
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-black p-6 md:p-8 group hover:bg-gray-900 transition-colors duration-300 flex flex-col"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-800 group-hover:bg-gray-700 transition-colors rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <span className="text-base md:text-lg font-bold tracking-wider text-gray-300">{member.initials}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">{member.speciality}</p>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 md:mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 border-t border-gray-800">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4 md:mb-6">Join Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">
              Think you belong in the arena?
            </h2>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-12">
              We're always looking for engineers, fabricators, and competitors who bring 
              something different. Passion is the only prerequisite.
            </p>
            <a
              href="mailto:team@megabyte.pk"
              className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}