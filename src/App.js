import './App.css';
import Login from './Component/login';
import ProfilePage from './Component/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
          <Route path='/ProfilePage' element={<ProfilePage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;