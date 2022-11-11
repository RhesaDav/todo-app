import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import List from './pages/List';

function App() {
  return (
    <div className='bg-[#E5E5E5] min-h-screen'>
      <Routes>
        <Route index element={<Dashboard/>}/>
        <Route path='/list/:id' element={<List/>}/>
      </Routes>
    </div>
  );
}

export default App;
