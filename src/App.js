import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Auth';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div >
     <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path ="/profile" element={ <RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path ="/login" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
