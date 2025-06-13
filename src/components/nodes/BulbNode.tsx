import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

const BulbNode = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div

      onClick={toggleBulb}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          {/* Bulb Glass */}
          <path
            d="M50,10 C30,10 20,30 20,50 C20,70 30,80 50,80 C70,80 80,70 80,50 C80,30 70,10 50,10 Z"
            fill={isOn ? '#FFD700' : '#E0E0E0'}
            stroke="#666"
            strokeWidth="2"
          />

          {/* Filament */}
          <path
            d="M50,30 C45,35 40,40 40,50 C40,60 45,65 50,70 C55,65 60,60 60,50 C60,40 55,35 50,30 Z"
            fill={isOn ? '#FFA500' : '#A0A0A0'}
            stroke={isOn ? '#FF4500' : '#808080'}
            strokeWidth="1"
          />

          {/* Base */}
          <rect x="40" y="80" width="20" height="10" fill="#666" />

          {/* Glow Effect */}
          {isOn && (
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>

        <style>
          {`
            @keyframes glow {
              0% { opacity: 0.3; }
              50% { opacity: 0.1; }
              100% { opacity: 0.3; }
            }
          `}
        </style>
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: '10px',
          color: '#2c3e50',
          fontWeight: 'bold',
          marginTop: '-5px',
        }}
      >
        {isOn ? 'BULB ON' : 'BULB OFF'}
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Left} style={{ border: 'none', background: '#2c3e50' }} />
      <Handle type="source" position={Position.Right} style={{ border: 'none', background: '#2c3e50' }} />
    </div>
  );
};

export default memo(BulbNode); 