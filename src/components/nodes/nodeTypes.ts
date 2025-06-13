import SquareIndicatorNode from './SquareIndicatorNode';
import LabelNode from './LabelNode';
import FuseNode from './FuseNode';
import ContractorNode from './ContractorNode';
import InverterNode from './InverterNode';
import BulbNode from './BulbNode';
import TransformerNode from './TransformerNode';
import ResistorNode from './ResistorNode';
import CircuitBreakerNode from './CircuitBreakerNode';
import FanNode from './FanNode';
import ColorSelectorNode from './ColorSelectorNode';

const nodeTypes = {
  squareIndicator: SquareIndicatorNode,
  labelNode: LabelNode,
  fuseNode: FuseNode,
  contractorNode: ContractorNode,
  inverterNode: InverterNode,
  bulbNode: BulbNode,
  transformerNode: TransformerNode,
  resistorNode: ResistorNode,
  circuitBreakerNode: CircuitBreakerNode,
  fanNode: FanNode,
  colorSelectorNode: ColorSelectorNode,
};

export default nodeTypes; 