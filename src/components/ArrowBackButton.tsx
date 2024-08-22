'use client';

import { Fab } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ArrowBack } from "@mui/icons-material";
import clsx from 'clsx'; // Utility for combining class names

interface ArrowBackButtonProps {
  className?: string; 
}

export default function ArrowBackButton({ className }: ArrowBackButtonProps) {
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
      className={clsx(className)} // Combine Tailwind classes with sx styles
      href="/"
    >
      <ArrowBack />
    </Fab>
  );
};
