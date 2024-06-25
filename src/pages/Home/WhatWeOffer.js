import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import cardimg1 from '../../assets/1.jpg';
import cardimg2 from '../../assets/2.jpg';
import cardimg3 from '../../assets/3.jpg';
import cardimg4 from '../../assets/4.jpg';
import cardimg5 from '../../assets/5.jpg';
import cardimg6 from '../../assets/2.jpg';

const services = [
    {
        image: cardimg1,
        title: 'Unlock Limitless Opportunities by Connecting with Industry Leaders and Innovators',
        content: 'Expand your professional network and gain valuable insights from industry leaders, fellow innovators, and experienced professionals in your field. Networking is not only key but essential to success in today’s fast-paced and competitive world.',
        bgColor: 'radial-gradient(at left top, #CAE8F2, #E9E9E9);'
    },
    {
        image: cardimg2,
        title: 'Unlocking Innovation: Collaborating with Leading Companies for Academic Excellence',
        content: 'Discover endless possibilities for academic collaboration as universities engage with industry leaders, driving innovation, fostering academic excellence, and creating transformative partnerships that benefit both students and professionals in the field.',
        bgColor: 'radial-gradient(at left top, #FFE7F5, #E9E9E9);'
    },
    {
        image: cardimg3,
        title: 'Joint Research Projects and Professional Growth Opportunities',
        content: 'Discover our exciting joint research projects and professional growth opportunities designed to accelerate innovation and foster your professional development.',
        bgColor: 'radial-gradient(at left top, #D3ECFF, #E9E9E9);'
    },
    {
        image: cardimg4,
        title: 'Unlocking Innovation: Collaborating with Leading Companies for Academic Excellence',
        content: 'Discover endless possibilities for academic collaboration as universities engage with industry leaders, driving innovation, fostering academic excellence, and creating transformative partnerships that benefit both students and professionals in the field.',
        bgColor: 'radial-gradient(at left top, #B9E3FE, #E9E9E9);'
    },
    {
        image: cardimg5,
        title: 'Enhance Your Skills Through Our Comprehensive Training Programs',
        content: 'Our training programs are designed to equip you with the latest skills and knowledge needed to thrive in today’s competitive environment. Participate in workshops, seminars, and hands-on sessions led by industry experts.',
        bgColor: 'radial-gradient(at left top, #CAD6DA, #E9E9E9);'
    },
    {
        image: cardimg6,
        title: 'Join Our Community for Exclusive Resources and Support',
        content: 'Become a part of our vibrant community and gain access to exclusive resources, support networks, and collaborative opportunities. Whether you are a student, professional, or entrepreneur, we provide the tools you need to succeed.',
        bgColor: 'radial-gradient(at left top, #FFDEF1, #E9E9E9);'
    },
];


const WhatWeOffer = () => {
    return (
        <Box sx={{ background: 'linear-gradient(270deg, #DCE6F1 3.99%, rgba(231, 231, 231, 0.52) 73.83%);' }}>
            <Container sx={{ py: 5 }}>
                <Stack color="#074B65" mb={4} textAlign="center">
                    <Typography variant="h4" fontWeight={500}>
                        Explore Our Services
                    </Typography>
                    <Typography pt={0.2} variant="h6">
                        Connecting professionals, fostering innovation, and driving collaborative success.
                    </Typography>
                </Stack>

                <Grid container spacing={2}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', boxShadow: 'none', borderRadius: '30px 0 0' }} data-aos="fade-up" data-aos-duration="3000">
                                <Box sx={{ backgroundImage: service.bgColor, height: '100%', }}  >
                                    <CardMedia>
                                        <Box component="img" src={service.image} sx={{ width: '100%' }} alt={`Service ${index + 1}`} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={500} color={'#074B65'}>{service.title}</Typography>
                                        <Typography variant="body1" fontSize={'1rem'}>{service.content}</Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhatWeOffer;
