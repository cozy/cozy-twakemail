import React from 'react'

import { BarComponent } from 'cozy-bar'
import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const AppLayout = () => {
  const embeddedMailUrl = flag('mail.embedded-app-url')

  useExternalBridge(embeddedMailUrl)

  return (
    <>
      <BarComponent searchOptions={{ enabled: false }} />
      <iframe id="embeddedApp" src={embeddedMailUrl}></iframe>
    </>
  )
}

export default AppLayout
