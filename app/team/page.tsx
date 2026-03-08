'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Hassan Khokhar',
    role: 'Team Captain & Founder',
    speciality: 'Mechanical Systems',
    bio: 'The brain behind the bots. Hassan leads design, fabrication, and strategy. Three years building combat robots, zero tolerance for losing.',
    image: '/images/team/khokar.jpg',
    initials: 'HK',
  },
  {
    name: 'Abdul Wahid',
    role: 'Electronics & Controls Lead',
    speciality: 'Embedded Systems',
    bio: 'Wahid makes the bots think fast and react faster. From ESCs to failsafes, every circuit on the machine has Wahids fingerprints on it.',
    image: '/images/team/wahid.jpg',
    initials: 'AW',
  },
  {
    name: 'Uzair Ahmed',
    role: 'Drive System Engineer',
    speciality: 'Motors & Gearboxes',
    bio: 'If the robot moves, Uzairs designed how. He obsesses over power curves, gear ratios, and torque vectors so opponents cant escape.',
    image: '/images/team/uzair.jpg',
    initials: 'UA',
  },
  {
    name: 'Hassan Farooq Khan',
    role: 'Software Engineer',
    speciality: 'Computer Vision / Robotics Software',
    bio: 'Hassan develops the intelligence behind Megabytes machines. He ensures our robots see, think, and react precisely during competitions.',
    image: '/images/team/hassan.jpg',
    initials: 'HF',
  },
  {
    name: 'Zain Chughtai',
    role: 'Strategy & Operations',
    speciality: 'Arena Strategy',
    bio: 'Zain reads opponents. He watches fights before they happen, identifies weaknesses, and dictates the game plan for every match.',
    image: '/images/team/zain.jpg',
    initials: 'ZC',
  },
  {
    name: 'Muhammad Haseeb Habib',
    role: 'Weapon Systems Engineer',
    speciality: 'Spinners & Actuators',
    bio: 'Responsible for everything that destroys. Haseeb engineers the weapons that have launched opponents out of arenas across Asia.',
    image: '/images/team/haseeb.jpg',
    initials: 'HH',
  },
  {
    name: 'Hamza Chughtai',
    role: 'CAD & Simulation',
    speciality: 'SolidWorks / FEA',
    bio: 'Before a single piece of metal is cut, Hamza has stress-tested it a hundred times in simulation. He\'s why Megabyte V-2 never breaks.',
    image: '/images/team/hamza.jpg',
    initials: 'HC',
  },
  {
    name: 'Malik Muhammad',
    role: 'Sales & Marketing',
    speciality: 'Partnerships / Client Relations',
    bio: 'Malik builds partnerships to presenting our robots to sponsors and events, he ensures our technology reaches the right people and opportunities.',
    image: '/images/team/malik.jpg',
    initials: 'MM',
  },
  {
    name: 'Ahmed Yar Babar',
    role: 'Social Media Manager',
    speciality: 'Content Strategy / Community Engagement',
    bio: 'Ahmed highlights our journey, behind-the-scenes robot builds and competitions. He manages our social presence and keeps the community engaged with every milestone.',
    image: '/images/team/rana.jpg',
    initials: 'AY',
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

function Avatar({ member }: { member: typeof teamMembers[0] }) {
  return (
    <div style={{
      width: 80, height: 80,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid rgba(255,255,255,0.1)',
      marginBottom: 20,
      flexShrink: 0,
      background: '#1a1a1a',
    }}>
      <img
        src={member.image}
        alt={member.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={(e) => {
          // Fallback to initials if image not found
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement!;
          parent.style.display = 'flex';
          parent.style.alignItems = 'center';
          parent.style.justifyContent = 'center';
          parent.innerHTML = `<span style="font-size:20px;font-weight:700;color:#9ca3af;letter-spacing:0.05em">${member.initials}</span>`;
        }}
      />
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: 'calc(100vh - 64px)', marginTop: '64px' }} className="px-6 md:px-8 flex flex-col justify-center items-center text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4 md:mb-6">
          The People
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight">
          THE TEAM
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]">
          Robots don't build themselves. Behind every machine is a team of engineers,
          designers, and competitors who refuse to settle for second place.
        </motion.p>
      </section>

      {/* Values */}
      <section className="py-8 md:py-16 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {values.map((v, i) => (
            <motion.div key={v.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-6 md:px-10 py-8 md:py-10">
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
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-10 md:mb-16">
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
                <Avatar member={member} />
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4 md:mb-6">Join Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">
              Think you belong in the arena?
            </h2>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-12">
              We're always looking for engineers, fabricators, and competitors who bring
              something different. Passion is the only prerequisite.
            </p>
            <a href="mailto:team@megabyte.pk"
              className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}