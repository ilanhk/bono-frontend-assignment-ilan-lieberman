import Link from "next/link";
import Button from '@mui/material/Button'; 

export default function Header() {
  return ( 
    <div className="w-full  text-white z-10">
      <nav className="bg-black flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>

        <Button 
          className="ml-auto
           text-black 
          font-bold bg-gray-300"
          variant="contained" 
          href="/signup"
        >
            Login
        </Button>
      </nav>
    </div>
  )
};