import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <BrowserRouter>
    <SignIn />
      <Routes>
        <Route path='/user' element={<UserProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
