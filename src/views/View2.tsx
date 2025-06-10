import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Position,
} from '@xyflow/react';
import type { Node, Edge, Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box } from '@mui/material';
import { useCallback, useEffect } from 'react';
import SquareIndicatorNode from '../components/SquareIndicatorNode';

const nodeTypes = {
  squareIndicator: SquareIndicatorNode,
};

type CustomNode = Node<{
  label?: string;
  color?: boolean;
}>;

export default function View2() {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    setNodes([
      {
        id: '1',
        type: 'squareIndicator',
        data: { color: true },
        position: { x: 200, y: 50 },
        sourcePosition: Position.Bottom,
       },
      {
        id: '2',
        type: 'squareIndicator',
        data: { color: false },
        position: { x: 150, y: 150 },
        targetPosition: Position.Top,
       },
       {
        id: '3',
        type: 'squareIndicator',
        data: { color: true },
        position: { x: 250, y: 150 },
        targetPosition: Position.Top,
       },
    ]);
    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        type: 'smoothstep',
        animated: false,
      },
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        type: 'smoothstep',
        animated: false,
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  return (
    <Box sx={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        style={{ background: '#f5f5f5' }}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
} 