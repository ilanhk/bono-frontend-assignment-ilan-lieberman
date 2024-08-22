import { Metadata } from 'next';
import Header from "@/components/Header";
import IntroPart from "@/components/IntroPart";

export const metadata: Metadata = {
  title: "Bono Assignment",
  description: "Choose any charitable cause you would like to support",
};

export default function Home() {
  return (
  <div className="w-full h-screen px-4 sm:px-6 lg:px-8">
    <Header />

    <IntroPart />


  </div>
  );
}
