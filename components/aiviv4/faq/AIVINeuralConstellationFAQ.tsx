'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from './faqData';
import { useNeuralCanvas } from '../hooks/useNeuralCanvas';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

// Node positions (percentage-based for responsive layout)
const nodePositions = [
  { x: 15, y: 20 },  // Top left
  { x: 35, y: 10 },  // Top center-left
  { x: 65, y: 15 },  // Top center-right
  { x: 85, y: 25 },  // Top right
  { x: 20, y: 50 },  // Middle left
  { x: 50, y: 45 },  // Center
  { x: 75, y: 55 },  // Middle right
  { x: 40, y: 75 },  // Bottom center
];

export default function AIVINeuralConstellationFAQ() {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { openDemoPopup } = useDemoPopup();

  // Use neural canvas hook
  useNeuralCanvas(canvasRef);

  const toggleNode = (index: number) => {
    setActiveNodeId(activeNodeId === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#f5f0e8] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Neural Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3]" />
            <span className="text-[13px] font-medium text-[#f84608] uppercase tracking-[0.2em]">
              FAQ
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#321ca3] to-[#f84608]" />
          </div>

          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-light text-[#0a0a0a] mb-6 leading-[1.08] tracking-[-0.03em]">
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.8]">
            Explore our knowledge constellation
          </p>
        </motion.div>

        {/* Desktop: Constellation View */}
        <div className="hidden md:block relative h-[800px]">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {faqs.map((_, fromIndex) => {
              // Connect each node to its neighbors
              const connections = [
                fromIndex < faqs.length - 1 ? fromIndex + 1 : null,
                fromIndex < faqs.length - 2 ? fromIndex + 2 : null,
              ].filter((idx) => idx !== null);

              return connections.map((toIndex) => {
                if (toIndex === null) return null;

                const from = nodePositions[fromIndex];
                const to = nodePositions[toIndex as number];

                const isActive =
                  activeNodeId === fromIndex || activeNodeId === toIndex;

                return (
                  <motion.line
                    key={`${fromIndex}-${toIndex}`}
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="url(#gradient)"
                    strokeWidth={isActive ? 2 : 1}
                    opacity={isActive ? 0.6 : 0.2}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: fromIndex * 0.1 }}
                  />
                );
              });
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b00ff" />
                <stop offset="100%" stopColor="#f84608" />
              </linearGradient>
            </defs>
          </svg>

          {/* Question Nodes */}
          {faqs.map((faq, index) => {
            const isActive = activeNodeId === index;
            const pos = nodePositions[index];

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 20 : 10,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <AnimatePresence mode="wait">
                  {!isActive ? (
                    // Collapsed Node
                    <motion.button
                      key="collapsed"
                      onClick={() => toggleNode(index)}
                      className="group relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Pulsing Border */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] opacity-30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Node Circle */}
                      <div className="relative w-24 h-24 rounded-full bg-white border-2 border-transparent bg-clip-padding flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] opacity-10 group-hover:opacity-20 transition-opacity" />
                        <span className="relative text-[32px] font-bold bg-gradient-to-br from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                          {index + 1}
                        </span>
                      </div>

                      {/* Tooltip on Hover */}
                      <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-[#0a0a0a] text-white text-[13px] px-4 py-2 rounded-lg shadow-xl">
                          <p className="font-medium leading-tight">{faq.question}</p>
                        </div>
                      </div>
                    </motion.button>
                  ) : (
                    // Expanded Card
                    <motion.div
                      key="expanded"
                      className="w-[400px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#e5e5e5]">
                        {/* Close Button */}
                        <button
                          onClick={() => setActiveNodeId(null)}
                          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>

                        {/* Badge */}
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[14px] font-semibold mb-4">
                          {index + 1}
                        </div>

                        {/* Question */}
                        <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-4 leading-[1.3]">
                          {faq.question}
                        </h3>

                        {/* Divider */}
                        <div className="h-[1px] bg-gradient-to-r from-[#f84608] to-[#321ca3] mb-4" />

                        {/* Answer */}
                        <p className="text-[15px] text-[#525252] leading-[1.8]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Stacked View with Parallax */}
        <div className="block md:hidden space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeNodeId === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#e5e5e5] shadow-xl'
                      : 'border-[#f0f0f0] hover:border-[#e5e5e5] hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleNode(index)}
                    className="w-full flex justify-between items-center gap-6 text-left p-6 group"
                  >
                    <span className="text-[16px] sm:text-[17px] leading-[1.5] flex-1 text-[#374151] group-hover:text-[#0a0a0a]">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#0a0a0a] text-white'
                          : 'bg-[#f5f5f5] text-[#737373]'
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-[1px] bg-[#f0f0f0] mb-4" />
                          <p className="text-[15px] leading-[1.8] text-[#525252]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-[15px] text-[#737373] mb-6">Still have questions?</p>
          <button
            onClick={openDemoPopup}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[16px] font-medium text-white bg-[#0a0a0a] hover:bg-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
          >
            <span>Talk to Our Team</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
