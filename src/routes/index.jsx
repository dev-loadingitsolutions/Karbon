import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Wallet from '../pages/wallet'
import Filter from '../pages/filter'
import GymDetails from '../pages/gymDetails'
import Profile from '../pages/profile'
import Classes from '../pages/classes'
import ClassDetail from '../pages/ClassDetails'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/classDetails" element={<ClassDetail />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/gymDetails" element={<GymDetails />} />
    </Routes>
  )
}
