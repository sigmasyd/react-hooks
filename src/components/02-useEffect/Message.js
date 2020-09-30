import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    console.log('Componente montado');
    const mouseMove = (e) => {
      const coors = {
        x: e.x,
        y: e.y,
      };
      console.log(coors);
      setCoords(coors);
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      console.log('Componente desmontado');
    };
  }, []);
  return (
    <>
      <h3>Eres genial</h3>
      <p>
        x:{x} y:{y}
      </p>
    </>
  );
};
