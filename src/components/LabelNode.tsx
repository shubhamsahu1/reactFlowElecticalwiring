import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NodeProps {
    data: {
        label?: string;
    };
}

const LabelNode = ({ data }: NodeProps) => {
    return (
        <Box
            sx={{
                background: 'transparent',
                border: 'none',
                p: 0,
                width: "20px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                userSelect: 'none',
            }}
        >
            <Handle type="target" position={Position.Bottom} style={{ background: '#222' }} />
            <Typography
                variant="caption"
                sx={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: '#222',
                    lineHeight: 1,
                }}
            >
                {data.label}
            </Typography>
            {/* <Handle type="source" position={Position.Bottom} style={{ background: '#222' }} /> */}
        </Box>
    );
};

export default memo(LabelNode); 