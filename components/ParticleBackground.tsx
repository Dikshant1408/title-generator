"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  size: number; opacity: number; color: string; life: number; maxLife: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fewer particles on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 30 : 60;
    // Valorant palette: red, off-white, light gray — reduced intensity
    const colors = ["#FF4655", "#FF6B7A", "#ECE8E1", "#B5B5B5", "#FF4655"];
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.05,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.07,  // reduced 30% from original
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 400 + 200,
    });

    for (let i = 0; i < COUNT; i++) particles.push(createParticle());

    let animId: number;
    let lastTime = 0;
    const FPS = isMobile ? 24 : 40;
    const INTERVAL = 1000 / FPS;

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);
      if (time - lastTime < INTERVAL) return;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life++;
        const lr = p.life / p.maxLife;
        const alpha = lr < 0.2 ? (lr / 0.2) * p.opacity : lr > 0.8 ? ((1 - lr) / 0.2) * p.opacity : p.opacity;
        const hex = Math.floor(alpha * 255).toString(16).padStart(2, "0");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + hex;
        ctx.fill();
        if (p.life >= p.maxLife || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles[i] = createParticle();
        }
      }
    };

    animId = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
