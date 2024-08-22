import Button from '@mui/material/Button';
import Image from 'next/image';

const GoogleSignInButton: React.FC = () => {
  return (
    <Button
      sx={{
        mt: 4,
        ml: 2,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        paddingX: 4, // Equivalent to px-8 in Tailwind
        paddingY: 1, // Equivalent to py-2 in Tailwind
        borderRadius: '9999px', // Makes it oval
        border: '2px solid black', // Thick black border
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'white', // Keeps the button white on hover
        }
      }}
    >
      <Image
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        width={20} 
        height={20}
        style={{ marginRight: '8px' }}
      />
      <span
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        Continue with Google
      </span>
    </Button>
  );
};

export default GoogleSignInButton;