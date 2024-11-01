import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'blue',
});

export default function MantineRegistry({ children }: { children: any }) {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    )
}