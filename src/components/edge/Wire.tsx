import { EdgeLabelRenderer, type EdgeProps, type Edge, StepEdge } from '@xyflow/react';

type CustomEdgeData = Edge<{
  label?: string;
  color?: string;
}>;

export default function Wire(props: EdgeProps<CustomEdgeData>) {
  const { sourceX, sourceY, targetX, targetY, data: edgeData, animated } = props;

  return (
    <>
      <StepEdge {...props} style={{
        stroke: edgeData?.color,
        strokeWidth: 1,
        ...(animated && { strokeDasharray: '10 1' }),
      }} />

      {edgeData?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${(sourceX + targetX) / 2}px, ${(sourceY + targetY) / 2}px)`,
              fontSize: 10,
              background: '#fff',
              padding: '2px 4px',
              border: '1px solid #ccc',
              borderRadius: 3,
              pointerEvents: 'all',
            }}
          >
            {edgeData.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
