import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import syncor from '../../assets/logo1.png';
import trivenix from '../../assets/logo2.png';

const Partners = () => {
    const partnerLogos = [
        { logo: syncor, text: 'Incubation Partner' },
        { logo: trivenix, text: 'Training Partner' }
    ]; // Array of partner logos and their respective text
    const isMobile = useMediaQuery('(max-width: 600px)'); // Check if screen width is less than 600px

    return (
        <Stack py={5}>
            <Container>
                <Box textAlign="center" color={'#074B65'} mb={4}>
                    <Typography variant="h4" fontWeight={500}>Partnership Network Hub</Typography>
                    <Typography pt={0.2} variant="h6">Fostering Innovation Through Strategic Collaborative Partnerships and Mutual Support.</Typography>
                </Box>
                <Stack direction={isMobile ? 'column' : 'row'} spacing={2} justifyContent="center">
                    {partnerLogos.map((partner, index) => (
                        <Box
                            key={index}
                            textAlign="center"
                            p={2}
                            sx={{
                                borderRadius: '20px 0 20px 0',
                                transition: 'box-shadow 0.5s ease-in-out',
                                '&:hover': {
                                    boxShadow: '5px 5px 10px 2px rgba(0, 0, 0, 0.1)', // Box shadow on hover
                                },
                            }}
                        >
                            <img
                                src={partner.logo}
                                alt={`Partner ${index + 1}`}
                                style={{ height: 200, maxWidth: '100%', marginBottom: 8 }} // Set the height to 100px
                            />
                            <Typography variant="h6" color={'#074B65'} fontWeight={600}>{partner.text}</Typography>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Stack>
    );
}

export default Partners;
