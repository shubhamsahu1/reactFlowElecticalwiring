import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const ColorSelectorNode = ({ data }: { data: { color: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void } }) => {
  return (
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '10px', 
      borderRadius: '5px', 
      border: 'none',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      outline: 'none'
    }}>
      <Handle type="target" position={Position.Left} style={{ border: 'none', background: '#2c3e50' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Color:</label>
        <input type="color" onChange={data.onChange} defaultValue={data.color} />
      </div>
      <Handle type="source" position={Position.Right} style={{ border: 'none', background: '#2c3e50' }} />
    </div>
  );
};

export default memo(ColorSelectorNode); 