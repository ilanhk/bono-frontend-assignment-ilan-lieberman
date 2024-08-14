
import { getCauses } from "@/utils/causes-api";
import ArrowBackButton from "@/components/ArrowBackButton";

import CauseSelection from "@/components/CauseSelection";




export default async function CauseSelectionScreen() {

  const data = await getCauses();
  const causes = data.causeData
  

  
  return (
    <div>
      
      <div className="mt-3 ml-2">
        <ArrowBackButton />
      </div>
      

      <h1 className="font-bold text-4xl mt-2 ml-2">Cause Selection Screen</h1>

      <h2 className="font-bold text-xl mt-2 ml-3 text-gray-500">Pick 3 causes that you mostly care about:</h2>

      <CauseSelection listOfCauses={causes} />
      



      
      
      
    </div>
  );
}