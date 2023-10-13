import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import About from "./About"
import Vans from "./Vans"
import VanDetail from "./VanDetail"

import "./index.css"

import Layout from './components/Layout'

import Dashboard from './host/Dashboard'
import Income from './host/Income'
import Reviews from './host/Reviews'

import HostLayout from './components/HostLayout'
import HostVans from './host/HostVans'
import HostVanDetail from './host/HostVanDetail'

import HostVanInfo from './host/HostVanInfo'
import HostVanPhotos from './host/HostVanPhotos'
import HostVanPricing from './host/HostVanPricing'
import NotFound from './NotFound'

function App() {
  return (      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element = {<Vans/>} />
          <Route path="/vans/:id" element = {<VanDetail/>} />

          <Route path="/host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="vans" element={<HostVans/>}/>
            <Route path="vans/:id" element={<HostVanDetail/>}>
              <Route index element={<HostVanInfo/>} />
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
  )
}

export default App
