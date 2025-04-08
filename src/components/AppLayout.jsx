import React from 'react'

import { BarComponent, BarCenter } from 'cozy-bar'
import { useClient } from 'cozy-client'
import { useExternalBridge } from 'cozy-external-bridge/container'
import Typography from 'cozy-ui/transpiled/react/Typography'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

const AppLayout = () => {
  const { isMobile } = useBreakpoints()
  const client = useClient()

  useExternalBridge('https://mail.twake.app')

  return (
    <>
      <BarComponent />
      {isMobile && (
        <BarCenter>
          <Typography variant="h5">{client.appMetadata.slug}</Typography>
        </BarCenter>
      )}
      <iframe id="embeddedApp" src="https://mail.twake.app/"></iframe>
    </>
  )
}

export default AppLayout
