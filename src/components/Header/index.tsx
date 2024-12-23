'use client'
import React, { useContext, useMemo, useState } from 'react'
import { Box, Portal, rem, Text, Grid, Flex, Button } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';
import Link from 'next/link'
import HeaderSection from './Header-Section';
import { usePathname } from 'next/navigation';
import { HEADER_BUTTONS } from '../constants/header.constant';

function Header() {
    const pinned = useHeadroom({ fixedAt: 120 });
    const [opened, { toggle, close }] = useDisclosure();
    const pathName = usePathname()

    const isRootPage = useMemo(() => pathName === "/", [pathName])
    return (
        <>
            <Portal>
                <Box
                    style={{
                        position: 'fixed',
                        inset: 0,
                        padding: 'var(--mantine-spacing-xs)',
                        height: rem(70),
                        zIndex: 10,
                        transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                        transition: 'transform 400ms ease',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: '3%',
                        paddingRight: '3%'
                    }}
                >
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Box style={{ display: 'flex' }}>
                            <div style={{
                                backgroundImage: 'var(--primary-color)',
                                width: '7px',
                            }} />

                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '2em',
                                paddingLeft: '5px',
                            }}>
                                Portfolio.
                            </Text>
                        </Box>
                    </Link>
                    <Flex
                        visibleFrom="md"
                        direction={{ sm: 'row' }}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                        align={{ sm: 'center' }}
                        display={isRootPage ? 'flex' : 'none'}
                    >
                        {HEADER_BUTTONS.map((button, index) => (
                            <HeaderSection button={button} key={index} onClose={close} />
                        ))}
                    </Flex>
                    <Burger
                        hiddenFrom="md"
                        color='white'
                        display={isRootPage ? 'flex' : 'none'}
                        opened={opened}
                        onClick={toggle}
                        aria-label="Toggle navigation"
                    />
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
                    {HEADER_BUTTONS.map((button, index) => (
                        <HeaderSection button={button} key={index} onClose={close} />
                    ))}
                </Flex>
            </Drawer>
            {/* <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text> */}
        </>
    )
}

export default Header
