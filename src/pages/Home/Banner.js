
import { Box, Button, Stack, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import banner from '../../assets/home-banner.png';
import pageLogo from '../../assets/page-logo.png';

const GlitchTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    fontSize: '66px',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#fff',
    letterSpacing: '4px',
    zIndex: 1,
    '&:before, &:after': {
        display: 'block',
        content: '"Welcome to BLUMIN"',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.8,
    },
    '&:before': {
        animation: 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        color: '#00ffff',
        zIndex: -1,
    },
    '&:after': {
        animation: 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite',
        color: '#ff00ff',
        zIndex: -2,
    },
    '@keyframes glitch-color': {
        '0%': {
            transform: 'translate(0)',
        },
        '20%': {
            transform: 'translate(-3px, 3px)',
        },
        '40%': {
            transform: 'translate(-3px, -3px)',
        },
        '60%': {
            transform: 'translate(3px, 3px)',
        },
        '80%': {
            transform: 'translate(3px, -3px)',
        },
        'to': {
            transform: 'translate(0)',
        },
    },
}));

const BackgroundContainer = styled(Box)({
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#e6f3fb',
    boxSizing: 'border-box',
});

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <BackgroundContainer>
                <Stack sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    borderRadius: '0 20px 0 20px'
                }} p={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <GlitchTypography variant="h2" fontWeight={500} data-glitch="Welcome to BLUMIN">
                            <Typography variant='h2' fontWeight={500}>Welcome to BLUMIN</Typography>
                        </GlitchTypography>
                    </Box>
                    <Typography variant="h5" data-aos="zoom-in">
                        Ideate. Innovate. Illuminate.
                    </Typography>
                    <Stack mt={5} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                        <Button
                            variant="contained"
                            endIcon={<img src={pageLogo} alt="pageLogo" style={{ width: '1.5rem' }} />}
                            sx={{
                                width: { xs: '80%', md: '50%' },
                                "&:hover": {
                                    backgroundColor: "#d3eefe",
                                    boxShadow: "none",
                                },
                                boxShadow: "none",
                                borderRadius: '0 20px 0 20px',
                                background: "#e6f3fb",
                                color: "#074B65",
                                padding: "10px 20px",
                                fontSize: "1rem",
                                justifyContent: "space-between",
                                textTransform: "none",
                                fontWeight: '900'
                            }}
                        >
                            Register Now
                        </Button>
                    </Stack>
                </Stack>
            </BackgroundContainer>
        </>
    );
}

export default Banner;
