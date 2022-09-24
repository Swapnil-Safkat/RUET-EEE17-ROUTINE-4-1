import React from 'react';
import { TeacherData } from '../Data/TeacherData';
import Teacher from './Teacher';

const Teachers = () => {
  return (
    <div className=' w-1/4 my-8'>
      <div className='flex flex-col px-6'>
        {
          TeacherData.map(tech => { return <Teacher tech={tech}></Teacher> })
        }
      </div>
    </div>
  );
};

export default Teachers;