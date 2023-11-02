
'use client';
import { useState, useEffect } from 'react';

function YourComponent() {
  const [showContainer1, setShowContainer1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContainer1((prevValue) => !prevValue); // Toggle between Container 1 and Container 2
    }, 1000); // Change containers every 2 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div>
      {showContainer1 && <div>Container 1</div>}
      {!showContainer1 && <div>Container 2</div>}
    </div>
  );
}

export default YourComponent;
