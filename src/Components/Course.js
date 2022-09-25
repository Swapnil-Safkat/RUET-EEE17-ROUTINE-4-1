import React, { useState } from 'react';

const Course = ({ crs }) => {
  const { id, courseId, course } = crs;
  const [selectCourses, setSelectCourses] = useState([]);
  const handleCheckBox = event => {
    console.log(...selectCourses);
    setSelectCourses([...selectCourses, event.target.value]);
    console.log(selectCourses);
  };
  return (
    <div className='w-full text-start tracking-wide flex flex-row justify-between items-center bg-stone-800/40 pl-3 py-1 my-4 shadow-lg rounded-md'>
      <div className='w-full flex flex-col'>
        <h1 className='text-[13px] font-semibold font-["Inter var"]'>{courseId}</h1>
        <h1 className='text-base font-["Inter var"] font-semibold'>{course} </h1>
      </div>
      <div className="form-control">
        {
          id > 2 ?
            <input onChange={handleCheckBox} value={courseId} name='coursebox' type="checkbox" className="checkbox checkbox-accent w-4 h-4 mr-4" />
            : <></>
        }
      </div>
    </div>
  );
};

export default Course;