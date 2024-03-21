'use client'
import React, { useState } from 'react'
import { Box, Portal, rem, Text, Grid, Flex, Button } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { useHover } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';

function Header() {

    const pinned = useHeadroom({ fixedAt: 120 });

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index: any) => {
        setActiveButton(index);
    };

    const [opened, { toggle, close }] = useDisclosure();

    // Danh sách các nút Button và nội dung tương ứng
    const buttons = [
        { label: 'HOME', link: '/' },
        { label: 'PROJECTS', link: '/projects' },
        { label: 'SKILL & EXPERIENCE', link: '/skills' },
        { label: 'EDUCATION', link: '/education' },
        { label: 'CONTACT', link: '/contact' }
    ];

    return (
        <>
            <Portal>
                <Box
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        padding: 'var(--mantine-spacing-xs)',
                        height: rem(70),
                        zIndex: 0,
                        transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                        transition: 'transform 400ms ease',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '3%',
                        paddingRight: '3%'
                    }}
                >
                    <Box style={{ borderLeft: '7px solid #18D26E' }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '2em',
                            paddingLeft: '5px',
                        }}>
                            Portfolio.
                        </Text>
                    </Box>
                    <Flex
                        direction={{ sm: 'row' }}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                        align={{ sm: 'center' }}
                        style={{
                        }}
                    >
                        {buttons.map((button, index) => (
                            <Button
                                visibleFrom="md"
                                key={index}
                                variant="transparent"
                                color={activeButton === index ? 'green' : 'white'}
                                style={{
                                    fontWeight: 'semibold',
                                    fontSize: '1em',
                                }}
                                onClick={() => handleButtonClick(index)}
                            // href={button.link}
                            >
                                {button.label}
                            </Button>
                        ))}
                        <Burger hiddenFrom="md" color='white' opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    </Flex>
                </Box>
            </Portal >
            <Drawer padding='0' opened={opened} onClose={close} size="xs" position="left" withCloseButton={false} style={{ zIndex: 1 }}>
                <Flex
                    justify='center'
                    direction='column'
                    gap='xl'
                    style={{
                        backgroundColor: 'black',
                        height: '100vh',
                    }}
                >
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant="transparent"
                            color={activeButton === index ? 'green' : 'white'}
                            style={{
                                fontWeight: 'semibold',
                                fontSize: '1.1em',
                            }}
                            onClick={() => handleButtonClick(index)}
                        // href={button.link}
                        >
                            {button.label}
                        </Button>
                    ))}
                </Flex>
            </Drawer>
            {/* <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text> */}
        </>
    )
}

export default Header
