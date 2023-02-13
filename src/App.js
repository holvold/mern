import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Users from './user/pages/Users'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/home' exact='true' element={<Users />} />
          <Route path='/:userId/places' exact='true' element={<UserPlaces />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </main>
  </Router>
}

export default App;
