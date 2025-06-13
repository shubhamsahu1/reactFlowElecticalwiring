import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const ResistorNode = () => (
  <div
    style={{
      background: 'transparent',
      border: 'none',
      padding: 0,
      minWidth: 40,
      minHeight: 30,
      textAlign: 'center',
      userSelect: 'none',
      cursor: 'pointer',
    }}
  >
    <svg width="40" height="30" viewBox="0 0 70 30">
      {/* Left line */}
      <line x1="5" y1="18" x2="20" y2="18" stroke="#222" strokeWidth="2" />
      {/* Zigzag for resistor */}
      <polyline
        points="20,18 25,8 30,28 35,8 40,28 45,8 50,18"
        fill="none"
        stroke="#222"
        strokeWidth="2"
      />
      {/* Right line */}
      <line x1="50" y1="18" x2="65" y2="18" stroke="#222" strokeWidth="2" />
    </svg>
    <Handle type="target" position={Position.Left} style={{ border: 'none', background: '#222' }} />
    <Handle type="source" position={Position.Right} style={{ border: 'none', background: '#222' }} />
  </div>
);

export default memo(ResistorNode); 