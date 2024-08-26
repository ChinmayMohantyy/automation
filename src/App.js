import React, { useRef, useCallback, useState } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import Sidebar from './component/Sidebar';
import { DnDProvider, useDnD } from './component/DnDContext';
import '@xyflow/react/dist/style.css';
import './index.css';
import { Box, Button, TextField } from '@mui/material';
import CustomNode from './component/CustomNode';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Upload Node', cond: 'Upload Node' },
    position: { x: 250, y: 0 },
    style: {
      width: 60, // Adjust the width
      height: 40, // Adjust the height to be equal to width for a round shape
      backgroundColor: '#fff',
      fontSize: '10px', // Adjust the font size
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4px', // Add padding for some spacing around the text
      borderRadius: '50%', // Make the element round
    }
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'DocuTranscribe Node', cond: 'DocuTranscribe Node' },
    position: { x: 100, y: 100 },
    style: {
      width: 60, // Adjust the width
      height: 40, // Adjust the height to be equal to width for a round shape
      backgroundColor: '#fff',
      fontSize: '10px', // Adjust the font size
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4px', // Add padding for some spacing around the text
      borderRadius: '50%', // Make the element round
    }
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'Export Node', cond: 'Export Node' },
    position: { x: 400, y: 200 },
    style: {
      width: 60, // Adjust the width
      height: 40, // Adjust the height to be equal to width for a round shape
      backgroundColor: '#fff',
      fontSize: '10px', // Adjust the font size
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4px', // Add padding for some spacing around the text
      borderRadius: '50%', // Make the element round
    }
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(nodes.data);
  const [id, setId] = useState();

  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const onNodeClick = (e, val) => {
    setEditValue(val.data.label);
    setId(val.id);
    // setIsEditing(true);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setEditValue(e.target.value);
  }
  const handleEdit = () => {
    const res = nodes.map((item) => {
      if (item.id === id) {
        item.data = {
          ...item.data,
          label: editValue
        }
      }
      return item
    })
    setNodes(res);
    setEditValue('');
  }
  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((node) => node.id === params.source);
      const targetNode = nodes.find((node) => node.id === params.target);
      console.log(sourceNode, "sourceNode", targetNode);

      if (sourceNode && targetNode) {
        const sourceType = sourceNode.data.cond;
        const targetType = targetNode.data.cond;

        // Define valid connections
        const isValidConnection =
          (sourceType === 'Upload Node' && targetType === 'DocuTranscribe Node') ||
          (sourceType === 'DocuTranscribe Node' && targetType === 'Export Node');

        if (isValidConnection) {
          setEdges((eds) => addEdge(params, eds));
        }
      }
    },
    [nodes, setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
  console.log(type,"00000");
  
  let label = '';
  let cond = '';

  switch (type) {
    case 'Upload Node':
      label = (
        <Box display="flex" alignItems="center">
          <AppleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
        </Box>
      );
      cond = 'Upload Node';
      break;

      case 'gmail':
        label = (
          <Box display="flex" alignItems="center">
            <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          </Box>
        );
      cond = 'Upload Node';
      break;
      case 'googledrive':
        label = (
          <Box display="flex" alignItems="center">
            <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          </Box>
        );
      cond = 'Upload Node';
      break;
      case 'outlook':
        label = (
          <Box display="flex" alignItems="center">
            <FacebookIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          </Box>
        );
      cond = 'Upload Node';
      break;
      case 'onedrive':
        label = (
          <Box display="flex" alignItems="center">
            <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          </Box>
        );
      cond = 'Upload Node';
      break;
      case 'sharepoint':
        label = (
          <Box display="flex" alignItems="center">
            <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          </Box>
        );
      cond = 'Upload Node';
      break;
    case 'DocuTranscribe Node':
      label = (
        <Box display="flex" alignItems="center">
          <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          Upload Node
        </Box>
      );
      cond = 'DocuTranscribe Node';
      break;
      case 'document':
        label = (
          <Box display="flex" alignItems="center">
            <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          </Box>
        );
        cond = 'DocuTranscribe Node';
        break;
    case 'Export Node':
      label = (
        <Box display="flex" alignItems="center">
          <AppleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          Upload Node
        </Box>
      );
      cond = 'Export Node';
      break;

      case 'zoho':
      label = (
        <Box display="flex" alignItems="center">
          <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
        </Box>
      );
      cond = 'Export Node';
      break;
      case 'odoo':
      label = (
        <Box display="flex" alignItems="center">
          <GoogleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
        </Box>
      );
      cond = 'Export Node';
      break;
      case 'quickbook':
      label = (
        <Box display="flex" alignItems="center">
          <FacebookIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
        </Box>
      );
      cond = 'Export Node';
      break;
    default:
      label = (
        <Box display="flex" alignItems="center">
          <AppleIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />
          Upload Node
        </Box>
      );
      cond = 'Default Node';
      break;
  }
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // Check if the dropped element is valid
      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label, cond },
        style: {
          width: 60, // Adjust the width
          height: 40, // Adjust the height to be equal to width for a round shape
          backgroundColor: '#fff',
          fontSize: '10px', // Adjust the font size
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4px', // Add padding for some spacing around the text
          borderRadius: '50%', // Make the element round
        }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type],
  );
  const onDeleteNode = (id) => {
    setIsEditing(false)
    setNodes((nds) => nds.filter((node) => node.id !== id));
    setEdges((eds) => eds.filter((edge) => edge.source !== id && edge.target !== id));
  };

  return (
    <div className="dndflow" style={{ width: '100%', height: '100vh' }}>
      {isEditing &&
        (<div>
          <Box
            sx={{
              width: '250px', // Width similar to a sidebar
              padding: 2, // Add padding
              borderRadius: 1, // Optional border radius for rounded corners
              backgroundColor: '#f9f9f9' // Optional background color
            }}
          >
            {/* Input Field */}
            <TextField
              fullWidth
              label="Enter text"
              variant="outlined"
              margin="normal"
              value={editValue}
              onChange={handleChange}
            />

            {/* Update Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              fullWidth
            >
              Update
            </Button>
          </Box>
        </div>)
      }

      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={(e, val) => onNodeClick(e, val)}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={{
            custom: (props) => <CustomNode {...props} removeNode={onDeleteNode} />,
          }}
          fitView
        >
          <Background color='#f1f1f1' gap={3} variant={BackgroundVariant.Lines} />
          <Controls />
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);
