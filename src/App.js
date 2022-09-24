import './App.css';
import Courses from './Components/Courses';
import Header from './Components/Header';
import Routine from './Components/Routine';
import Teachers from './Components/Teachers';

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <h1 className='font-semibold text-3xl text-gray-300 mb-6'>Class Routine of 7th Semester</h1>
      <div className='flex flex-col md:flex-row justify-between'>
        <Courses></Courses>
        <Routine></Routine>
        <Teachers></Teachers>
      </div>
    </div>
  );
}

export default App;
