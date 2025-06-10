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
import ColorSelectorNode from '../components/ColorSelectorNode';
import FanNode from '../components/FanNode';
import BulbNode from '../components/BulbNode';
import CircuitBreakerNode from '../components/CircuitBreakerNode';
import ResistorNode from '../components/ResistorNode';

const nodeTypes = {
  selectorNode: ColorSelectorNode,
  fanNode: FanNode,
  bulbNode: BulbNode,
  breakerNode: CircuitBreakerNode,
  resistorNode: ResistorNode,
};

const initBgColor = '#c9f1dd';

type CustomNode = Node<{
  label?: string;
  color?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRunning?: boolean;
  isOn?: boolean;
}>;

export default function View1() {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    setNodes([
      {
        id: '1',
        type: 'fanNode',
        data: { label: 'Generator', isRunning: true },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '2',
        type: 'resistorNode',
        data: { label: 'Resistor', isOn: true },
        position: { x: 100, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '3',
        type: 'breakerNode',
        data: { label: 'Main Breaker', isOn: true },
        position: { x: 200, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '4',
        type: 'bulbNode',
        data: { label: 'Light 1', isOn: true },
        position: { x: 400, y: 25 },
        targetPosition: Position.Left,
      },
      {
        id: '5',
        type: 'bulbNode',
        data: { label: 'Light 2', isOn: true },
        position: { x: 400, y: 95 },
        targetPosition: Position.Left,
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
        source: '2',
        target: '3',
        type: 'smoothstep',
        animated: false,
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        type: 'smoothstep',
        animated: false,
      },
      {
        id: 'e2-5',
        source: '3',
        target: '5',
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
        style={{ background: initBgColor }}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
} 