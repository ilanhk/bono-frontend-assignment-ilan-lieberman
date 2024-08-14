'use client';

import { Fab } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ArrowBack } from "@mui/icons-material";

export default function ArrowBackButton (){
  const theme = useTheme();
  return (
    <Fab 
        sx={{ 
          backgroundColor: 'black', 
          color: 'white',
          '&:hover': {
            backgroundColor: theme.palette.primary.main, // Use primary color on hover
          }
        }}
        href="/"
      >
        <ArrowBack />
      </Fab>
  );
};