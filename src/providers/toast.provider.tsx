'use client'
import Image from 'next/image'

import { ReactNode, useEffect } from 'react'
import toast, { ToastBar, Toaster, useToaster } from 'react-hot-toast'

import icError from '@/assets/icons/toast/icon-error.svg'
import icInfo from '@/assets/icons/toast/icon-info.svg'
import icSuccess from '@/assets/icons/toast/icon-success.svg'

const TOAST_LIMIT = 3

interface TToastMsg {
  title?: ReactNode
  desc?: ReactNode
}

const Message = ({ title, desc }: TToastMsg) => (
  <div
    style={{
      flex: '1 1 0%',
      margin: '6px 0',
      textAlign: 'start',
    }}
    // className='flex-1 space-y-1.5 text-start'
  >
    <p
      style={{
        fontSize: '16px',
        lineHeight: '24px',
        color: '#0F1D40',
        fontWeight: '600',
      }}
      className='text-base font-semibold text-[#0F1D40]'
    >
      {title}
    </p>
    <p
      style={{
        fontSize: '14px',
        lineHeight: '20px',
        color: '#8991A3',
        fontWeight: '500',
      }}
      className='text-sm font-medium text-[#8991A3]'
    >
      {desc}
    </p>
  </div>
)

export const toastSuccess = (title?: ReactNode, desc?: ReactNode) => {
  const _title = desc ? title : 'Success'
  const _desc = desc ? desc : title
  toast.success(<Message title={_title} desc={_desc} />, {
    duration: 3000,
  })
}

export const toastError = (title?: ReactNode, desc?: ReactNode) => {
  const _title = desc ? title : 'Error'
  const _desc = desc ? desc : title
  toast.error(<Message title={_title} desc={_desc} />, {
    duration: 300000,
  })
}

export const toastInfo = (title?: ReactNode, desc?: ReactNode) => {
  toast.loading(<Message title={title} desc={desc} />, {
    duration: 3000,
  })
}

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause } = handlers

  useEffect(() => {
    if (toasts.length > TOAST_LIMIT) toast.remove(toasts[toasts.length - 1].id)
  }, [toasts.length])

  return (
    <>
      {children}
      <Toaster position='top-right'>
        {(t) => (
          <ToastBar position='top-right' toast={t} style={{ padding: 0, overflow: 'hidden' }}>
            {({ message }) => (
              <button
                onFocus={startPause}
                onBlur={endPause}
                onClick={() => toast.dismiss(t.id)}
                style={{
                  display: 'flex',
                  height: '100%',
                  width: '422px',
                  gap: '16px',
                  borderRadius: '16px',
                  backgroundColor: 'white',
                  border: 'none',
                  padding: 0,
                }}
              >
                <p
                  style={{
                    height: '100%',
                    width: '6px',
                    backgroundColor: t.type === 'success' ? '#0F9918' : t.type === 'error' ? '#E54545' : '#0F1D40',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '20px 0',
                    flex: '1 1 0%',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src={t.type === 'success' ? icSuccess : t.type === 'error' ? icError : icInfo}
                    alt='icon'
                    style={{
                      width: '32px',
                      height: '32px',
                    }}
                  />
                  {message && (message as JSX.Element).props.children}
                </div>
              </button>
            )}
          </ToastBar>
        )}
      </Toaster>
    </>
  )
}

export default ToastProvider
