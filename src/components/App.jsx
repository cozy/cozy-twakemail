import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const App = () => {
  const embeddedMailUrl = flag('mail.embedded-app-url')

  useExternalBridge(embeddedMailUrl)

  return <iframe id="embeddedApp" src={embeddedMailUrl}></iframe>
}

export default App
