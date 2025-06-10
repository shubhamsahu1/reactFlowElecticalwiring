import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

const CircuitBreakerNode = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleBreaker = () => setIsOn((v) => !v);

  return (
    <div
      style={{
        background: 'transparent',
        padding: '0',
        borderRadius: 0,
        minWidth: 40,
        minHeight: 40,
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none',
      }}
      onClick={toggleBreaker}
    >
      <div style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 10, marginBottom: -8 }}>Breaker</div>
      <svg width="40" height="30" viewBox="0 0 70 30">
        {/* Left line */}
        <line x1="5" y1="14" x2="25" y2="14" stroke="#222" strokeWidth="2" />
        {/* Movable switch segment */}
        {isOn ? (
          // Closed (connected)
          <line x1="25" y1="14" x2="45" y2="14" stroke="#222" strokeWidth="2" />
        ) : (
          // Open (disconnected)
          <line x1="25" y1="14" x2="45" y2="4" stroke="#222" strokeWidth="2" />
        )}
        {/* Right line */}
        <line x1="45" y1="14" x2="65" y2="14" stroke="#222" strokeWidth="2" />
      </svg>
      <Handle type="target" position={Position.Left} style={{ border: 'none' }} />
      <Handle type="source" position={Position.Right} style={{ border: 'none' }} />
    </div>
  );
};

export default memo(CircuitBreakerNode); 