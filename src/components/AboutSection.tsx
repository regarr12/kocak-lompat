import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Cake, GraduationCap, Waves, Heart } from 'lucide-react';

const personalStories = [
  {
    id: 1,
    icon: <Cake className="w-8 h-8 text-primary" />,
    title: "Latar Belakang",
    description: "Saya lahir pada tanggal 11 Juli 2010. Sebagai individu yang lahir di pertengahan tahun, saya selalu membawa semangat baru dalam setiap langkah perjalanan hidup saya.",
    tag: "Kelahiran"
  },
  {
    id: 2,
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "Pendidikan",
    description: "Saat ini saya menempuh pendidikan di MAN 1 Banda Aceh, kelas X-4. Saya bertekad untuk rajin belajar demi mencapai masa depan yang indah dan membanggakan kedua orang tua.",
    tag: "Akademik"
  },
  {
    id: 3,
    icon: <Waves className="w-8 h-8 text-primary" />,
    title: "Hobi",
    description: "Berenang bukan sekadar aktivitas bagi saya, melainkan hobi yang sangat saya cintai. Olahraga ini mengajarkan saya ketenangan dan kedisiplinan.",
    tag: "Lifestyle"
  },
  {
    id: 4,
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Visi & Harapan",
    description: "Fokus utama saya adalah menjadi anak yang bisa diandalkan. Belajar dengan giat adalah kunci utama saya untuk membuka pintu kesuksesan di masa depan.",
    tag: "Masa Depan"
  },
];

export default function BiographyCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === personalStories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? personalStories.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative group">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass p-8 md:p-12 rounded-3xl shadow-card border border-white/20 min-h-[320px] flex flex-col justify-center items-center text-center"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl ring-1 ring-primary/20">
                {personalStories[index].icon}
              </div>
              
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                {personalStories[index].tag}
              </span>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {personalStories[index].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
                "{personalStories[index].description}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigasi */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all shadow-card"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {personalStories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-primary/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all shadow-card"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}