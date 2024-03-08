import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Content from './Pages/Content';
import BlogContent from './Pages/BlogContent';
import CurrentAffairContent from './Pages/CurrentAffairContent';
import FaqContent from './Pages/FaqContent';
import PrivacyPolicy from './Pages/privacypolicy';
import TermCondition from './Pages/Term&Condition';
import BuyThisCourse from './Pages/BuyThisCourse';
import RefundPolicy from './Pages/RefundPolicy';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
          <Route path='/blogContent/:id' element={<BlogContent />} />
          <Route path='/currentAffair/:id' element={<CurrentAffairContent />} />
          <Route path='/faq/:id' element={<FaqContent />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/termcondition' element={<TermCondition />} />
          <Route path='/refundpolicy' element={<RefundPolicy />} />
          <Route path='/coursedetail' element={<BuyThisCourse />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
