
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourites from './pages/Favourites'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddShow from './pages/Admin/AddShow'
import ListBooking from './pages/Admin/ListBooking'
import ListShow from './pages/Admin/ListShow'



const App=() => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
   {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
      <Route path='/admin/*' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='add-shows' element={<AddShow/>}/>
      <Route path='list-shows' element={<ListShow/>}/>
      <Route path='list-bookings' element={<ListBooking/>}/>
      </Route>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
