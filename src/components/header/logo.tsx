import React from 'react';

interface CircleProps {
    radius:number;
    color:string;
}
const Logo:React.FC<CircleProps> = ({ radius, color }) => {
  const circleStyle = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: '50%',
    border: '1px solid #fFFFFF'
  };


  return (
    <div style={circleStyle} className={`absolute top-[150px] shadow-xl cursor-pointer ${color} transition transform ease-in-out duration-1000 hover:scale-105`}>
        <img src="./git-game-6.png" alt="Descripción de la imagen" style={circleStyle} className="w-full h-full object-cover bg-transparent" />
    </div>
  );
};

export default Logo;