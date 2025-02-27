import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import AppLayout from '@/components/AppLayout'

const routes = [
  {
    path: '*',
    element: <AppLayout />
  }
]

const AppRouter = () => {
  const router = createHashRouter(routes)
  return <RouterProvider router={router} />
}

export default AppRouter
