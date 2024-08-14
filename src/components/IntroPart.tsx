import Button from '@mui/material/Button';
import { Fab } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function IntroPart (){
  return (
    <div className="text-black p-20">
      
      <div >
        <h1 className="font-bold text-5xl mt-20 ml-2">Let Build your non-profit portfolio</h1>
        <p className="font-bold text-2xl mt-2 ml-2">Join the movement and help fix the October 7th aftermath</p>

        <div className='intro-fabs mt-20 mb-10'>
          <p className="font-bold text-xl"><Fab color="primary">1</Fab> Choose causes</p>
          <p className="font-bold text-xl"><Fab color="primary">2</Fab> Save your portfolio</p>
          <p className="font-bold text-xl"><Fab color="primary">3</Fab> Subscribe to make an impact</p>
          <p className="font-bold text-xl"><Fab color="primary">4</Fab> Recieve weekly impact updates</p>
        </div>
      </div>
      
      <Button 
        variant="contained" 
        size="large" 
        href='/causeselection'
        endIcon={<ArrowForward />}
        className='bg-black text-white font-bold px-8 py-2 rounded-full mb-4'
        >
          Let&apos;s get started
        </Button>

        <p className="terms-text">
          By continuing you will agree to our
          <a href="/terms-and-conditions" className="terms-link font-bold text-small underline ml-1 mr-1">Terms and Conditions</a>
          and
          <a href="/terms-and-conditions" className="terms-link font-bold text-small underline ml-1">Privacy</a>
        </p>
     
    </div>
  );
};