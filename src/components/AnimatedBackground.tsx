
import React, { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: "default" | "subtle" | "intense";
  className?: string;
}

export function AnimatedBackground({ 
  variant = "default",
  className = "" 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    const particleCount = variant === "intense" ? 100 : variant === "subtle" ? 30 : 50;
    const particleSize = variant === "intense" ? 2 : variant === "subtle" ? 1 : 1.5;
    const lineDistance = variant === "intense" ? 150 : variant === "subtle" ? 100 : 120;
    const particleSpeed = variant === "intense" ? 0.8 : variant === "subtle" ? 0.3 : 0.5;
    const mouseInfluenceRadius = variant === "intense" ? 200 : variant === "subtle" ? 100 : 150;
    
    const particles: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      originalSpeed: number;
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      let color;
      if (variant === "intense") {
        const hue = Math.floor(Math.random() * 60) + 240;
        color = `hsla(${hue}, 80%, 70%, 0.7)`;
      } else if (variant === "subtle") {
        color = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
      } else {
        const hue = Math.floor(Math.random() * 40) + 200;
        color = `hsla(${hue}, 70%, 60%, 0.5)`;
      }
      
      const speed = (Math.random() * 0.5 + 0.5) * particleSpeed;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed,
        size: Math.random() * particleSize + 0.5,
        color,
        originalSpeed: speed
      });
    }
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        if (variant !== "subtle") {
          const dx = mousePosition.current.x - p.x;
          const dy = mousePosition.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseInfluenceRadius) {
            const forceFactor = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
            p.dx -= (dx / distance) * forceFactor * 0.05;
            p.dy -= (dy / distance) * forceFactor * 0.05;
          } else {
            p.dx *= 0.98;
            p.dy *= 0.98;
            const currentSpeed = Math.sqrt(p.dx * p.dx + p.dy * p.dy);
            if (currentSpeed < p.originalSpeed) {
              p.dx += (Math.random() - 0.5) * 0.01;
              p.dy += (Math.random() - 0.5) * 0.01;
            }
          }
        }
        
        p.x += p.dx;
        p.y += p.dy;
        
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            const opacity = 1 - (distance / lineDistance);
            
            if (variant === "intense") {
              const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
              gradient.addColorStop(0, p.color.replace(/[^,]+(?=\))/, (match) => {
                return (parseFloat(match) * opacity).toString();
              }));
              gradient.addColorStop(1, p2.color.replace(/[^,]+(?=\))/, (match) => {
                return (parseFloat(match) * opacity).toString();
              }));
              ctx.strokeStyle = gradient;
            } else {
              if (variant === "subtle") {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
              } else {
                ctx.strokeStyle = `rgba(51, 195, 240, ${opacity * 0.3})`;
              }
            }
            
            ctx.lineWidth = Math.min(p.size, p2.size) / 3;
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [variant]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: variant === "subtle" ? 0.3 : variant === "intense" ? 0.8 : 0.5 }}
    />
  );
}
