import { memo } from 'react';
import { Position } from '@xyflow/react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Terminal from '../handler/Terminal';

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
                maxWidth: "40px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                userSelect: 'none',
            }}
        >
            <Terminal type="target" position={Position.Bottom} id={"bottom"} />
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
            <Terminal type="target" position={Position.Top} id={"top"} />
            <Terminal type="target" position={Position.Left} id={"left"} />
            <Terminal type="target" position={Position.Right} id={"right"} />
        </Box>
    );
};

export default memo(LabelNode); 