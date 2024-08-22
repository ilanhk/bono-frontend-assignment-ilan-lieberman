import ArrowBackButton from "@/components/ArrowBackButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import SignInForm from "@/components/SignInForm";

export default function SignUpScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
      <ArrowBackButton className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10" />

      <div className="flex flex-col justify-center items-center w-full max-w-md pt-12 sm:pt-16 lg:pt-20">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-7 ml-2 text-center">
          Let&apos;s save your portfolio
        </h1>
        <h2 className="font-bold text-base sm:text-lg lg:text-xl mt-2 ml-2 text-center">
          You will receive weekly impact reports from Bono. Your email is not shared with anyone!
        </h2>

        <GoogleSignInButton />

        <div className="flex items-center my-4 w-full">
          <div className="flex-grow border-t-2 border-gray-400"></div>
          <span className="mx-4 text-gray-600">or</span>
          <div className="flex-grow border-t-2 border-gray-400"></div>
        </div>

        <SignInForm />
      </div>
    </div>
  );
}