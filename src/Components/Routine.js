import React from 'react';
import { resultData } from '../Data/ResultData';

const Routine = () => {
  console.log(localStorage.getItem("selectedCourse"));

  return (
    <div className='w-1/2 '>
      <h1>Routine</h1>
    </div>
  );
};

export default Routine;