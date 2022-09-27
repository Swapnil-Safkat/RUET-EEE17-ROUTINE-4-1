import './App.css';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Teachers from './Components/Teachers';

function App() {
  return (
    <div className="App min-h-screen w-full">
      <Header />
      <h1 className='font-semibold text-xl md:text-3xl px-8 font-["Inter var"] text-gray-300 mb-6'>Class Routine of 7th Semester</h1>
      <div className='flex flex-col justify-between'>
        <Courses></Courses>
        <Teachers></Teachers>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
