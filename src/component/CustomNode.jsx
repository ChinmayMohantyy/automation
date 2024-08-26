import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import UploadIcon from '@mui/icons-material/CloudUpload';
import TranscribeIcon from '@mui/icons-material/Description';
import ExportIcon from '@mui/icons-material/ExitToApp';
import { Handle } from '@xyflow/react';

const CustomNode = ({ id, data, selected, removeNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Choose the correct icon based on the node label
  const renderIcon = () => {
    if (data.label.includes('Upload')) {
      return <UploadIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}} />;
    }
    if (data.label.includes('DocuTranscribe')) {
      return <TranscribeIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}}/>;
    }
    if (data.label.includes('Export')) {
      return <ExportIcon fontSize="small" style={{fontSize:'15px',color:'Highlight'}}/>;
    }
    return null;
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={selected ? 'lightblue' : 'white'}
      border="1px solid #ddd"
      borderRadius="50%" // Make the node circular
      width={60}
      height={60}
      boxShadow={isHovered ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'none'}
    >
      {isHovered && (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => removeNode(id)}
          style={{
            position: 'absolute',
            top: '-24px',
            left:'-10px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      )}
      <Box display="flex" alignItems="center" justifyContent="center">
        {renderIcon()} {/* Render the appropriate icon */}
      </Box>
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </Box>
  );
};

export default CustomNode;
