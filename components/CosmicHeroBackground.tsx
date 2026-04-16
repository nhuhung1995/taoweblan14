"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  hue: number;
};

export default function CosmicHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const particleCount = 90;

    const resize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight * 0.95, 760);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.4 + 0.6,
        speedX: Math.random() * 0.36 - 0.18,
        speedY: Math.random() * 0.36 - 0.18,
        alpha: Math.random() * 0.45 + 0.2,
        hue: Math.random() > 0.5 ? 28 : 342,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const { x: mouseX, y: mouseY, active } = mouseRef.current;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;
        if (p.y > height + 10) p.y = -10;
        if (p.y < -10) p.y = height + 10;

        if (active) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 140) {
            p.x -= dx / 65;
            p.y -= dy / 65;
          }
        }

        const color = `hsla(${p.hue}, 95%, 68%, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = color;
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      const offsetX = active ? (mouseX - width / 2) * 0.012 : 0;
      const offsetY = active ? (mouseY - height / 2) * 0.012 : 0;
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.08) translate(${offsetX}px, ${offsetY}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${offsetX * 2.2}px, ${offsetY * 2.2}px)`;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY, active: true };
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{ backgroundImage: "url('/cosmic-hero-v7.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,7,14,0.38),rgba(22,9,16,0.68)_48%,rgba(18,8,17,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,191,120,0.22),transparent_18%),radial-gradient(circle_at_14%_18%,rgba(255,125,70,0.16),transparent_22%),radial-gradient(circle_at_86%_16%,rgba(247,110,82,0.12),transparent_20%)]" />
      <div
        ref={glowRef}
        className="absolute bottom-[21%] right-[12%] h-48 w-48 rounded-full bg-[#ff8d42]/24 blur-[90px] transition-transform duration-300 ease-out"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,4,6,0.62),rgba(9,4,6,0.18),transparent)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
    </div>
  );
}
