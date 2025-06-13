import { memo, useState } from 'react';
import { Position } from '@xyflow/react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Terminal from '../handler/Terminal';

interface NodeProps {
  data: {
    status?: 'on' | 'off';
    label?: string;
  };
}

const SquareIndicatorNode = ({ data }: NodeProps) => {
  const [isGreen, setIsGreen] = useState(data.status === 'off');

  return (
    <>
      {data.label && (
        <Box sx={{ position: 'absolute', top: -15, left: 10, width: '100%' }}>
          <Typography
            variant="caption"
            sx={{
              fontSize: '8px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {data.label}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          background: 'transparent',
          border: 'none',
          p: 0,
          minWidth: 8,
          minHeight: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setIsGreen((g) => !g)}
        title="Toggle color"
      >
        <svg width="8" height="8" style={{ display: 'block' }}>
          <rect
            x="0"
            y="0"
            width="8"
            height="8"
            fill={isGreen ? '#00FF00' : '#FF0000'}
            stroke="#222"
            strokeWidth="0.5"
          />
        </svg>
        <Terminal type="source" id={"top"} position={Position.Top} style={{ left: 4, top: 2 }} />
        <Terminal type="source" id={"bottom"} position={Position.Bottom} style={{ left: 4, top: 1 }} />
        <Terminal type="source" id={"left"} position={Position.Left} style={{ left: 4, top: 4 }} />
        <Terminal type="source" id={"right"} position={Position.Right} style={{ left: 4, top: 1 }} />
      </Box>
    </>
  );
};

export default memo(SquareIndicatorNode); 