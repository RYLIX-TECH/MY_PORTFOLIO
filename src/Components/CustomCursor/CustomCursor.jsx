import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 5, y: 10 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
