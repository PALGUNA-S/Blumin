import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../pages/ContactUs/ContactUs.css';

const Register = () => {
    const BackgroundContainer = styled(Box)({
        // height: '70vh',
        // backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${banner})`,
        background: 'radial-gradient(circle, rgba(238,174,202,0.2946428571428571) 0%, rgba(148,187,233,0.16299019607843135) 73%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#074B65',
        boxSizing: 'border-box',
    });

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/RegisterHome');
    };

    return (
        <>
            <BackgroundContainer sx={{ height: { md: '70vh', xs: '40vh' } }}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Stack spacing={2} sx={{
                            textAlign: 'center', background: 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(4px)', py: 6, px: 4, borderRadius: '40px 0 0',
                        }} data-aos="fade-zoom-in" data-aos-duration="2000">
                            <Box>
                                <Typography variant="h4" fontWeight={600} gutterBottom>
                                    Join Our Community
                                </Typography>
                                <Typography variant="body1">
                                    Sign up today and be a part of the innovation journey.
                                </Typography>
                            </Box>
                            <Button onClick={handleRegisterClick} variant="contained" size="large" sx={{ background: '#074B65', borderRadius: '20px 0', boxShadow: 'none', transition: 'background 0.3s ease-in-out', textTransform: 'capitalize', '&:hover': { background: '#D31480', transition: 'background 0.3s ease-in-out', boxShadow: 'none' } }}>
                                Register Now
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </BackgroundContainer>
        </>
    )
}

export default Register
