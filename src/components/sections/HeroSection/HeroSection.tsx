import React, { useState } from 'react';
import { Phone, TrendingUp, Award, Activity, Zap, ShieldCheck } from 'lucide-react';
import { contactInfo } from '@data/contactInfo';
import { motion } from 'framer-motion';
import carbonPattern from '@assets/carbon-pattern.svg';
import { DiscussionModal } from '@components/common/DiscussionModal';

const metrics = [
  { value: '8+', label: 'лет опыта', icon: Activity },
  { value: '150+', label: 'кейсов', icon: Award },
  { value: '300%', label: 'рост трафика', icon: TrendingUp },
];

export const HeroSection: React.FC = () => {
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
      {/* 1. Mesh Gradients (Мягкие переливы) */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent-100/30 rounded-full blur-[100px]" />

      {/* 2. Технологическая сетка (Blueprint Grid) */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-small opacity-40 pointer-events-none" />

      <div className="container relative py-20 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Левая колонка: Контент */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-black uppercase tracking-widest mb-8 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-primary-500" />
                <span>Эффективное SEO продвижение</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black font-heading text-dark-950 mb-8 leading-[0.95] tracking-tighter">
                Частный <br />
                <span className="text-gradient-blue italic inline-block pr-4">SEO-эксперт</span>
              </h1>

              <p className="text-xl md:text-2xl text-dark-800 mb-12 max-w-2xl leading-relaxed font-medium">
                Превращаю поисковый трафик в <span className="text-primary-600 font-bold underline decoration-primary-200 underline-offset-4">стабильную прибыль</span>. Системная аналитика и техническая безупречность для вашего бизнеса.
              </p>

              {/* Метрики (Glassmorphism) */}
              <div className="flex flex-wrap gap-4 mb-12">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-dark-950 leading-none">{m.value}</div>
                      <div className="text-[10px] uppercase font-bold text-dark-500 tracking-wider mt-1">{m.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={() => setIsDiscussionOpen(true)}
                  className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-500 shadow-2xl shadow-primary-600/30 rounded-2xl text-lg font-bold transition-all hover:-translate-y-1 text-white"
                >
                  Обсудить проект
                </button>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-lg font-black text-dark-950 hover:text-primary-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full border-2 border-dark-100 flex items-center justify-center group-hover:border-primary-500 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Правая колонка: 3D Абстракция */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full aspect-square max-w-[500px]"
            >
              {/* Центральный объект (Сфера данных) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-500 to-accent-500 rounded-[4rem] shadow-[0_0_100px_rgba(0,112,243,0.3)] overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${carbonPattern})`, backgroundSize: '12px 12px' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-32 h-32 text-white/20" />
                  </div>
                  {/* Глянцевый блик */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>

              {/* Плавающие "Ноды" и Линии */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute glass-card p-4 rounded-2xl shadow-xl z-20 hidden md:block"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: i % 2 === 0 ? '80%' : '-5%',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    <div className="text-[10px] font-black uppercase tracking-widest text-dark-900">
                      {['Аналитика', 'Индекс', 'Позиция', 'Рост', 'Трафик'][i]}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Декоративный круг-орбита */}
              <div className="absolute inset-0 border-[1px] border-primary-200/30 rounded-full animate-[spin_20s_linear_infinite] scale-110 pointer-events-none" />
              <div className="absolute inset-0 border-[1px] border-dashed border-primary-300/20 rounded-full animate-[spin_30s_linear_infinite_reverse] scale-125 pointer-events-none" />

              {/* Плашка с результатами (Floating) */}
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-lg border border-primary-100 p-6 rounded-3xl shadow-2xl z-30 will-change-transform"
              >                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-dark-950">Top Rank</div>
                    <div className="text-[10px] font-bold text-dark-500 uppercase">Безопасное продвижение</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Модалка обсуждения проекта */}
      <DiscussionModal isOpen={isDiscussionOpen} onClose={() => setIsDiscussionOpen(false)} />
    </section>
  );
};
