'use client'
import React, { useContext, useState } from 'react'
import { Box, Portal, rem, Text, Grid, Flex, Button } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { useHover } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';
import { useButtonStore } from '../../contexts/ActiveButtonStore';
import Link from 'next/link'
import { ScrollContext } from '@/contexts/ScrollContext';
import HeaderSection from './Header-Section';

function Header() {

    const pinned = useHeadroom({ fixedAt: 120 });


    const [opened, { toggle, close }] = useDisclosure();

    // Danh sách các nút Button và nội dung tương ứng
    const buttons = [
        { label: 'HOME', id: 'introduction' },
        { label: 'PROJECTS', id: 'projects' },
        { label: 'SKILL & EXPERIENCE', id: 'skill-marquee' },
        { label: 'EDUCATION', id: 'education' },
        { label: 'CONTACT', id: 'contact' }
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
                    <Flex
                        visibleFrom="md"
                        direction={{ sm: 'row' }}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                        align={{ sm: 'center' }}
                        style={{
                        }}
                    >
                        {buttons.map((button, index) => (
                            <HeaderSection button={button} key={index} />
                        ))}
                    </Flex>
                    <Burger hiddenFrom="md" color='white' opened={opened} onClick={toggle} aria-label="Toggle navigation" />
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
                        <HeaderSection button={button} key={index} />
                    ))}
                </Flex>
            </Drawer>
            {/* <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text> */}
        </>
    )
}

export default Header
