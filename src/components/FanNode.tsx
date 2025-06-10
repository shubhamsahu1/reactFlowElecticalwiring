import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

const FanNode = () => {
  const [isRunning, setIsRunning] = useState(true);

  const toggleFan = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '5px',
        borderRadius: '4px',
        position: 'relative',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={toggleFan}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <g
            style={{
              animation: isRunning ? 'rotate 1s linear infinite' : 'none',
              transformOrigin: '50% 50%',
            }}
          >
            {/* Blade 1 */}
            <path d="M50,10 L58,40 L50,50 L42,40 Z" fill="#3498db" />
            {/* Blade 2 */}
            <path d="M90,50 L60,58 L50,50 L60,42 Z" fill="#3498db" />
            {/* Blade 3 */}
            <path d="M50,90 L42,60 L50,50 L58,60 Z" fill="#3498db" />
            {/* Blade 4 */}
            <path d="M10,50 L40,42 L50,50 L40,58 Z" fill="#3498db" />
          </g>
          {/* Center hub */}
          <circle cx="50" cy="50" r="6" fill="#2c3e50" />
        </svg>

        <style>
          {`
            @keyframes rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
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
        {isRunning ? 'GEN ON' : 'GEN OFF'}
      </div>

      {/* Source Handle */}
      <Handle type="source" position={Position.Right} style={{ border: 'none', background: '#2c3e50' }} />
    </div>
  );
};

export default memo(FanNode);
