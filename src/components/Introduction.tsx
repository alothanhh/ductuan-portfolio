import { Box, Text } from "@mantine/core"

function Introduction() {
    return <Box
        style={{
            backgroundColor: '#F7F7F7',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px'
        }}>
        <Box>
            <Text>Hi There,</Text>
        </Box>

        <Box>
            Avatar
        </Box>
    </Box>
}

export default Introduction