'use client';

import { motion } from 'framer-motion';

const milestones = [
  { year: '2022', event: 'Team Founded',            sub: 'Born from passion for mechanical mayhem',      side: 'left'  },
  { year: '2023', event: 'First Competition',       sub: 'Stepped into the arena for the first time',   side: 'right' },
  { year: '2024', event: 'First Podium Finish',     sub: 'Blood, sweat and a trophy to show for it',    side: 'left'  },
  { year: '2024', event: 'Flagship Bot Deployed',   sub: 'MK-IV unleashed — nothing was the same',      side: 'right' },
  { year: '2025', event: 'Major Sponsor Onboarded', sub: 'Backing from industry to fuel the mission',   side: 'left'  },
  { year: '2025', event: 'International Debut',     sub: "Pakistan's flag raised on the global stage",  side: 'right' },
] as const;

export default function MilestoneTimeline() {
  return (
    <section className="py-16 md:py-32 px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-16 md:mb-24"
        >
          Milestones
        </motion.p>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block relative">

          {/* Center spine */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />

          <div className="space-y-8">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.side === 'left' ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className={`relative flex items-center ${item.side === 'right' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Card */}
                <div className="group relative w-[46%] border border-gray-700 hover:border-white transition-all duration-500 p-7 bg-black overflow-hidden cursor-default">
                  {/* Corner triangle accent */}
                  <div
                    className="absolute top-0 w-20 h-20 bg-white/5 group-hover:bg-white/10 transition-all duration-500"
                    style={{
                      [item.side === 'left' ? 'right' : 'left']: 0,
                      clipPath: item.side === 'left' ? 'polygon(100% 0,100% 100%,0 0)' : 'polygon(0 0,100% 0,0 100%)',
                    }}
                  />

                  {/* Year */}
                  <span className="text-[4rem] font-black leading-none block mb-3 text-white select-none">
                    {item.year}
                  </span>

                  {/* Event */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{item.event}</h3>

                  {/* Sub */}
                  <p className="text-white/70 text-sm leading-relaxed">{item.sub}</p>

                  {/* Index */}
                  <span
                    className="absolute top-5 text-xs text-gray-500 font-mono"
                    style={{ [item.side === 'left' ? 'right' : 'left']: 20 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Horizontal connector: card edge → spine dot */}
                {/* Line */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-white/60 to-white/10"
                  style={{
                    width: '4%',
                    [item.side === 'left' ? 'left' : 'right']: '46%',
                    transform: item.side === 'right' ? 'translateY(-50%) scaleX(-1)' : 'translateY(-50%)',
                  }}
                />

                {/* Spine dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white bg-black z-10 group"
                  style={{ left: '50%' }}
                >
                  <div className="w-full h-full rounded-full bg-white/0 group-hover:bg-white transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE vertical ── */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-6 border border-gray-700 p-5 bg-black"
            >
              <div className="absolute -left-[1.85rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white bg-black" />
              <span className="text-4xl font-black text-white leading-none block mb-2">{item.year}</span>
              <h3 className="text-lg font-bold text-white mb-1">{item.event}</h3>
              <p className="text-white/70 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}