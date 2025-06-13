import { Handle, type HandleProps } from '@xyflow/react';
import { styled } from '@mui/material/styles';

// Styled version of the Handle with conditional offsets
const StyledHandle = styled(Handle)(() => ({
    width: 4,
    height: 4,
    background: 'transparent',
    border: 'none',
}));

export default function Terminal(props: HandleProps) {
    return <StyledHandle {...props} />;
} 