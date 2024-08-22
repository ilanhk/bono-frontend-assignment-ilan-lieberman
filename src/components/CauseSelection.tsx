'use client';

import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Check } from "@mui/icons-material";
import LinearProgressWithLabel from "./ProgressBar";
import Button from '@mui/material/Button';
import { ArrowForward } from '@mui/icons-material';

interface Cause {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  tagline: string;
  active: boolean;
  order: number;
  impactBackground: string;
  impactImage: string;
  chosen: boolean;
};

interface CauseSelectionProps {
  listOfCauses: Cause[];
};



export default function CauseSelection({ listOfCauses }: CauseSelectionProps) {
  
  const [count, setCount] = useState(0);
  const [causes, setCauses] = useState<Cause[]>([]);

  useEffect(() => {
    const causesWithChosen = listOfCauses.map((causeIt) => ({
      ...causeIt,
      chosen: false,
    }));
    setCauses(causesWithChosen);
  }, [listOfCauses]);

  const onClickHandler = (id: number, bol: boolean) => {
    const updatedCauses = causes.map(cause => 
      cause.id === id ? { ...cause, chosen: !bol } : cause
    );

    if (!bol && count < 3) {
      setCount(count + 1);
      setCauses(updatedCauses);
    } else if (bol && count <= 3 ) {
      setCount(count - 1);
      setCauses(updatedCauses);
    } 
  };

  return (
    <div className="m-3">
      <div className="causes-selection-container">
        {causes.map((cause: Cause) => (
          <Card 
            key={cause.id} 
            sx={{ 
              border: '2px solid black',
              background: cause.impactBackground,
              
              // Optionally set the height or width to control the card size
              height: '200px', 
              width: '200px',
            }}
            className="card-container"
          >
            <CardContent 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: '1.25rem', 
              }}
            >{cause.title}</CardContent>
            <CardActions>
              <Fab
                color={cause.chosen ? "success" : "primary"}
                aria-label={cause.chosen ? "remove" : "add"}
                onClick={() => onClickHandler(cause.id, cause.chosen)}
                className="fab-button"
              >
                {cause.chosen ? <Check /> : <AddIcon />}
              </Fab>
            </CardActions>
          </Card>
        ))}
      </div>

      <div className="flex-grow border-t-2 border-gray-400 mt-5 mb-5"></div>

      <LinearProgressWithLabel value={count} />

      <Button
        disabled={count !== 3} 
        variant="contained" 
        size="large" 
        href='/signup'
        endIcon={<ArrowForward />}
        className='bg-black text-white font-bold px-8 py-2 rounded-full mt-5'
      >
        Continue
      </Button>
    </div>
  );
}