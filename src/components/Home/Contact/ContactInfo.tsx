import { Box, Text } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import { CONTACT_CARD_INFO } from '../../constants/contact.constant'

import ContactCard from './ContactCard'

function ContactInfo() {
  const { isMobile } = useWindowSize()

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '8px',
          borderRadius: '8px',
          padding: isMobile ? '0' : '0 8px',
        }}
      >
        <Text
          style={{
            fontSize: '30px',
            fontWeight: 700,
            lineHeight: '36px',
            marginBottom: '8px',
          }}
        >
          Contact Information
        </Text>

        <Text
          style={{
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '8px',
          }}
        >
          Let&apos;s talk how I can help you to grow your website. I appreciate any kind of suggestions or feedback.
        </Text>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            justifyContent: 'space-between',
            height: '100%',
            maxHeight: '312px',
          }}
        >
          {CONTACT_CARD_INFO.map((item, index) => (
            <ContactCard key={index} logo={item.logo} title={item.title} description={item.description} />
          ))}
        </div>
      </Box>
    </>
  )
}

export default ContactInfo
