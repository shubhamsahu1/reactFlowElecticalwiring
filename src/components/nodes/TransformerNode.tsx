import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Node, NodeProps } from '@xyflow/react';

interface TransformerNodeData {
    label?: string;
    [key: string]: unknown; // For NodeProps compatibility
}

const TransformerNode = ({ data }: NodeProps<Node<TransformerNodeData>>) => {
    return (
        <Box
            sx={{
                background: 'transparent',
                border: 'none',
                p: 0,
                minWidth: 60,
                minHeight: 60,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
            }}
        >
            <Handle type="target" position={Position.Top} style={{ background: '#222' }} />
            <svg width="40" height="40" viewBox="0 0 100 100">
                {/* Transformer Coils */}
                <circle cx="30" cy="50" r="20" fill="none" stroke="#222" strokeWidth="4" />
                <circle cx="70" cy="50" r="20" fill="none" stroke="#222" strokeWidth="4" />
                {/* Core (optional, for simple symbol) */}
                <line x1="50" y1="30" x2="50" y2="70" stroke="#222" strokeWidth="2" />
            </svg>
            {data.label && (
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: '8px',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        color: '#222',
                        lineHeight: 1,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {data.label}
                </Typography>
            )}
            <Handle type="source" position={Position.Bottom} style={{ background: '#222' }} />
        </Box>
    );
};

export default memo(TransformerNode); 