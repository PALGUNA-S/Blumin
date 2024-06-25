import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import logo from '../assets/BLUMIN LOGO.png';

const footerItems = [
    {
        title: (<img src={logo} alt="BLUMIN Logo" style={{ width: '200px', height: 'auto' }} />),
        content: [
            {
                text: 'Bridging the gap between industry and academia.',
            },
        ],
    },
    {
        title: 'Quick Links',
        links: [
            { text: 'About', to: '/about' },
            { text: 'Academia', to: '/academia' },
            { text: 'Industry', to: '/industry' },
            { text: 'Contact Us', to: '/contact-us' },
            { text: 'Register', to: '/register' },
        ],
    },
    {
        title: 'Contact Us',
        links: [
            { text: 'Email: info@bluminiic.com' },
            { text: 'Phone: +1 (123) 456-7890' },
            { text: 'Address: 1234 Innovation Drive, Tech City' },
        ],
        socialLinks: [
            { icon: <Facebook />, to: 'https://facebook.com' },
            { icon: <Twitter />, to: 'https://twitter.com' },
            { icon: <LinkedIn />, to: 'https://linkedin.com' },
            { icon: <Instagram />, to: 'https://instagram.com' },
        ],
    },
];

const Footer = () => {
    const hoverEffectStyle = {
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: 'gray',
        },
    };

    return (
        <Box py={5} sx={{ color: '#e2e2e2', background: 'linear-gradient(35deg, #030303 13.34%, #484848 93.35%);' }}>
            <Container>
                <Box color={'#494949'} mt={2} mb={4}>
                    <Typography variant='h6' fontWeight={600} lineHeight={'36px'} letterSpacing={'3.6px'} fontSize={'36px'}>
                        Driving Growth and Innovation
                    </Typography>
                    <Typography mt={0.5} variant='h6' fontWeight={900} lineHeight={'77px'} letterSpacing={'-0.77px'} fontSize={'77px'}>
                        IGNITING NEW POSSIBILITIES
                    </Typography>

                </Box>

                <Grid container spacing={2} mb={3}>
                    {footerItems.map((item, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Stack spacing={1}>
                                {item.title && (
                                    <Typography variant='h6' fontWeight={500}>{item.title}</Typography>
                                )}
                                {item.content && item.content.map((contentItem, idx) => (
                                    <Typography key={idx} variant="body1">
                                        {contentItem.text}
                                    </Typography>
                                ))}
                                {item.links && item.links.map((link, idx) => (
                                    <Link key={idx} color="inherit" component={RouterLink} to={link.to} sx={hoverEffectStyle}>
                                        <Typography variant='body1' fontWeight={200}>{link.text}</Typography>
                                    </Link>
                                ))}
                                {item.socialLinks && (
                                    <Stack direction="row" spacing={1} mt={2}>
                                        {item.socialLinks.map((socialLink, idx) => (
                                            <IconButton
                                                key={idx}
                                                color="inherit"
                                                component={RouterLink}
                                                to={socialLink.to || '#'}
                                                target="_blank"
                                                sx={hoverEffectStyle}
                                            >
                                                {socialLink.icon}
                                            </IconButton>
                                        ))}
                                    </Stack>
                                )}

                            </Stack>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ backgroundColor: 'gray' }} />

                <Stack direction={'row'} justifyContent={'space-between'} mt={3}>
                    <Stack direction={'row'} spacing={1}>
                        {['Privacy Policy', 'Terms & Conditions'].map((text, index) => (
                            <Link key={index} color="inherit" href={`/${text.toLowerCase().replace(' ', '-')}`} sx={hoverEffectStyle}>
                                <Typography variant="body1" color="inherit" sx={{ textDecoration: 'underline' }}>
                                    {text}
                                </Typography>
                            </Link>
                        ))}
                    </Stack>


                    <Typography variant="body1" color="inherit" >
                        © {new Date().getFullYear()} BLUMIN. All rights reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
