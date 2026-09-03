import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
}

export function DataCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Create pipeline nodes
    const nodeCount = Math.min(55, Math.floor((width * height) / 22000));
    const nodes: Node[] = [];
    const colors = ["#00f5ff", "#00d2b4", "#38bdf8", "#818cf8"];

    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 2 + 1.5;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with line threshold
      const maxDistance = 120;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Motion update
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce boundaries
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse interaction (elastic push)
        const dxMouse = mouse.x - nodeA.x;
        const dyMouse = mouse.y - nodeA.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          nodeA.x -= (dxMouse / distMouse) * force * 3;
          nodeA.y -= (dyMouse / distMouse) * force * 3;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();

            // Intermittent data packets traveling along edges
            if ((frame + i * 7 + j * 3) % 240 < 40) {
              const progress = ((frame + i * 7 + j * 3) % 40) / 40;
              const px = nodeA.x + (nodeB.x - nodeA.x) * progress;
              const py = nodeA.y + (nodeB.y - nodeA.y) * progress;
              ctx.beginPath();
              ctx.fillStyle = "rgba(0, 245, 255, 0.75)";
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Draw node
        const pulse = Math.sin(frame * 0.04 + nodeA.pulsePhase) * 0.6;
        ctx.beginPath();
        ctx.fillStyle = nodeA.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.2, nodeA.alpha + pulse * 0.2));
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius + (pulse > 0 ? pulse * 0.8 : 0), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
