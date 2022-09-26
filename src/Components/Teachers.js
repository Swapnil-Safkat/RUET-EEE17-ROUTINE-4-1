import React from 'react';
import { TeacherData } from '../Data/TeacherData';
import Teacher from './Teacher';

const Teachers = () => {
  return (
    <div className='w-full my-8'>
      <h1 className='text-center text-2xl font-["Inter var"] font-bold mb-6 text-gray-300'>Teachers</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
        {
          TeacherData.map(tech => { return <Teacher key={tech.id} tech={tech}></Teacher> })
        }
      </div>
    </div>
  );
};

export default Teachers;