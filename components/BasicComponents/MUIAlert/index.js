import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <Alert
        variant="soft"
        color="danger"
        onClose={onClose}
        endDecorator={
          <IconButton variant="plain" size="sm" color="danger" onClick={onClose}>
            <CloseRoundedIcon />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Box>
  );
}

export default CustomAlert