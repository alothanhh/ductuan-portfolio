import { ReactNode } from 'react'

import ScrollProvider from '@/contexts/scroll.context'

import MantineRegistry from './mantine.provider'
import ToastProvider from './toast.provider'

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <MantineRegistry>
        <ToastProvider>{children}</ToastProvider>
      </MantineRegistry>
    </ScrollProvider>
  )
}

export default AppProvider
