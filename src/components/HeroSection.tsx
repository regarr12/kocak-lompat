import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-xl opacity-50"></div>

      {/* Image */}
      <motion.img
        src="/fotoaku.jpg"
        alt="Profile"
        className="relative w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
        whileHover={{ scale: 1.05 }}
      />

      {/* Badge */}
      <span className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 🔥 GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ✅ FOTO KIRI */}
          <ProfilePhoto />

          {/* ✅ TEKS KANAN */}
          <div className="text-center md:text-left">
            
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              👋 Welcome To My Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Hi I'M
              <br />
              <span className="text-gradient">Fashil Asqar Siregar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Saya adalah murid dari MAN 1 Banda Aceh yang sedang belajar di
              kelas X-4, izinkan saya mempersembahkan portofolio saya
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
            >
              <Button 
                size="lg"
                className="rounded-full px-8 shadow-glow"
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="https://github.com/regarr12/kocak-lompat.git"
                target="_blank"
                className="p-3 rounded-full glass hover:shadow-glow"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}