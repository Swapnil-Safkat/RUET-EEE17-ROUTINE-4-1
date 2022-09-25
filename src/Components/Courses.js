import React, { useEffect, useState } from 'react';
import { CourseData } from '../Data/CourseData';
import Course from './Course';

const Courses = () => {
  const [selectCourses, setSelectCourses] = useState(["EEE-4107", "EEE-4117", "IPE-4111"]);

  const handleCheckBox = event => {
    const clickedCourse = event.target.value;
    if (selectCourses.includes(event.target.value)) {
      setSelectCourses(selectCourses.filter(e => e !== clickedCourse))
    }
    else {
      setSelectCourses([...selectCourses, clickedCourse])
    }
  };

  const handleSection = event => {
    console.log(event.target.checked);
  }
  useEffect(() => {  }, [selectCourses])
  return (
    <div className='w-full lg:w-1/4 my-8 px-6'>
      <div className='w-full flex flex-col'>
        <h1 className='text-start text-2xl font-["Inter var"] font-bold ml-2'>Section</h1>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">A</span>
            <input onChange={handleSection} type="radio" name="section" className="radio checked:bg-blue-500" checked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">B</span>
            <input onChange={handleSection} type="radio" name="section" className="radio checked:bg-blue-500"/>
          </label>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <h1 className='text-start text-2xl font-["Inter var"] font-bold ml-2'>Courses</h1>
        <div className='w-full'>
          {
            CourseData.map(crs => {
              const { id, courseId, course } = crs;
              return <div key={id} className='w-full text-start tracking-wide flex flex-row justify-between items-center bg-stone-800/40 pl-3 py-1 my-4 shadow-lg rounded-md'>
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
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;