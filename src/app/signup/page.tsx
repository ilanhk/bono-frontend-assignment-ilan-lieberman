

import ArrowBackButton from "@/components/ArrowBackButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import SignInForm from "@/components/SignInForm";

export default function SignUpScreen () {

  return (
    <div className="signin-page">
      <div className="mt-3 ml-2">
        <ArrowBackButton />
      </div>

      <h1 className="font-bold text-5xl mt-7 ml-2">Let&apos;s save your portfolio</h1>
      <h2 className="font-bold text-xl mt-2 ml-2">You will recieve a weekly impact reports from Bono. Your email is not shared with anyone!</h2>

      <GoogleSignInButton />

      <div className="flex items-center my-4">
        <div className="flex-grow border-t-2 border-gray-400"></div>
        <span className="mx-4 text-gray-600">or</span>
        <div className="flex-grow border-t-2 border-gray-400"></div>
      </div>


      <SignInForm />

      
    </div>
  );
};