import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box
            sx={{
                background: '#3A3A3A',
                textAlign: 'center',
                padding: '1rem'
            }}
        >
            <Typography
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'24px'}
                fontFamily={'Inter'}
                color={'white'}
            >
                © 2024 PS Academy. All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default Footer