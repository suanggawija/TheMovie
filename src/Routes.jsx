import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, DetailMovie } from './page'
import { Layout } from './components'

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Home/>}/>
          <Route path='/favorite' element={<Home/>}/>
          <Route path='/detailMovie/:id' element={<DetailMovie/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;