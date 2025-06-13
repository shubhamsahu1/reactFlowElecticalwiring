import {
    ReactFlow,
    // MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    // addEdge,
    BackgroundVariant,
    MarkerType,
    ConnectionMode,
} from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import SquareIndicatorNode from '../components/nodes/SquareIndicatorNode';
import LabelNode from '../components/nodes/LabelNode';
import Wire from '../components/edge/Wire';
import FuseNode from '../components/nodes/FuseNode';
import ContractorNode from '../components/nodes/ContractorNode';
import InverterNode from '../components/nodes/InverterNode';

const nodeTypes = {
    squareIndicator: SquareIndicatorNode,
    labelNode: LabelNode,
    fuseNode: FuseNode,
    contractorNode: ContractorNode,
    inverterNode: InverterNode
};

type CustomNode = Node<{
    label?: string;
    status?: 'on' | 'off';
    rotation?: 'vertical' | 'horizontal';
}>;

const edgeTypes = {
    Wire: Wire,
};

export default function View2() {
    const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    useEffect(() => {
        setNodes([
            {
                id: '1',
                type: 'squareIndicator',
                data: { status: 'on', label: '52-F8' },
                position: { x: 200, y: 50 },
            },
            {
                id: '2',
                type: 'squareIndicator',
                data: { status: 'off', label: '52-F9' },
                position: { x: 150, y: 150 },
            },
            {
                id: '3',
                type: 'squareIndicator',
                data: { status: 'on', label: '52-F10' },
                position: { x: 250, y: 150 },
            },
            {
                id: '4',
                type: 'labelNode',
                data: { label: 'L39 400KW' },
                position: { x: 184, y: 5 },
            },
            {
                id: '5',
                type: 'fuseNode',
                data: { label: 'Fuse', rotation: 'vertical' },
                position: { x: 270, y: 190 },
            },
            {
                id: '6',
                type: 'contractorNode',
                data: { label: 'Contractor', rotation: 'vertical' },
                position: { x: 65, y: 197.5 },
            },
            {
                id: '7',
                type: 'inverterNode',
                data: { label: 'Inverter', rotation: 'vertical' },
                position: { x: 53, y: 120 },
            }
        ]);
        setEdges([
            {
                id: 'e1-2',
                source: '1',
                sourceHandle: 'bottom',
                target: '2',
                type: 'Wire',
                animated: true,
            },
            {
                id: 'e1-3',
                source: '1',
                target: '3',
                sourceHandle: 'bottom',
                type: 'Wire',
                animated: false,
            },
            {
                id: 'e1-4',
                source: '1',
                target: '4',
                sourceHandle: 'top',
                type: 'Wire',
                animated: false,
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                },
            },
            {
                id: 'e1-5',
                source: '3',
                target: '5',
                sourceHandle: 'bottom',
                targetHandle: 'top',
                type: 'Wire',
            },
            {
                id: 'e1-6',
                source: '2',
                target: '6',
                sourceHandle: 'bottom',
                targetHandle: 'bottom',
                type: 'Wire',
            },
            {
                id: 'e1-7',
                source: '6',
                target: '7',
                sourceHandle: 'top',
                targetHandle: 'bottom',
                type: 'Wire',
            }
        ]);
    }, []);

    const onConnect = () => {
        // Do nothing
    };
    console.log(nodes);
    return (
        <Box sx={{ width: '100%', height: '600px' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                style={{ background: '#f5f5f5' }}
                // nodesDraggable={false}
                // nodesConnectable={false}
                // elementsSelectable={false}
                connectionMode={ConnectionMode.Loose}
                fitView
            >
                <Controls />
                <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
            </ReactFlow>
        </Box>
    );
} 