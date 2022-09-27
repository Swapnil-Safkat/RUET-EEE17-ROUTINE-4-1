import { secondary } from 'daisyui/src/colors';
import React, { useEffect, useState } from 'react';
import { CourseData } from '../Data/CourseData';
import { resultData } from '../Data/ResultData';


const Courses = () => {
  const [selectCourses, setSelectCourses] = useState(["EEE-4107", "EEE-4117", "IPE-4111"]);
  const [section, setSection] = useState([true, "A"]);
  const [routineData, setRoutineData] = useState(resultData.a);
  const handleCheckBox = event => {
    const clickedCourse = event.target.value;
    if (selectCourses.includes(event.target.value)) {
      setSelectCourses(selectCourses.filter(e => e !== clickedCourse))
    }
    else {
      setSelectCourses([...selectCourses, clickedCourse])
    }
  };
  let buttonE = "border-none bg-gray-400 text-gray-800 hover:text-black scale-90 hover:scale-110 hover:bg-secondary w-1/4";
  let buttonD = "border-2 border-violet-300 bg-violet-800 w-4/6 scale-110";
  useEffect(() => {
    section[0] ? setRoutineData(resultData.a) : setRoutineData(resultData.b);
    localStorage.setItem("selectedCourse", selectCourses);
  }, [selectCourses, section])
  const timePeriod = [section[1], "8-8:50", "8:50-9:40", "9:40-10:30", "10:50-11:40", "11:40-12:30", "12:30-1:30", "2:30-3:20", "3:20-4:10", "4:10-5"]
  // const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed"]
  return (
    <div className='w-full my-8 px-6 flex flex-col lg:flex-row tracking-wide'>
      <div className='w-full lg:w-1/5 '>
        <div className='w-full flex flex-col'>
          <h1 className='text-start text-gray-300 text-2xl font-["Inter var"] font-bold ml-2'>Section</h1>
          <div className='flex flex-row w-full justify-between my-2'>

            <button disabled={section[0]} onClick={() => { setSection([true, "A"]) }
            } className={`shadow-lg shadow-slate-600/20 mx-1 font-bold text-gray-200  ${section[0] ? buttonD : buttonE} rounded-lg px-4 py-2`}>A</button>

            <button disabled={!section[0]} onClick={() => { setSection([false, "B"]) }
            } className={`shadow-lg shadow-slate-600/20 mx-1 font-bold text-gray-200  ${!section[0] ? buttonD : buttonE} rounded-lg px-4 py-2`}>B</button>

          </div>
        </div>
        <div className='bg-gray-400/20 h-[2px] w-full my-3 rounded-md'></div>
        <div className='w-full flex flex-col'>
          <h1 className='text-start text-2xl text-gray-300 font-["Inter var"] font-bold ml-2'>Courses</h1>
          <div className='w-full text-gray-300'>
            {
              CourseData.map(crs => {
                const { id, courseId, course } = crs;
                return <div key={id} className='w-full text-start tracking-wide flex flex-row justify-between items-center bg-stone-800/40 pl-3 py-1 my-4 shadow-lg rounded-md'>
                  <div className='w-full flex flex-col'>
                    <h1 className='text-[13px] text-gray-400 font-semibold font-["Inter var"]'>{courseId}</h1>
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

      <div className='w-full lg:w-4/5 mt-10 px-0 md:px-10'>
        <div className="overflow-x-auto">
          <table className="table w-full text-gray-300">
            <thead>
              <tr>
                {
                  timePeriod.map(tp => {
                    return <th className='text-[10px]  md:text-sm text-center font-bold my-4 tracking-wide'>{tp}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                routineData.map((classes, index) => {
                  return <tr className='font-["Inter var"]'>
                    <th className='bg-[#242933] text-[10px] md:text-base px-2 md:px-4'>{days[index]}</th>
                    {
                      classes.map((cls) => {
                        return cls.length > 1 ?
                          cls.map((c) => {
                            return <td className='bg-zinc-900/20 rounded-md text-center'>
                              {c === "x" || !selectCourses.includes(c.course) ?
                                <h1 className='text-xl text-red-500 font-bold'>X</h1> :
                                <div className='flex flex-col tracking-wide'>
                                  <h1 className='text-[10px] md:text-sm font-bold tracking-widest'>{c.short}</h1>
                                  <div className='h-[2px] bg-green-500/20' />
                                  <h1 className='text-[8px] md:text-[12px] text-gray-400 font-semibold'>{`R-${c.room}`}</h1>
                                  <h1 className='text-[8px] md:text-xs text-gray-400 font-semibold'>{c.teachers}</h1>
                                </div>}</td>
                          }
                          ) : <>
                            <td className='bg-zinc-800/20 text-center'>{ }</td>
                            <td className='bg-zinc-800/20 text-center tracking-wide'>
                              {selectCourses.includes(cls[0].course) ? <div className='flex flex-col'>
                                <h1 className='text-[10px] md:text-sm font-bold tracking-widest'>{cls[0].short}</h1>
                                <div className='h-[2px] bg-green-500/20' />
                                <h1 className='text-[8px] md:text-[10px] text-gray-400 font-semibold'>{cls[0].room}</h1>
                                <h1 className='text-[8px] md:text-xs text-gray-400 font-semibold'>{cls[0].teachers}</h1>
                              </div> : <h1 className='text-xl text-red-500 font-bold'>X</h1>}
                            </td>
                            <td className='bg-zinc-800/20 text-center'>{ }</td>
                          </>
                      }
                      )
                    }
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;