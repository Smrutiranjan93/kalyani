import React from 'react';
import { Paper, Typography } from '@mui/material';

const Section = ({ id, title, children }) => {
  return (
    <Paper id={id} sx={{ padding: 4, marginTop: 4 }}>
      <Typography variant="h2">{title}</Typography>
      {children}
    </Paper>
  );
};

export default Section;