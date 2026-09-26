import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      // Smoothness / delay
      cursorX.current += (mouseX.current - cursorX.current) * 0.35;
      cursorY.current += (mouseY.current - cursorY.current) * 0.35;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${cursorX.current}px,
            ${cursorY.current}px,
            0
          )
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-[9999]"
      style={{
        willChange: "transform",
      }}
    />
  );
}