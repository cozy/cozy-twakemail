import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import AppLayout from '@/components/AppLayout'

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
