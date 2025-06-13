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
import nodeTypes from '../components/nodes/nodeTypes';
import edgeTypes from '../components/edge/edgeTypes';
import initialFlow from '../data/initialFlow.json';


type CustomNode = Node<{
    label?: string;
    status?: 'on' | 'off' | undefined;
    rotation?: 'vertical' | 'horizontal' | undefined;
}>;


export default function View2() {
    const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>(initialFlow.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialFlow.edges);



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