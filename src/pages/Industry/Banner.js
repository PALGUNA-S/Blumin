import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box py={12} sx={{ background: 'radial-gradient(at left top, #FFDEF1, #E9E9E9);', color: '#FFF' }}>
            <Container>
                <Box color={'#043D62'} mb={4}>
                    <Typography variant="h4" fontWeight={500}>Industry Solutions for Growth</Typography>
                    <Typography pt={0.2} variant="h6">Collaborative Solutions for Strategic Partnerships and Global Connectivity</Typography>
                </Box>

                <Stack sx={{ background: '#FFFF', borderRadius: '50px 0 50px 0' }} p={3} elevation={3}>
                    <Typography variant="h6" fontWeight={500} color={'#043D62'}>How we aim to help the Industry?</Typography>
                    <Typography variant="body1" color={'black'} mt={0.5}>BLUMIN facilitates strategic partnerships between industry leaders, academic institutions, and global innovators to drive growth and foster innovation. Access top talent, leverage cutting-edge research, and accelerate R&D initiatives with us.</Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Banner;
