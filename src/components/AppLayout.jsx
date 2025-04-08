import React from 'react'

import { BarComponent } from 'cozy-bar'
import { useExternalBridge } from 'cozy-external-bridge/container'

const AppLayout = () => {
  useExternalBridge('https://mail.twake.app')

  return (
    <>
      <BarComponent />
      <iframe id="embeddedApp" src="https://mail.twake.app"></iframe>
    </>
  )
}

export default AppLayout
