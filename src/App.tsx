"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap, ArrowRight } from 'lucide-react';

const DrPepperSite = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#F2E7D5] min-h-screen font-sans selection:bg-[#711F25]">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black italic tracking-tighter text-[#711F25]">DR PEPPER</div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-[#711F25] transition-colors">Flavors</a>
          <a href="#" className="hover:text-[#711F25] transition-colors">Drops</a>
          <a href="#" className="hover:text-[#711F25] transition-colors">Story</a>
        </div>
        <button className="bg-[#711F25] p-2 rounded-full hover:scale-110 transition-transform">
          <ShoppingCart size={24} />
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Fizzy Background Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 bg-white/20 rounded-full"
              initial={{ y: 100, x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 500, opacity: 0 }}
              animate={{ y: -1000, opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
              style={{ width: Math.random() * 15, height: Math.random() * 15 }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-7xl md:text-[10rem] font-black italic leading-[0.8] uppercase mb-6">
            Not Your <br />
            <span className="text-[#711F25] drop-shadow-[0_0_15px_rgba(113,31,37,0.8)]">Average.</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold uppercase tracking-[0.3em] opacity-80">The 23 Flavor Masterpiece</p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-[#F2E7D5] text-black px-12 py-5 rounded-full font-black text-xl flex items-center gap-4 hover:shadow-[0_0_30px_rgba(242,231,213,0.3)] transition-all"
          >
            ORDER THE DROP <ArrowRight />
          </motion.button>
        </motion.div>
      </section>

      {/* --- PRODUCT SHOWCASE --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-black italic uppercase">The Lineup</h2>
          <span className="text-[#711F25] font-bold">VIEW ALL →</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Original", desc: "The OG 23 Flavor Blend", color: "#711F25" },
            { name: "Cherry", desc: "Dark & Smooth Ritual", color: "#4A0404" },
            { name: "Cream Soda", desc: "Velvet Smooth Finish", color: "#D2B48C" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-[#151515] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group"
            >
              <div className="h-64 mb-6 bg-gradient-to-b from-[#1a1a1a] to-transparent rounded-2xl flex items-center justify-center">
                 {/* Placeholder for Product Image */}
                <div className="w-24 h-48 bg-gray-800 rounded-lg animate-pulse" />
              </div>
              <h3 className="text-3xl font-black italic uppercase mb-2">{item.name}</h3>
              <p className="opacity-60 mb-6 font-medium">{item.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold italic">$2.99</span>
                <button className="bg-white text-black p-3 rounded-xl hover:bg-[#711F25] hover:text-white transition-colors">
                   <Zap size={20} fill="currentColor" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONVERSION FOOTER --- */}
      <section className="bg-[#711F25] py-20 px-6 text-center text-white">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Star className="mx-auto mb-6 fill-white" size={48} />
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6">Join the 23 Club</h2>
          <p className="text-xl mb-10 opacity-90 font-medium">Be the first to know about secret flavor drops and limited merch.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-black/20 border-2 border-white/30 rounded-full px-8 py-4 focus:outline-none focus:border-white text-white placeholder:text-white/50 font-bold"
            />
            <button className="bg-black text-white px-10 py-4 rounded-full font-black uppercase hover:scale-105 transition-transform">
              I'M IN
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DrPepperSite;
