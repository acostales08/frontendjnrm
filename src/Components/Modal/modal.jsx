import React from 'react';
import { Button, Modal, Typography } from '@mui/material';

const ControlledModal = ({ open, onClose, title, children }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor: 'white', padding: 16, borderRadius: '10px' }}>
        <Typography variant="h6" component="div" style={{ marginBottom: 16 }}>
          {title}
        </Typography>
        {children}

      </div>
    </Modal>
  );
};

export default ControlledModal;
