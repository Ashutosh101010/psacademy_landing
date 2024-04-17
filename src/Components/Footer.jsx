import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{
            background: '#3A3A3A',
            textAlign: 'center',
            padding: '0.5rem'
        }}>
            <Box>
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
            <Box
                display={'flex'}
                gap={'10px'}
                padding={'5px'}
                justifyContent={'center'}
                textAlign={'center'}
            >
                <Typography
                    color={'#fff'}
                    fontFamily={'Inter'}
                    fontSize={['11px', '16px']}
                    fontWeight={'400'}
                    lineHeight={'24px'}
                    // onClick={handleNavigatePolicy}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    <a href='/privacypolicy' style={{ color: '#fff', textDecoration: 'none' }}>
                        Privacy Policy  |
                    </a>
                </Typography>
                <Typography
                    color={'#fff'}
                    fontFamily={'Inter'}
                    fontSize={['11px', '16px']}
                    fontWeight={'400'}
                    lineHeight={'24px'}
                    // onClick={handleNavigateTerm}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    <a href='/termcondition' style={{ color: '#fff', textDecoration: 'none' }}>
                        Terms and Conditions |
                    </a>
                </Typography>
                <Typography
                    color={'#fff'}
                    fontFamily={'Inter'}
                    fontSize={['11px', '16px']}
                    fontWeight={'400'}
                    lineHeight={'24px'}
                    // onClick={handleNavigateRefund}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    <a href='/refundpolicy' style={{ color: '#fff', textDecoration: 'none' }}>
                        Refund Policy
                    </a>
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer