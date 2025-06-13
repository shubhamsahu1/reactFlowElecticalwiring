import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Position } from '@xyflow/react';
import Terminal from '../handler/Terminal';

interface InverterNodeProps {
    data: {
        label?: string;
        rotation?: 'vertical' | 'horizontal';
    };
}

const InverterNode = ({ data }: InverterNodeProps) => {
    const rotation = data.rotation || 'vertical';
    const isVertical = rotation === 'vertical';

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'transparent',
            }}
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

            <Box sx={{ transform: isVertical ? undefined : 'rotate(-90deg)' }}>
                <svg width={40} height={40} viewBox="0 0 40 40">
                    {/* Outer square */}
                    <rect x="8" y="8" width="24" height="24" stroke="black" strokeWidth="1" fill="none" />

                    {/* Diagonal */}
                    <line x1="32" y1="8" x2="8" y2="32" stroke="black" strokeWidth="1" />

                    {/* DC symbol: Two horizontal lines in top-left corner */}
                    <line x1="12" y1="14" x2="22" y2="14" stroke="black" strokeWidth="1" />
                    <line x1="12" y1="18" x2="18" y2="18" stroke="black" strokeWidth="1" />

                    {/* AC symbol: sine wave on bottom-right */}
                    <path d="M22 26 q2 -4 4 0 t4 0" stroke="black" strokeWidth="1" fill="none" />

                    {/* Terminals: vertical lines top and bottom */}
                    <line x1="20" y1="0" x2="20" y2="8" stroke="black" strokeWidth="1" />
                    <line x1="20" y1="32" x2="20" y2="40" stroke="black" strokeWidth="1" />
                </svg>


                {/* Terminals */}
                {isVertical ? (
                    <>
                        <Terminal type="source" position={Position.Top} id="top" style={{ left: 20, top: 3 }} />
                        <Terminal type="source" position={Position.Bottom} id="bottom" style={{ left: 20, bottom: 8 }} />
                    </>
                ) : (
                    <>
                        <Terminal type="source" position={Position.Left} id="left" style={{ top: 3, left: 20 }} />
                        <Terminal type="source" position={Position.Right} id="right" style={{ top: 37, right: 20 }} />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default memo(InverterNode);
