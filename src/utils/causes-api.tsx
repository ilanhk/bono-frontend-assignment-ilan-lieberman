export async function getCauses() {
  const res = await fetch('https://dev.api.bono.so/v1/charity/causes');
  const data = await res.json();
  const causeData = data.data

  return {
    causeData,
    revalidate: 10, // Revalidate every 10 seconds (optional)
  };
};



