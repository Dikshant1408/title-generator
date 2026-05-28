"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const colors = ["#a855f7", "#3b82f6", "#06b6d4", "#ec4899", "#8b5cf6"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.1,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 300 + 200,
    });

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push(createParticle());
    }

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio < 0.2
          ? (lifeRatio / 0.2) * p.opacity
          : lifeRatio > 0.8
          ? ((1 - lifeRatio) / 0.2) * p.opacity
          : p.opacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * 0.3 * 255).toString(16).padStart(2, "0");
        ctx.fill();

        if (p.life >= p.maxLife || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles[i] = createParticle();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
