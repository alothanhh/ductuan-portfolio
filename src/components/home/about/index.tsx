'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import { Box, Button, Flex, Text } from '@mantine/core'

import icEmail from '@/assets/icons/icEmail.svg'
import icPhone from '@/assets/icons/icPhone.svg'
import icPlaceMarker from '@/assets/icons/icPlaceMarker.svg'
import imgAvatarFocus from '@/assets/images/avatar.jpg'
import { ScrollContext } from '@/contexts/scroll.context'
import useWindowSize from '@/hooks/use-window-size'
import classes from '@/styles/Button.module.css'

import ScrollFadeUp from '../../shared/scroll-fade-up'

function About() {
  const { isMobile } = useWindowSize()
  const { targetRef, targetId } = useContext(ScrollContext)

  const handleDownload = () => {
    // const pdfUrl = '/cv/CV_Thanh_Dang.pdf'
    // const fileName = 'CV_Thanh_Dang.pdf'
    // const link = document.createElement('a')
    // link.href = pdfUrl
    // link.download = fileName
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
  }

  return (
    <ScrollFadeUp repeat>
      <Box
        id='about'
        ref={targetId === 'about' ? targetRef : null}
        style={{
          backgroundColor: '#F7F7F7',
          padding: isMobile ? '32px' : '64px 128px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          width: '100%',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',
            maxWidth: '700px',
          }}
        >
          <Text
            style={{
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '48px',
            }}
          >
            Hi There,
          </Text>

          <Text
            style={{
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '48px',
              textWrap: 'nowrap',
            }}
          >
            I'm{' '}
            <span
              style={{
                backgroundImage: 'var(--primary-color)',
                color: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tran Duc Tuan
            </span>
          </Text>

          <Image
            src={imgAvatarFocus}
            alt="it's me"
            width={150}
            height={150}
            quality={100}
            style={{
              objectFit: 'cover',
              minWidth: '150px',
              borderRadius: '100%',
              display: isMobile ? 'block' : 'none',
              margin: '8px 0',
              alignSelf: 'center',
            }}
          />

          <Text>
            Dedicated front-end developer skills, merging creativity with technical expertise for visually appealing and
            user-centric websites.
          </Text>

          <Box
            id='contact-and-download-cv'
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '8px',
              gap: '24px',
            }}
          >
            <Box
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  backgroundImage: 'var(--primary-color)',
                  width: '7px',
                }}
              />

              <Box
                style={{
                  backgroundColor: '#F7F7F7',
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '16px',
                }}
              >
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Image src={icPlaceMarker} alt='place-marker' width={24} height={24} />
                  <Text
                    style={{
                      fontSize: '16px',
                      lineHeight: '32px',
                    }}
                  >
                    Ho Chi Minh City, Viet Nam
                  </Text>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Image src={icPhone} alt='phone' width={24} height={24} />
                  <Text
                    style={{
                      fontSize: '16px',
                      lineHeight: '32px',
                    }}
                  >
                    0349 463 683
                  </Text>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Image src={icEmail} alt='email' width={24} height={24} />
                  <Text
                    style={{
                      fontSize: '16px',
                      lineHeight: '32px',
                    }}
                  ></Text>
                </Box>
              </Box>
            </Box>

            <Flex gap={4}>
              <Link href='#' target='_blank'>
                <Button
                  variant='outline'
                  c='rgb(8, 205, 218)'
                  style={{
                    borderColor: 'rgb(8, 205, 218)',
                  }}
                >
                  PREVIEW CV
                </Button>
              </Link>
              <Button onClick={handleDownload} className={classes['button-gradient']}>
                DOWNLOAD CV
              </Button>
            </Flex>
          </Box>
        </Box>

        <Image
          src={imgAvatarFocus}
          alt="it's me"
          width={300}
          height={300}
          quality={100}
          style={{
            objectFit: 'cover',
            minWidth: '300px',
            borderRadius: '100%',
            display: isMobile ? 'none' : 'block',
          }}
        />
      </Box>
    </ScrollFadeUp>
  )
}

export default About
