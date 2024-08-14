'use client'


import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  

  return (
    <Box sx={{ width: '45%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <h2>{`${props.value}/3 causes added`}</h2>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={props.value * (100 / 3)}  
        sx={{ height: 10 }} // Adjust the height value as needed
      />
    </Box>
  );
}

