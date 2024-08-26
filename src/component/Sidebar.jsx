import React, { useState } from 'react';
import { TextField, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails, Box, ListItemIcon, ListItemText } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDnD } from './DnDContext';

export default function Sidebar() {
    const [_, setType] = useDnD();
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onDragStart = (event, nodeType) => {
        setType(nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Box mt={2}>
                <Accordion expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        '& .MuiAccordionSummary-root': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiAccordionDetails-root': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography fontWeight="bold">Upload</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'gmail')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="Gmail" />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'googledrive')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="GoogleDrive" />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'outlook')} draggable>
                                <ListItemIcon><FacebookIcon /></ListItemIcon>
                                <ListItemText primary="Outlook" />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'onedrive')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="OneDrive" />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'sharepoint')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="SharePoint" />
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box mt={2}>
                <Accordion expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        '& .MuiAccordionSummary-root': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiAccordionDetails-root': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography fontWeight="bold">DocuTrascribe</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'document')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="Docutrascribe" />
                            </Box>
                            
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box mt={2}>
                <Accordion expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        '& .MuiAccordionSummary-root': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiAccordionDetails-root': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography fontWeight="bold">Export</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'zoho')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="Zoho" />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'odoo')} draggable>
                                <ListItemIcon><GoogleIcon /></ListItemIcon>
                                <ListItemText primary="Odoo" />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} onDragStart={(event) => onDragStart(event, 'quickbook')} draggable>
                                <ListItemIcon><FacebookIcon /></ListItemIcon>
                                <ListItemText primary="QuickBook" />
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </aside>
    );
}
