import { memo } from 'react';
import { Position } from '@xyflow/react';
import { Box, Typography } from '@mui/material';
import Terminal from '../handler/Terminal';

interface ContractorNodeProps {
    data: {
        label?: string;
        rotation?: 'vertical' | 'horizontal';
    };
}

const ContractorNode = ({ data }: ContractorNodeProps) => {
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
            <Box
                sx={{
                    position: 'relative',
                    transform: isVertical ? undefined : 'rotate(-90deg)',
                }}
            >
                <svg
                    width={16}
                    height={40}
                    viewBox="0 0 16 40"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                >
                    {/* Top vertical line */}
                    <line x1="8" y1="0" x2="8" y2="12" stroke="black" strokeWidth="1" />

                    {/* Upper horizontal line */}
                    <line x1="4" y1="12" x2="12" y2="12" stroke="black" strokeWidth="1" />

                    {/* Lower horizontal line */}
                    <line x1="4" y1="20" x2="12" y2="20" stroke="black" strokeWidth="1" />

                    {/* Bottom vertical line */}
                    <line x1="8" y1="20" x2="8" y2="32" stroke="black" strokeWidth="1" />
                </svg>

                {/* Handles */}
                {isVertical ? (
                    <>
                        <Terminal type="source" position={Position.Top} id="top" style={{ left: 8, top: 3 }} />
                        <Terminal type="source" position={Position.Bottom} id="bottom" style={{ left: 8, bottom: 11 }} />
                    </>
                ) : (
                    <>
                        <Terminal type="source" position={Position.Left} id="top" style={{ top: 3, left: 8 }} />
                        <Terminal type="source" position={Position.Right} id="bottom" style={{ left: 3, bottom: 8 }} />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default memo(ContractorNode);
