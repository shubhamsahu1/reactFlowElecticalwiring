import { memo } from 'react';
import { Position } from '@xyflow/react';
import { Box, Typography } from '@mui/material';
import Terminal from '../handler/Terminal';

interface FuseNodeProps {
    data: {
        label?: string;
        rotation?: 'vertical' | 'horizontal';
    };
}

const FuseNode = ({ data }: FuseNodeProps) => {
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
                <Box sx={{ position: 'absolute', top: isVertical ? -5 : -2, left: isVertical ? 14 : -2, width: '100%' }}>
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
            <Box sx={{
                position: 'relative',
                transform: isVertical ? undefined : 'rotate(-90deg)',
            }}>
                <svg
                    width={16}
                    height={40}
                    viewBox="0 0 16 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        display: 'block',
                    }}
                >
                    <line x1="8" y1="0" x2="8" y2="6" stroke="black" strokeWidth="1" />
                    <rect x="4" y="6" width="8" height="28" stroke="black" strokeWidth="1" fill="none" />
                    <line x1="4" y1="10" x2="12" y2="10" stroke="black" strokeWidth="1" />
                    <line x1="4" y1="30" x2="12" y2="30" stroke="black" strokeWidth="1" />
                    <line x1="8" y1="34" x2="8" y2="40" stroke="black" strokeWidth="1" />
                </svg>


                {isVertical ? (
                    <>
                        <Terminal type="source" position={Position.Top} id="top" style={{ left: 8, top: 3 }} />
                        <Terminal type="source" position={Position.Bottom} id="bottom" style={{ left: 8, bottom: 3 }} />
                    </>
                ) : (
                    <>
                        <Terminal type="source" position={Position.Left} id="top" style={{ top: 3, left: 8 }} />
                        <Terminal type="source" position={Position.Right} id="bottom" style={{ left: 3, top: 37 }} />
                    </>
                )}

            </Box>
        </Box>
    );
};

export default memo(FuseNode);
