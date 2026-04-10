import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern yang ada di HP bisa digunakan untuk belanja online.',
    tags: ['Shopee', 'Lazada', 'TikTok Shop', 'Tokopedia'],
    image: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management Platfom',
    description: 'Platform pembelajaran online yang mempermudah kamu dalam belajar.',
    tags: ['Duolingo', 'Ruang Guru', 'Zenius', 'Quipper'],
    image: '📚',
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Platform',
    description: 'Platform yang sangat berguna untuk bersosial media dan sharing-sharing',
    tags: ['WhatsApp', 'TikTok', 'Instagram', 'Facebook'],
    image: '📊',
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Platform',
    description: 'Situs atau APK berbasis AI untuk mempermudah mencari informasi.',
    tags: ['ChatGPT', 'Gemini', 'Meta AI', 'Google'],
    image: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Video tutorial yang sudah tersebar di banyak platform yang dapat mempermudah pengerjaan suatu tugas.',
    tags: ['TikTok', 'Instagram', 'YouTube'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips @ tricks dalam membuat coding atau melakukakan progaming.',
    tags: ['Instagram', 'TikTok', 'YouTube'],
    image: '💡',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
  },
];

function ProjectCard({ project }) {
  // Mengatur nilai posisi mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Menambahkan efek spring agar gerakan lebih halus (tidak kaku)
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transformasi untuk rotasi kartu (Tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Transformasi untuk gerakan gambar (Parallax)
  // Gambar akan bergerak sedikit berlawanan arah untuk efek kedalaman
  const translateXImage = useTransform(mouseXSpring, [-0.5, 0.5], ["25px", "-25px"]);
  const translateYImage = useTransform(mouseYSpring, [-0.5, 0.5], ["25px", "-25px"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative h-full"
    >
      <div 
        className="h-full p-6 glass rounded-3xl shadow-card border border-border/40 transition-all duration-500 group hover:border-primary/50"
        style={{ transform: "translateZ(30px)" }} 
      >
        {/* Container Gambar/Emoji */}
        <div className={`aspect-video rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${project.color} overflow-hidden relative shadow-inner`}>
          
          {/* Gambar/Emoji yang Bergerak (Parallax) */}
          <motion.span 
            style={{ 
              x: translateXImage, 
              y: translateYImage, 
              zIndex: 20,
              transformStyle: "preserve-3d",
              translateZ: "60px" // Membuat emoji terasa lebih depan dari background-nya
            }}
            className="text-7xl filter drop-shadow-2xl select-none"
          >
            {project.image}
          </motion.span>

          {/* Animasi Cahaya Berpendar di Background Emoji */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-white/10 blur-2xl rounded-full"
          />
        </div>

        {/* Konten Teks */}
        <div className="space-y-4" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center gap-2">
            {project.isContent && (
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/20 text-primary font-bold animate-pulse">
                CONTENT
              </span>
            )}
            <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-[11px] rounded-md bg-secondary text-secondary-foreground border border-border/50">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {project.github && (
              <Button variant="outline" size="sm" className="rounded-xl border-primary/20 hover:bg-primary/10" asChild>
                <a href={project.github}><Github className="h-4 w-4 mr-2" /> Code</a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" className="rounded-xl bg-primary hover:opacity-90 shadow-lg shadow-primary/30" asChild>
                <a href={project.demo}><ExternalLink className="h-4 w-4 mr-2" /> Demo</a>
              </Button>
            )}
            {project.youtube && (
              <Button size="sm" className="rounded-xl bg-red-600 hover:bg-red-700 text-white" asChild>
                <a href={project.youtube}><Play className="h-4 w-4 mr-2 fill-current" /> Watch</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 overflow-hidden relative">
      {/* Dekorasi Partikel Latar Belakang */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Proyek Unggulan</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}