import React from 'react';

const Teacher = ({ tech }) => {
  return (
    <div className='w-full flex flex-row my-3 items-center rounded-full border-2 border-gray-700 shadow-lg shadow-gray-800 bg-zinc-800'>
      <div className="avatar hover:scale-150">
        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={tech.img} alt={tech.short} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-start mx-4 py-2'>
        <h1 className='text-start text-gray-100 text-base font-semibold'>{tech.name }</h1>
        <h1 className='text-start text-gray-400 text-[12px] font-bold'>{tech.short }</h1>
      </div>
    </div>
  );
};

export default Teacher;