import { memo, useState } from 'react';
import { Position } from '@xyflow/react';
import Terminal from '../handler/Terminal';
import nodeMeta from '../../data/nodeMeta.json';
import { Box, Typography } from '@mui/material';

interface CircuitBreakerNodeProps {
  data: {
    label?: string;
    rotation?: 'vertical' | 'horizontal';
    status?: 'on' | 'off';
  };
}

const circuitBreakerMeta = nodeMeta.CircuitBreaker;


const CircuitBreakerNode = ({ data }: CircuitBreakerNodeProps) => {
  const [isOn, setIsOn] = useState(data.status === 'on');
  const rotation = data.rotation || 'vertical';
  const isVertical = rotation === 'vertical';

  const toggleBreaker = () => setIsOn((v) => !v);

  // Get terminals from meta
  const terminals = circuitBreakerMeta.Terminal.values;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'transparent',
      }}
      onClick={toggleBreaker}
    >


      {data.label && (
        <Box sx={{ position: 'absolute', top: -8, left: isVertical ? 22 : -5 }}>
          <Typography
            variant="caption"
            sx={{
              fontSize: '8px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              whiteSpace: 'nowrap',
            }}
          >
            {data.label}
          </Typography>
        </Box>
      )}
      <Box sx={{ transform: isVertical ? 'rotate(-90deg)' : undefined }}>
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
        {/* Render terminals from JSON */}
        {terminals.map((t) => (
          <Terminal
            key={t.id}
            type={'source'}
            position={Position[t.position as keyof typeof Position]}
            id={t.id}
            style={t.styles}
          />
        ))}
      </Box>
    </Box>
  );
};

export default memo(CircuitBreakerNode); 