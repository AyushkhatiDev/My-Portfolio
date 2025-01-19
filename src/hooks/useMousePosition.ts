import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ docX: 0, docY: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ docX: e.clientX, docY: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
};