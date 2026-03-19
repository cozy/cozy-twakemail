import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import Mail from './Icons/Mail'
import MailText from './Icons/MailText'

const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={Mail}
        appTextIcon={MailText}
      />
      <Outlet />
    </>
  )
}

export default AppLayout
